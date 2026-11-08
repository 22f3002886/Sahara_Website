export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Leadership" | "Heads" | "Advisors" | "Core Team";
  image: string;
  quote?: string;
  bio?: string;
}

export interface ActivityEvent {
  id: string;
  title: string;
  category: "Field Initiative" | "Guest Lecture" | "Student Contest" | "Community Drive";
  date: string;
  location?: string;
  partner?: string;
  partnerLogo?: string;
  summary: string;
  details: string[];
  image: string;
  impactMetrics?: { label: string; value: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: "Animal Welfare" | "Child Upliftment" | "Community Action" | "Campus Life";
  src: string;
  date: string;
  location: string;
  alt: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}
