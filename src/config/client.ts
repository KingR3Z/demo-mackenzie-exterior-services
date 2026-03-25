/* ============================================
   CLIENT CONFIGURATION
   ============================================ */

export const client = {
  name: "Mackenzie Exterior Services",
  shortName: "Mackenzie Exterior",
  legalName: "Mackenzie Exterior Services",
  tagline: "LANDSCAPING | GARDENS | PATIOS | DRIVEWAYS",
  logoInitials: "M E",
  founderName: "",
  founderRole: "Director",
  yearFounded: "",
  phone: "07545 949243",
  email: "",
  whatsapp: {
    display: "07545 949243",
    link: "https://wa.me/447545949243",
  },
  address: [
    "Poole",
  ],
  region: "Poole and surrounding areas",
  basedIn: "Poole",
  hours: [
    { day: "Monday — Friday", time: "8:00 AM — 5:00 PM" },
    { day: "Saturday", time: "9:00 AM — 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
  ],
  awards: [
    { title: "Google Reviews — 5.0 Stars", year: "2026", category: "REVIEWS" },
    { title: "0 Five-Star Reviews", year: "2026", category: "SERVICE" },
  ],
  partners: [
    { name: "Marshalls", logo: null },
    { name: "Bradstone", logo: null },
    { name: "Tobermore", logo: null },
    { name: "Tarmac", logo: null },
  ],
  metaTitle: "Mackenzie Exterior Services — Landscaper in Poole",
  metaDescription:
    "Professional landscaper in Poole. 5.0 stars on Google Reviews with 0 reviews. Quality workmanship guaranteed.",
};


// Derived helpers
export const phoneLink = `tel:${client.phone.replace(/\s/g, "")}`;
export const emailLink = `mailto:${client.email}`;
