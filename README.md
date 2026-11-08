# SAHARA — The Social Welfare Society | IIT Madras BS Degree

> **Official Website:** Designed and built for **SAHARA – The Social Welfare Society of the IIT Madras BS Degree Programme**.  
> **Repository:** [https://github.com/22f3002886/Sahara_Website.git](https://github.com/22f3002886/Sahara_Website.git)  
> **Official Contact:** [connectwithsahara@study.iitm.ac.in](mailto:connectwithsahara@study.iitm.ac.in)

---

## 🌟 Overview & Identity

**SAHARA** is the official Social Welfare Society of the **IIT Madras Bachelor of Science (BS) Degree Programme**. While students in this premier program pursue intensive coursework in Data Science and Electronic Systems from across the globe, SAHARA unites willing hearts to create tangible, offline, and online social impact.

### Core Mission & Triad
- **Awareness:** Highlighting pressing social concerns, animal welfare needs, and grassroots initiatives through discussions, contests, and masterclasses.
- **Compassion:** Fostering genuine empathy for underprivileged communities, stray animals, and marginalized groups.
- **Humanity:** Translating intention into action via hands-on, on-ground volunteering expeditions with established non-profits.

---

## 🎨 Human-Centered Design Philosophy

This website was intentionally designed to resemble an art-directed university publication or respected humanitarian NGO—strictly avoiding the generic clichés of AI-generated landing pages:

- **Bespoke Color Palette:** Directly extracted from the new official SAHARA emblem:
  - Deep Brand Terracotta (`#863c0d`, `#9c4c19`)
  - Warm Earth & Amber Accents (`#e07a16`, `#fef0d6`, `#fce0ad`)
  - Warm Sand & Paper Neutrals (`#faf8f5`, `#f5f0ea`, `#ddcebe`, `#1c1917`)
  - Forest Sage Accents (`#29432d`) symbolizing hope, environmental care, and service.
- **Refined Typography:** Editorial pairing of **Lora** (humanist serif for headlines and reflections) with **Plus Jakarta Sans** (clean, readable sans-serif for body and navigational elements).
- **Authentic Photography Only:** Zero artificial stock photos or AI-generated faces. All media features SAHARA’s actual offline drives in Indore (Robin Hood Army) and Udaipur (Animal Aid Unlimited), alongside verified student leadership portraits.
- **Restrained Visual Balance:** Intentional whitespace, editorial layout variations, crisp contrast, accessible focus rings, and smooth micro-interactions respecting `prefers-reduced-motion`.

---

## 📐 Implemented Scope & Sections

1. **Header & Navigation (`src/components/Header.tsx`):**
   - Official SAHARA emblem & IIT Madras BS affiliation badge.
   - Smooth section scrolling to `#about`, `#activities`, `#team`, `#gallery`, and `#contact`.
   - Fully responsive desktop bar and mobile drawer menu with backdrop blur, keyboard accessibility (`Esc` dismiss), and automatic scroll locking.

2. **Hero Section (`src/components/Hero.tsx`):**
   - Bold editorial statement: *"Together, We Make a Difference."*
   - Authentic opening narrative grounded in student community service.
   - High-resolution genuine photo frame capturing the Indore Robin Hood Army initiative.
   - Quick-action buttons: *Explore Our Work* and *Join SAHARA / Connect*.

3. **About SAHARA (`src/components/About.tsx`):**
   - Narrative on cultivating social responsibility among distance learners.
   - Clear declaration of the society's **Mission** and **Vision**.
   - 4 Foundational Pillars:
     - *Pillar 01:* Impacting Real Lives
     - *Pillar 02:* Spreading Awareness
     - *Pillar 03:* Hands-on Field Volunteering
     - *Pillar 04:* Bridging the Student-Community Gap
   - Key student leadership attributes nurtured through fieldwork.

4. **Events & Activities (`src/components/Events.tsx`):**
   - Authentic, chronological documentation of past welfare initiatives (no past events disguised as upcoming):
     - **Robin Hood Army (Indore, MP):** 2-day painting drive, stationery kit distribution (₹3,500+ raised by students), and personal hygiene workshops for 30 children.
     - **Animal Aid Unlimited (Udaipur, Rajasthan):** Hands-on medical sanctuary volunteering and animal rehabilitation.
     - **Peepal Farm Masterclass:** Guest session with founder Robin Singh on minimizing suffering.
     - **Pan-India Poster Competition:** National social issues contest in partnership with Diplomacia Society.
     - **RAKSHAK:** Leadership dialogue with Major Sidram Solankar (Ex-NSG Commando).
     - **Inaugural Society Orientation:** Official launch charter with 100+ live student attendees.
   - Editorial cards featuring partner badges, metrics, and photo documentation.
   - Interactive category filter pills.

5. **Photo Gallery (`src/components/Gallery.tsx`):**
   - High-fidelity grid with category filters (*Child Upliftment*, *Animal Welfare*, *Community Action*, *Campus Life*).
   - Interactive Lightbox Modal with full keyboard support (`Escape` to close, `ArrowLeft` / `ArrowRight` for looping photo navigation).
   - Descriptive `alt` tags, location metadata, and date stamps.
   - Verified links to SAHARA’s comprehensive Google Photos albums.

6. **Our Team (`src/components/Team.tsx`):**
   - Centralized data architecture (`src/data/team.ts`).
   - Verified founding officers, domain heads, advisors, and core members with authentic reflections and official photographs:
     - *Founders & Leadership:* Ritik Raghuwanshi, Shubhansh Varshney.
     - *Domain Heads:* Parampreet Singh (Web Administrator), Aayushi Sharma (Content), Rishita Sen (Management), Omprakash Meena (Social Media).
     - *Advisors:* Ayush Khade, Krishnan Lakshmi Narayana.
     - *Core Team:* Devottam Vaishnav, Dhanush, Ankit Prajapati, Akash.
   - Interactive role-filtering pills (*Leadership*, *Heads*, *Advisors*, *Core Team*).

7. **Contact Us & Functional Mail Delivery (`src/components/Contact.tsx` & `src/app/api/contact/route.ts`):**
   - **Frontend:**
     - Zod schema validation for Name, Email, Purpose, Subject, and Message.
     - Accessible inline validation feedback (`aria-invalid`, `aria-describedby`).
     - Interactive loading state with spinner and disable flags during submission.
     - Confirmation banners with retry capability.
   - **Backend API (`/api/contact`):**
     - Server-side Zod validation.
     - Anti-spam honeypot verification.
     - In-memory rate limiting (max 5 submissions per 10 minutes per IP).
     - Resend integration delivering structured, branded HTML and plain-text emails to `connectwithsahara@study.iitm.ac.in`.
     - `reply_to` configured directly to the visitor's submitted email address.
     - Simulation fallback mode when API keys are absent, ensuring graceful local testing without errors.

8. **Footer (`src/components/Footer.tsx`):**
   - Official SAHARA emblem, IIT Madras BS affiliation, navigation links, and official email.
   - Verified external links to LinkedIn (650+ followers), Instagram (380+ members), YouTube, and legacy GitHub reference.
   - Back-to-top shortcut and copyright notices.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router, Server & Client Components) |
| **Language** | TypeScript 5 (Strict Mode) |
| **Styling** | Tailwind CSS 3.4 with custom design tokens |
| **Validation** | Zod 3.24 (Client & Server) |
| **Icons** | Lucide React |
| **Email Delivery** | Resend API SDK |
| **Fonts** | Google Fonts (*Plus Jakarta Sans* & *Lora*) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.18+` or `v20+` or `v22+`
- npm `v9+` or `v10+`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/22f3002886/Sahara_Website.git
   cd Sahara_Website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   ```env
   # Resend API Key for live email delivery
   RESEND_API_KEY=re_your_api_key_here

   # Target recipient
   CONTACT_NOTIFICATION_EMAIL=connectwithsahara@study.iitm.ac.in

   # Sender identity verified in Resend
   RESEND_FROM_EMAIL=SAHARA Inquiries <onboarding@resend.dev>
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Create a production build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🛡️ Security & Quality Standards

- **Environment Isolation:** Zero credentials, keys, or sensitive tokens are stored in source code. `.gitignore` prevents tracking `.env` or build outputs.
- **Input Sanitization:** Client-side and server-side validation reject malformed emails, short inputs, or buffer-overflow payloads.
- **Bot Mitigation:** Hidden honeypot traps automated form scrapers without impeding human users.
- **Accessibility:** Semantic HTML5 (`header`, `main`, `section`, `article`, `footer`), `aria-expanded`, `aria-controls`, `role="dialog"`, accessible focus rings, and a *Skip to main content* shortcut.
- **Responsive Testing:** Tested across standard screen widths: 360px, 390px, 430px, 768px, 1024px, 1280px, 1440px, and 1920px.

---

## 📜 Continuous Version Control Milestones

Development progressed through 13 discrete, verified commits tracked continuously on GitHub:

1. `chore: initialize SAHARA website project`
2. `style: establish SAHARA design system`
3. `feat: implement responsive header and navigation`
4. `feat: build SAHARA hero section`
5. `feat: implement about SAHARA section`
6. `feat: add SAHARA team section`
7. `feat: implement events and activities section`
8. `feat: add responsive gallery with image preview`
9. `feat: implement contact form UI and validation`
10. `feat: integrate functional contact form email delivery`
11. `feat: complete website footer and page integration`
12. `fix: improve responsiveness and accessibility`
13. `chore: finalize testing and documentation`

---

*SAHARA — The Social Welfare Society • IIT Madras BS Degree Programme*  
*Together, We Make a Difference.*
