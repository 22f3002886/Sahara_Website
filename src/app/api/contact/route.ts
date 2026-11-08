import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactRequestSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(150),
  purpose: z.string().trim().min(1, "Purpose is required").max(100),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().trim().min(15, "Message must be at least 15 characters").max(5000),
  honeypot: z.string().max(0, "Spam detected").optional(),
});

// Simple in-memory rate limiting: 5 requests per 10 minutes per IP
interface RateLimitEntry {
  count: number;
  resetTime: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  entry.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP identification & rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many inquiries sent from your network. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse & validate request body
    const body = await req.json();
    const parseResult = contactRequestSchema.safeParse(body);

    if (!parseResult.success) {
      const issue = parseResult.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          error: issue?.message || "Invalid contact form submission data.",
        },
        { status: 400 }
      );
    }

    const { name, email, purpose, subject, message, honeypot } = parseResult.data;

    // 3. Honeypot check (bot prevention)
    if (honeypot && honeypot.length > 0) {
      // Quiet rejection for automated spam scripts
      return NextResponse.json(
        { success: false, error: "Automated submission rejected." },
        { status: 400 }
      );
    }

    // 4. Email delivery setup
    const recipientEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "connectwithsahara@study.iitm.ac.in";
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "SAHARA Inquiries <onboarding@resend.dev>";

    // If Resend API key is not configured or still template placeholder
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.warn(
        `[SAHARA Contact Backend] RESEND_API_KEY is not configured. Inquiry received from ${name} <${email}> regarding "${subject}" [${purpose}]. Message preview: ${message.slice(
          0,
          100
        )}...`
      );

      return NextResponse.json(
        {
          success: true,
          simulated: true,
          message:
            "Thank you! Your message was received by our server. Note: Configure RESEND_API_KEY in .env.local to enable real-time SMTP delivery to connectwithsahara@study.iitm.ac.in.",
        },
        { status: 200 }
      );
    }

    // 5. Send email via Resend
    const resend = new Resend(apiKey);

    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e7e5e4; border-radius: 8px; background-color: #faf8f5;">
        <div style="border-bottom: 2px solid #863c0d; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="color: #863c0d; margin: 0 0 4px 0; font-size: 22px;">SAHARA — New Website Inquiry</h2>
          <p style="color: #78716c; margin: 0; font-size: 13px;">Social Welfare Society • IIT Madras BS Degree Programme</p>
        </div>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #78716c; width: 120px;"><strong>Sender Name:</strong></td>
            <td style="padding: 8px 0; color: #1c1917;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #78716c;"><strong>Email Address:</strong></td>
            <td style="padding: 8px 0; color: #1c1917;"><a href="mailto:${email}" style="color: #9c4c19;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #78716c;"><strong>Inquiry Type:</strong></td>
            <td style="padding: 8px 0; color: #1c1917;"><span style="background-color: #fef0d6; color: #863c0d; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 12px;">${purpose}</span></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #78716c;"><strong>Subject:</strong></td>
            <td style="padding: 8px 0; color: #1c1917;"><strong>${subject}</strong></td>
          </tr>
        </table>

        <div style="background-color: #ffffff; padding: 16px; border: 1px solid #e7e5e4; border-radius: 6px; margin-bottom: 20px;">
          <h3 style="margin: 0 0 8px 0; color: #44403c; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Message Content</h3>
          <p style="color: #292524; line-height: 1.6; margin: 0; white-space: pre-wrap; font-size: 14px;">${message}</p>
        </div>

        <div style="border-top: 1px solid #e7e5e4; padding-top: 12px; font-size: 12px; color: #a8a29e;">
          <p style="margin: 0;">Dispatched via SAHARA IIT Madras Website Contact Portal • Reply to this email to respond directly to ${email}.</p>
        </div>
      </div>
    `;

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: fromEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `[SAHARA Website] ${purpose}: ${subject} (from ${name})`,
      html: emailHtml,
      text: `SAHARA Website Inquiry\n\nFrom: ${name} (${email})\nPurpose: ${purpose}\nSubject: ${subject}\n\nMessage:\n${message}\n\nReply directly to ${email} to contact the sender.`,
    });

    if (emailError) {
      console.error("[SAHARA Contact Backend] Resend error:", emailError);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to deliver email through notification service. Please try emailing directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        messageId: emailData?.id,
        message:
          "Thank you! Your message has been delivered to connectwithsahara@study.iitm.ac.in. A team coordinator will review it shortly.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[SAHARA Contact Backend] Unexpected error:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected internal error occurred while processing your inquiry.",
      },
      { status: 500 }
    );
  }
}
