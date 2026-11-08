import { ActivityEvent } from "@/types";

export const ACTIVITIES_AND_EVENTS: ActivityEvent[] = [
  {
    id: "robin-hood-army-indore",
    title: "Huge Smiles, Little Hearts — Collaboration with Robin Hood Army",
    category: "Field Initiative",
    date: "November 21–22, 2023",
    location: "Indore, Madhya Pradesh",
    partner: "Robin Hood Army (RHA)",
    partnerLogo: "/images/activities/rha-logo.png",
    summary:
      "A 2-day on-ground welfare drive in Indore where 30+ IIT Madras BS students organized workshops, educational drives, and nutrition distribution for 30 underprivileged children.",
    details: [
      "Distributed stationary learning kits worth ₹3,500+ funded entirely through heartfelt contributions from the IIT Madras BS student community.",
      "Conducted a creative painting and arts competition for children living in underserved settlements, awarding chocolates, stationery, and art materials.",
      "Delivered essential nutrition and freshly prepared food packets in partnership with local Robin Hood Army coordinators.",
      "Female student volunteers conducted interactive guidance sessions covering vital personal hygiene, health awareness, and educational mentorship.",
    ],
    image: "/images/events/robin-hood-army.jpeg",
    impactMetrics: [
      { label: "Children Supported", value: "30+" },
      { label: "Student Volunteers", value: "30+" },
      { label: "Stationery Distributed", value: "₹3,500+" },
      { label: "Duration", value: "2 Days" },
    ],
  },
  {
    id: "animal-aid-unlimited-udaipur",
    title: "A Day in Animal Aid Unlimited — Hands-on Compassionate Care",
    category: "Field Initiative",
    date: "October 1–2, 2023",
    location: "Udaipur, Rajasthan",
    partner: "Animal Aid Unlimited India (AAU)",
    partnerLogo: "/images/activities/aau-logo.png",
    summary:
      "SAHARA's 1st major offline field activity brought 30+ students to Udaipur for immersive volunteer work at AAU's rescue hospital and sanctuary for disabled animals.",
    details: [
      "Assisted sanctuary staff with feeding, compassionate handling, and rehabilitation care for paralyzed and rescued street animals.",
      "Gained deep operational insights into non-profit rescue hospital management, emergency medical protocols, and community animal advocacy.",
      "Contributed direct student donations and merchandise support to sustain the shelter's medical facilities.",
      "Blended social service with student peer bonding, fostering lifelong friendships across our distance-learning collegiate community.",
    ],
    image: "/images/events/animal-aid-unlimited.jpg",
    impactMetrics: [
      { label: "Student Cohort", value: "30+ Volunteers" },
      { label: "Focus Area", value: "Animal Rescue & Rehab" },
      { label: "Activity Type", value: "On-site Volunteering" },
    ],
  },
  {
    id: "peepal-farm-guest-session",
    title: "Guest Session with Robin Singh — Founder of Peepal Farm",
    category: "Guest Lecture",
    date: "October 16, 2023",
    location: "Live Digital Masterclass",
    partner: "Peepal Farm",
    summary:
      "A profound interactive session exploring how technology, entrepreneurship, and compassionate living converge to reduce suffering in the world.",
    details: [
      "Featured computer scientist turned social entrepreneur Robin Singh sharing how he established Peepal Farm to rescue abused animals and promote a minimum-suffering lifestyle.",
      "Extensive Q&A with IITM BS students examining how to align technical careers with grassroots social consciousness.",
      "Practical strategies for individual students to establish animal safety, stray medical support, and ethical consumption habits in their home cities.",
    ],
    image: "/images/events/volunteering-drive.jpg",
    impactMetrics: [
      { label: "Speaker", value: "Robin Singh (Founder)" },
      { label: "Audience", value: "BS Student Community" },
      { label: "Theme", value: "Minimizing Suffering" },
    ],
  },
  {
    id: "poster-making-competition",
    title: "National Student Poster Competition on Pressing Social Issues",
    category: "Student Contest",
    date: "August 1–31, 2023",
    location: "Pan-India Digital Exhibition",
    partner: "Diplomacia Society",
    summary:
      "In collaboration with Diplomacia Society, this nationwide competition invited students to visualize and propose creative solutions to critical societal challenges.",
    details: [
      "Over dozens of original creative submissions highlighting poverty alleviation, mental healthcare, animal rights, and environmental preservation.",
      "Provided an empowering platform for students to blend creative artistry with poignant social commentary.",
      "Award-winning submissions were recognized with certificates of distinction and published across student community channels.",
    ],
    image: "/images/events/poster-making-competition.png",
    impactMetrics: [
      { label: "Submissions", value: "Pan-India" },
      { label: "Collaboration", value: "Diplomacia Society" },
      { label: "Format", value: "Art & Social Analysis" },
    ],
  },
  {
    id: "rakshak-major-sidram-solankar",
    title: "RAKSHAK — An Evening with Major Sidram Solankar (Ex-NSG Commando)",
    category: "Guest Lecture",
    date: "August 14, 2023",
    location: "Live Virtual Auditorium",
    partner: "Kavach Club (Bandipur House)",
    summary:
      "A high-impact conversation on selfless duty, resilience, and nation-building with decorated military veteran and former NSG Commando Major Sidram Solankar.",
    details: [
      "Organized on the eve of Independence Day in collaboration with Kavach Club, Bandipur House.",
      "Major Solankar shared personal stories of combat resilience, leadership under extreme adversity, and the mindset of putting society ahead of self.",
      "Interactive dialogue where students posed technical, strategic, and philosophical questions about national service and discipline.",
    ],
    image: "/images/events/be-a-sahara.jpeg",
    impactMetrics: [
      { label: "Distinguished Guest", value: "Major Sidram Solankar" },
      { label: "Collaboration", value: "Kavach Club" },
      { label: "Theme", value: "Patriotism & Selfless Duty" },
    ],
  },
  {
    id: "society-inaugural-orientation",
    title: "SAHARA Society Inaugural Orientation & Charter Declaration",
    category: "Community Drive",
    date: "July 24, 2023",
    location: "Live Virtual Launch",
    summary:
      "The official inauguration of SAHARA as the dedicated Social Welfare Society of the IIT Madras BS Degree Programme.",
    details: [
      "Presented the founding constitution, three-point mission (Awareness, Compassion, Humanity), and annual roadmap.",
      "Over 100 students attended the live launch session, with 180+ subsequent views on YouTube, forming our first permanent student volunteer cohorts.",
      "Established initial working groups for NGO field trips, expert guest lectures, creative awareness campaigns, and student welfare initiatives.",
    ],
    image: "/images/events/social-welfare-drive.webp",
    impactMetrics: [
      { label: "Live Attendees", value: "100+ Students" },
      { label: "Broadcast Views", value: "180+ Views" },
      { label: "Milestone", value: "Official Society Launch" },
    ],
  },
];
