export const BRAND_CONFIG = {
  name: "ELEVATE05",
  tagline: "YOUR GROWTH, OUR MISSION",
  email: "elevate0005@gmail.com",
  phone: "+91 7030265985",
  location: "India"
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Portfolio", href: "/work" },
  { name: "Why Us", href: "/why" },
  { name: "Testimonials", href: "/#testimonials" },
];

export const SOCIAL_LINKS = [
  { name: "WhatsApp", href: "https://wa.me/917030265985" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Facebook", href: "#" },
];

export const SERVICES = [
  {
    id: "01",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Build a strong social presence with engaging content and strategic campaigns that captivate your audience.",
    icon: "Share2",
  },
  {
    id: "02",
    slug: "meta-ads",
    title: "Meta Ads",
    description: "Generate quality leads and conversions with performance-driven Meta advertising strategies.",
    icon: "Target",
  },
  {
    id: "03",
    slug: "google-ads",
    title: "Google Ads",
    description: "Reach high-intent customers and maximise your advertising ROI through smart Google campaigns.",
    icon: "Search",
  },
  {
    id: "04",
    slug: "website-development",
    title: "Website Development",
    description: "Build modern, responsive and conversion-focused websites that represent your brand perfectly.",
    icon: "Globe",
  },
  {
    id: "05",
    slug: "app-development",
    title: "App Development",
    description: "Create scalable, user-friendly digital experiences and mobile applications for your business.",
    icon: "Smartphone",
  },
  {
    id: "06",
    slug: "google-business-profile",
    title: "Google Business Profile",
    description: "Improve local visibility and help customers discover your business when it matters most.",
    icon: "MapPin",
  },
];

export const PRICING_PLANS = [
  {
    id: "01",
    category: "WEB DEVELOPMENT",
    title: "Dynamic Web Application Development",
    description: "We build scalable and secure dynamic web applications using modern technologies like...",
    features: [
      "Next.js / MERN Stack Development",
      "Admin CMS Panel",
      "Role-Based Authentication",
      "API Integration",
      "Deployment & Hosting Support",
      "Security Best Practices",
    ],
    price: 32999,
    originalPrice: 45000,
  },
  {
    id: "02",
    category: "WEB DEVELOPMENT",
    title: "Logo Designing",
    description: "Minimalist and professional brand identity design that creates a lasting first impression.",
    features: [
      "3 Design Options",
      "Vector Files (AI/SVG)",
      "Favicon",
      "Brand Guidelines",
    ],
    price: 1499,
    originalPrice: 4000,
  },
  {
    id: "03",
    category: "DIGITAL MARKETING",
    title: "Video Editing",
    description: "Professional editing for Reels, YouTube videos, and corporate ads with transitions and sound...",
    features: [
      "Color Correction",
      "Motion Graphics",
      "Background Music",
      "HD Export",
      "1 Minutes video",
    ],
    price: 2998,
    originalPrice: 6000,
  },
];
export const PROCESS_STAGES = [
  {
    id: "01",
    title: "Discover",
    description: "Understand your business, audience, competitive landscape and growth goals.",
  },
  {
    id: "02",
    title: "Strategize",
    description: "Build a customised digital growth strategy aligned to your business objectives.",
  },
  {
    id: "03",
    title: "Create",
    description: "Develop compelling content, campaigns and high-quality digital experiences.",
  },
  {
    id: "04",
    title: "Launch",
    description: "Execute the strategy across the right channels with precision and clarity.",
  },
  {
    id: "05",
    title: "Optimize",
    description: "Analyse performance data and continuously improve for better outcomes.",
  },
  {
    id: "06",
    title: "Grow",
    description: "Scale successful strategies to create sustainable, long-term business growth.",
  },
];

export const WHY_US = [
  {
    id: "01",
    title: "Hungry & Dedicated",
    description: "We treat your business like our own. You get our full attention, relentless energy, and absolute dedication.",
    icon: "Target",
  },
  {
    id: "02",
    title: "Fresh Perspectives",
    description: "Unbound by traditional rules, we bring modern, innovative, and out-of-the-box ideas to every campaign.",
    icon: "Sparkles",
  },
  {
    id: "03",
    title: "Agile & Fast",
    description: "No bureaucratic red tape. We move quickly, adapt instantly to market changes, and execute faster.",
    icon: "Rocket",
  },
  {
    id: "04",
    title: "Direct Collaboration",
    description: "You work directly with the creators. No middlemen, just clear, honest, and direct communication.",
    icon: "MessageSquare",
  },
  {
    id: "05",
    title: "Value-Driven",
    description: "We deliver premium quality work and measurable results without the bloated traditional agency price tags.",
    icon: "TrendingUp",
  },
  {
    id: "06",
    title: "Data-Backed Passion",
    description: "We combine our creative startup energy with hard data to ensure every decision drives real growth.",
    icon: "BarChart2",
  },
];

export const STATISTICS = [
  { id: "01", value: "50+", label: "Projects Delivered" },
  { id: "02", value: "25+", label: "Businesses Served" },
  { id: "03", value: "10+", label: "Digital Services" },
  { id: "04", value: "100%", label: "Growth Focused" },
];

export const DEMO_METRICS = [
  { value: 184, prefix: "+", suffix: "%", label: "REACH" },
  { value: 72, prefix: "+", suffix: "%", label: "ENGAGEMENT" },
  { value: 126, prefix: "+", suffix: "%", label: "LEADS" },
  { value: 68, prefix: "+", suffix: "%", label: "CONVERSIONS" },
  { value: 2.8, prefix: "", suffix: "×", label: "ROI" },
];

export const CASE_STUDIES = [
  {
    id: "01",
    slug: "social-media-growth",
    category: "Social Media",
    title: "Building Community and Driving Sales",
    description: "A complete social media overhaul for a lifestyle brand that resulted in massive engagement spikes and direct sales.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    visualType: "social",
    isFeatured: true,
    metrics: [
      { value: 184, prefix: "+", suffix: "%", label: "Reach" },
      { value: 72, prefix: "+", suffix: "%", label: "Engagement" },
      { value: 126, prefix: "+", suffix: "%", label: "Leads" },
    ],
  },
  {
    id: "02",
    slug: "advertising-roi",
    category: "Performance Ads",
    title: "Scaling Lead Generation with Meta Ads",
    description: "How we lowered cost-per-acquisition by 40% while doubling lead volume for a growing business.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    visualType: "performance",
    isFeatured: false,
    metrics: [
      { value: 2.8, prefix: "", suffix: "×", label: "ROAS" },
      { value: 40, prefix: "-", suffix: "%", label: "Cost Per Lead" },
      { value: 68, prefix: "+", suffix: "%", label: "Conversions" },
    ],
  },
  {
    id: "03",
    slug: "brand-identity",
    category: "Branding",
    title: "Modernising a Legacy Healthcare Brand",
    description: "A full visual identity redesign that modernised the brand while maintaining trust and authority.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
    visualType: "brand",
    isFeatured: false,
    metrics: [
      { value: 85, prefix: "+", suffix: "%", label: "Brand Recall" },
      { value: 50, prefix: "+", suffix: "%", label: "Enquiries" },
      { value: 3.2, prefix: "", suffix: "×", label: "Site Traffic" },
    ],
  },
  {
    id: "04",
    slug: "ecommerce-website",
    category: "Web Development",
    title: "High-Converting Digital Experience",
    description: "A custom Next.js platform that increased conversion rates by 68% and dramatically improved load performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    visualType: "web",
    isFeatured: false,
    metrics: [
      { value: 68, prefix: "+", suffix: "%", label: "Conversion Rate" },
      { value: 95, prefix: "", suffix: "", label: "PageSpeed Score" },
      { value: 40, prefix: "-", suffix: "%", label: "Bounce Rate" },
    ],
  },
];

export const DEMO_TESTIMONIALS = [
  {
    id: "01",
    quote: "LeadSpire brought structure to our digital marketing. We finally had a clear connection between content, campaigns and real business goals.",
    name: "Sarah Jenkins",
    role: "Founder",
    company: "EcoStyle Retail",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "02",
    quote: "What stood out was the combination of creative thinking and performance-focused execution. They delivered results every single month.",
    name: "David Chen",
    role: "Marketing Director",
    company: "TechFlow Systems",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "03",
    quote: "Instead of simply giving us more content, the team helped us build a much stronger digital growth system that keeps performing.",
    name: "Priya Sharma",
    role: "Business Owner",
    company: "Nova Wellness",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "04",
    quote: "Clear strategy, strong creative and constant optimisation. The entire process was focused purely on outcomes that matter to us.",
    name: "Marcus Rodriguez",
    role: "Growth Lead",
    company: "Apex Real Estate",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop",
  },
];

export const INDUSTRIES = [
  {
    id: "01",
    slug: "startups-d2c",
    title: "STARTUPS & D2C",
    description: "Build awareness, demand and acquisition systems around fast-moving products and brands.",
    journey: ["AUDIENCE", "AWARENESS", "DEMAND", "ACQUISITION", "GROWTH"],
  },
  {
    id: "02",
    slug: "education",
    title: "EDUCATION & EDTECH",
    description: "Turn digital attention into enquiries, applications and qualified student demand.",
    journey: ["AWARENESS", "INTEREST", "ENQUIRY", "APPLICATION", "ENROLLMENT"],
  },
  {
    id: "03",
    slug: "real-estate",
    title: "REAL ESTATE",
    description: "Create digital campaigns and lead-generation systems designed around high-intent prospects.",
    journey: ["VISIBILITY", "INTEREST", "SITE VISIT", "LEAD", "CONVERSION"],
  },
  {
    id: "04",
    slug: "healthcare",
    title: "HEALTHCARE & WELLNESS",
    description: "Build trust-driven digital experiences and communication systems for healthcare brands.",
    journey: ["TRUST", "EDUCATION", "ENGAGEMENT", "BOOKING", "RETENTION"],
  },
  {
    id: "05",
    slug: "automotive",
    title: "AUTOMOTIVE",
    description: "Drive relevant traffic and qualify intent before the physical showroom visit.",
    journey: ["VISIBILITY", "CONSIDERATION", "ENQUIRY", "TEST DRIVE", "SALE"],
  },
  {
    id: "06",
    slug: "local-business",
    title: "LOCAL & PROFESSIONAL BUSINESSES",
    description: "Strengthen local presence, improve search visibility and generate qualified enquiries.",
    journey: ["LOCAL SEARCH", "REPUTATION", "ENQUIRY", "CONSULTATION", "CLIENT"],
  },
];

export const SERVICE_OPTIONS = [
  "Social Media Marketing",
  "Meta Ads",
  "Google Ads",
  "Website Development",
  "App Development",
  "Google Business Profile",
  "Other",
];

export const BUDGET_OPTIONS = [
  "Under ₹25K",
  "₹25K – ₹50K",
  "₹50K – ₹1L",
  "₹1L – ₹3L",
  "₹3L+",
  "Let's discuss",
];
