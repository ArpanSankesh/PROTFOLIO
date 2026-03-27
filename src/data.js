export const projects = [
  {
    title: "Scarlet",
    category: "Modern Agency",
    color: "#e11d48",
    description: "A high-end digital agency specializing in luxury brand experiences.",
    client: "Scarlet Digital",
    year: "2024",
    services: ["Web Design", "Brand Identity", "UI/UX Strategy"],
    image: "https://picsum.photos/seed/scarlet/1200/800",
    caseStudy: {
      problem: "Scarlet Digital had a generic website that failed to reflect their premium positioning. Their bounce rate was high, and they weren't attracting the high-ticket clients they desired.",
      discovery: "During our initial call, we identified that the core issue was a lack of visual storytelling. They needed a site that felt like a high-end fashion magazine rather than a tech startup.",
      research: "We analyzed top-tier luxury brands and identified key design patterns: high-contrast typography, generous white space, and smooth, intentional animations.",
      design: "The design phase focused on a 'less is more' approach. We chose a bold serif typeface for headings and a clean sans-serif for body text, paired with a deep scarlet accent color.",
      develop: "Built using React and Framer Motion, the site features complex scroll-triggered animations and a custom cursor that changes based on interactive elements.",
      deploy: "Launched on Vercel with a focus on performance optimization, achieving a 98/100 Lighthouse score for accessibility and SEO.",
      result: "Within three months of launch, Scarlet Digital saw a 45% increase in high-ticket inquiries and a 30% reduction in bounce rate. Their brand perception shifted significantly toward the luxury market."
    }
  },
  {
    title: "Lens",
    category: "Filmmaking Studio",
    color: "#0ea5e9",
    description: "A cinematic portfolio for a premier filmmaking studio.",
    client: "Lens Studios",
    year: "2023",
    services: ["Portfolio Design", "Video Integration", "Motion Graphics"],
    image: "https://picsum.photos/seed/lens/1200/800",
    caseStudy: {
      problem: "Lens Studios had amazing work but a clunky portfolio that made their videos feel low-quality. The site was slow and didn't work well on mobile devices.",
      discovery: "The goal was clear: the website should feel like a cinema experience. We needed to prioritize video playback without sacrificing load times.",
      research: "We researched video streaming best practices and mobile-first video players to ensure a seamless experience across all devices.",
      design: "We implemented a dark, immersive UI with full-screen video backgrounds and minimal navigation to keep the focus entirely on the content.",
      develop: "We used custom video compression and lazy-loading techniques to ensure the site remained fast despite the heavy media content.",
      deploy: "Deployed with a global CDN to ensure fast video delivery to clients worldwide.",
      result: "The new portfolio led to a 60% increase in project bookings and multiple industry awards for web design excellence."
    }
  },
  {
    title: "Keystone",
    category: "Architecture Agency",
    color: "#f59e0b",
    description: "An architectural showcase that emphasizes structure and space.",
    client: "Keystone Architects",
    year: "2023",
    services: ["Web Design", "3D Visualization", "SEO Optimization"],
    image: "https://picsum.photos/seed/keystone/1200/800",
    caseStudy: {
      problem: "Keystone's old site was cluttered and didn't reflect the clean, modern lines of their architectural work. It was difficult for potential clients to navigate their large project library.",
      discovery: "We decided to treat the website as a digital gallery. Every project needed room to breathe, with a focus on high-resolution architectural photography.",
      research: "Studied minimalist architectural journals and gallery websites to understand how to present complex projects simply.",
      design: "A rigid grid system was established, using a neutral color palette to let the project photos provide the color and character.",
      develop: "Implemented a custom filtering system for their project library, allowing users to browse by project type, location, and year.",
      deploy: "Optimized for high-resolution image delivery using modern image formats like WebP.",
      result: "User engagement increased by 50%, and the agency reported that clients were now arriving at meetings better informed about their portfolio."
    }
  },
  {
    title: "Automize",
    category: "AI Agency",
    color: "#10b981",
    description: "A tech-forward landing page for an AI automation startup.",
    client: "Automize AI",
    year: "2024",
    services: ["Landing Page", "AI Integration", "Product Design"],
    image: "https://picsum.photos/seed/automize/1200/800",
    caseStudy: {
      problem: "Automize needed to explain complex AI solutions to non-technical business owners. Their previous messaging was too technical and failed to convert.",
      discovery: "We focused on 'Benefits over Features'. The site needed to show how AI saves time and money, using clear, relatable examples.",
      research: "Analyzed the competitive landscape of AI startups to find a unique visual voice that felt both futuristic and approachable.",
      design: "Used a 'Dark Mode' aesthetic with vibrant green accents to signal growth and technology. Interactive 'before and after' sliders were used to show AI impact.",
      develop: "Integrated interactive Lottie animations to explain complex processes visually without slowing down the page.",
      deploy: "A/B tested multiple landing page variations to find the highest-converting layout.",
      result: "Conversion rate increased from 2% to 7.5% within the first month, leading to a significant boost in qualified leads."
    }
  },
  {
    title: "Brandify",
    category: "Marketing Agency",
    color: "#8b5cf6",
    description: "A vibrant and energetic website for a modern marketing firm.",
    client: "Brandify Co.",
    year: "2023",
    services: ["Web Design", "Content Strategy", "Social Media"],
    image: "https://picsum.photos/seed/brandify/1200/800",
    caseStudy: {
      problem: "Brandify felt their brand was 'too safe' and didn't stand out in a crowded marketing landscape. They needed something bold and memorable.",
      discovery: "We decided to lean into 'Creative Chaos'—a controlled but high-energy design that showcased their unconventional thinking.",
      research: "Looked at 90s brutalist design and modern high-energy branding for inspiration.",
      design: "Used a vibrant purple and yellow palette with oversized typography and overlapping elements to create a sense of movement.",
      develop: "Built a custom CMS that allowed the Brandify team to easily update their case studies with dynamic layouts.",
      deploy: "Integrated with their CRM to ensure all leads were captured and tracked accurately.",
      result: "Brandify reported a 100% increase in social media mentions following the site launch and a surge in applications from top-tier creative talent."
    }
  },
  {
    title: "Capture",
    category: "Photography Agency",
    color: "#ec4899",
    description: "A minimalist photography portfolio designed to let the images speak for themselves.",
    client: "Capture Collective",
    year: "2024",
    services: ["Photography Portfolio", "Image Optimization", "UX Design"],
    image: "https://picsum.photos/seed/capture/1200/800",
    caseStudy: {
      problem: "Capture Collective had a massive archive of photos but no way to showcase them effectively. Their site was slow and images often looked pixelated on high-res screens.",
      discovery: "The focus was on 'Image Integrity'. We needed a site that could handle thousands of photos while maintaining lightning-fast load times.",
      research: "Researched advanced image CDN strategies and responsive image techniques to ensure perfect rendering on all devices.",
      design: "A clean, white-space focused design that acted as a canvas for the photography. Custom masonry grids were used for different categories.",
      develop: "Implemented a custom lazy-loading solution and integrated with a high-performance image CDN.",
      deploy: "Automated the image processing pipeline to ensure all new uploads were perfectly optimized.",
      result: "Page load times dropped by 70%, and the agency saw a 40% increase in direct bookings through the website."
    }
  }
];

export const services = [
  {
    id: "01",
    title: "High-Converting Website",
    description: "A complete custom website designed to turn your traffic into customers, clients, or leads—not just look pretty.",
    features: [
      "Clear messaging that communicates your value in seconds",
      "Strategic call-to-action placement (visible, obvious, impossible to miss)",
      "Optimized user journey from landing to conversion",
      "Mobile-perfect experience across all devices",
      "Fast loading (under 1 second)",
      "Built for conversions, not just aesthetics"
    ],
    includes: [
      "Up to 7 pages",
      "Booking/contact system integration",
      "Email capture setup",
      "Analytics & tracking",
      "2 rounds of revisions",
      "14 days post-launch support",
      "Video training on content updates"
    ],
    perfectFor: "Businesses that get traffic but not enough conversions",
    price: "$2,500",
    time: "7-10 days"
  },
  {
    id: "02",
    title: "Landing Page Design",
    description: "A single high-converting page designed to turn cold traffic into leads or sales—perfect for launches, campaigns, or ad traffic.",
    features: [
      "One clear goal: convert visitors",
      "Optimized for ad traffic (fast, mobile-first, friction-free)",
      "No distractions or competing CTAs",
      "Built to convert people who don't know you yet"
    ],
    includes: [
      "Single-page design",
      "Conversion-focused structure",
      "Lead capture or booking integration",
      "Mobile optimization",
      "1 round of revisions",
      "7 days support"
    ],
    perfectFor: "Product launches, ad campaigns, webinars, or testing new offers",
    price: "$1,200",
    time: "3-5 days"
  },
  {
    id: "03",
    title: "Website Redesign & Optimization",
    description: "Already have a website but it's not converting? I'll rebuild it to be faster, clearer, and optimized to get you more results.",
    features: [
      "Modern, professional design (no more outdated template look)",
      "Faster loading (1 second vs your current 4-5 seconds)",
      "Clear, benefit-focused messaging",
      "Strategic CTA placement",
      "Mobile optimization (no broken menus or buttons)",
      "Conversion improvements across the board"
    ],
    includes: [
      "Complete redesign",
      "Speed & performance optimization",
      "Mobile experience fixes",
      "SEO improvements",
      "2 rounds of revisions",
      "14 days post-launch support"
    ],
    perfectFor: "Businesses with a website that's slow, outdated, or not generating enough leads/sales",
    price: "$2,000",
    time: "7-10 days"
  }
];

export const processSteps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "We start with a 30-minute call to understand your business, goals, and audience. I'll ask questions about what's working, what's not, and what you want your website to accomplish. No fluff—just clarity on what needs to happen."
  },
  {
    id: "02",
    title: "Wireframing & Structure",
    description: "Before touching any design, I map out your site structure—what pages you need, where everything goes, and how visitors flow through the site. Think of this as the blueprint. You'll review it and give feedback before we move forward."
  },
  {
    id: "03",
    title: "Visual Design",
    description: "This is where your site comes to life. I design the actual pages—layout, colors, typography, imagery—all of it. You'll see a preview and we'll iterate until it's exactly what you want. Modern, professional, conversion-focused."
  },
  {
    id: "04",
    title: "Development & Build",
    description: "I build your site using modern technology optimized for speed and performance. I handle all the technical work—hosting setup, domain connection, integrations, mobile testing, speed optimization. You don't need to touch anything."
  },
  {
    id: "05",
    title: "Launch & Support",
    description: "We launch together. I monitor performance for 2 weeks, fix any bugs, and make sure everything works perfectly. You'll also get a video tutorial showing you how to update content yourself going forward."
  }
];

export const testimonials = [
  {
    name: "Sarah L.",
    role: "E-commerce Business Owner",
    text: "Arpan completely transformed our website. The new design is not only beautiful but also highly functional. Since launching, our traffic has increased and customers are staying longer. We've seen real business results.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Michael T.",
    role: "Startup Founder",
    text: "Working with Arpan was a game-changer. He understood our brand vision perfectly and created a website that not only looks incredible but performs exceptionally well. Professional, creative, and delivers results.",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Emily R.",
    role: "Marketing Director",
    text: "The web design skills are top-notch. Arpan built us a stunning, mobile-friendly site that loads fast and ranks well on Google. Our clients love the new design and we've seen a significant increase in inquiries.",
    avatar: "https://i.pravatar.cc/150?u=emily"
  }
];
