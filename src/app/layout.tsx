import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sahara-society.github.io/Sahara/"),
  title: "SAHARA — The Social Welfare Society | IIT Madras BS Degree",
  description:
    "Official website of SAHARA, the Social Welfare Society of the IIT Madras BS Degree Programme. Dedicated to raising awareness, inspiring compassion, and promoting humanity through grassroots volunteering and student initiatives.",
  keywords: [
    "SAHARA",
    "IIT Madras",
    "IIT Madras BS Degree",
    "Social Welfare Society",
    "Volunteering",
    "Student Society",
    "Robin Hood Army",
    "Animal Aid Unlimited",
    "Community Service",
  ],
  authors: [{ name: "SAHARA IIT Madras", url: "https://sahara-society.github.io/Sahara/" }],
  icons: {
    icon: "/images/branding/sahara-logo.jpeg",
    apple: "/images/branding/sahara-logo.jpeg",
  },
  openGraph: {
    title: "SAHARA — The Social Welfare Society | IIT Madras BS Degree",
    description:
      "Together, We Make a Difference. Instilling purpose and joy in community welfare through offline NGO volunteering, guest sessions, and student-driven social impact.",
    siteName: "SAHARA IIT Madras",
    images: [
      {
        url: "/images/branding/sahara-logo.jpeg",
        width: 1200,
        height: 1200,
        alt: "SAHARA Society Official Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#863c0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen font-sans bg-warm-50 text-stone-900 antialiased selection:bg-sahara-200 selection:text-sahara-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sahara-800 focus:text-white focus:rounded focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
