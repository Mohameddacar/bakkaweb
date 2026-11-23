/**
 * Central site configuration and editable placeholders for Bakka Training Center.
 *
 * NOTE FOR BAKKA TEAM:
 * Replace placeholder values below with official company details, approved contact info,
 * and official brand assets when available.
 */

export interface NavItem {
  title: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string;
  whatToExpect: string[];
  icon: string;
  statusBadge?: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  contact: {
    email: string;
    phone: string;
    address: string;
    workingHours: string;
    emergencyOrSupportNote?: string;
  };
  socialLinks: {
    platform: string;
    href: string;
    isConfigured: boolean;
  }[];
  mainNav: NavItem[];
  about: {
    mission: string;
    vision: string;
    values: {
      title: string;
      description: string;
    }[];
    trainingApproach: {
      title: string;
      description: string;
    }[];
  };
  services: ServiceCategory[];
}

export const siteConfig: SiteConfig = {
  name: "Bakka Training Center",
  legalName: "Bakka Training Center",
  tagline: "Practical Learning & Professional Skills Development",
  description:
    "Bakka Training Center provides professional skills training, capacity-building programs, and practical education for students, professionals, and organizations.",
  url: "https://bakkatraining.example.com", // [Official website URL placeholder]
  contact: {
    email: "[Official email address — to be provided]",
    phone: "[Official phone number — to be provided]",
    address: "[Official physical address — to be provided]",
    workingHours: "[Official opening hours — to be provided]",
    emergencyOrSupportNote:
      "For inquiries regarding course schedules, registration, and corporate partnerships, please reach out via our contact channels.",
  },
  socialLinks: [
    {
      platform: "LinkedIn",
      href: "#",
      isConfigured: false,
    },
    {
      platform: "Facebook",
      href: "#",
      isConfigured: false,
    },
    {
      platform: "Twitter / X",
      href: "#",
      isConfigured: false,
    },
    {
      platform: "Instagram",
      href: "#",
      isConfigured: false,
    },
  ],
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ],
  about: {
    mission:
      "To empower learners, aspiring professionals, and teams through hands-on, market-aligned training that translates into measurable personal and institutional growth.",
    vision:
      "To be a premier and trusted training destination known for educational integrity, practical instruction, and continuous professional excellence.",
    values: [
      {
        title: "Practical Relevance",
        description:
          "We focus on real-world applications and actionable competencies over pure theoretical memorization.",
      },
      {
        title: "Integrity & Transparency",
        description:
          "We uphold accurate information, realistic outcomes, and clear communication with our learners and partners.",
      },
      {
        title: "Supportive Environment",
        description:
          "We cultivate an inclusive, encouraging classroom atmosphere where students of all backgrounds can thrive.",
      },
      {
        title: "Continuous Improvement",
        description:
          "We constantly update training methodologies to keep pace with evolving industry demands and learner needs.",
      },
    ],
    trainingApproach: [
      {
        title: "Hands-on Practice",
        description:
          "Learners engage in active exercises, case scenarios, and practical problem-solving throughout every session.",
      },
      {
        title: "Expert-Led Sessions",
        description:
          "Instructors combine subject-matter knowledge with contextual insights to guide students step-by-step.",
      },
      {
        title: "Collaborative Learning",
        description:
          "Small cohort dynamics foster peer exchange, team exercises, and networking among participants.",
      },
      {
        title: "Structured Pathways",
        description:
          "Programs are organized into logical modules from foundational principles to applied mastery.",
      },
    ],
  },
  services: [
    {
      id: "professional-skills",
      title: "Professional Skills Development",
      shortDescription:
        "Targeted training designed to enhance workplace effectiveness, communication, leadership, and operational competencies.",
      fullDescription:
        "Our professional development tracks help emerging and established professionals elevate their day-to-day workplace performance through practical workshops and focused skill sprints.",
      targetAudience:
        "Professionals, team leads, department managers, and career switchers looking to sharpen their workplace skills.",
      whatToExpect: [
        "Interactive workshops with workplace case studies",
        "Frameworks for effective communication and task management",
        "Peer review sessions and constructive instructor feedback",
        "Action plans tailored to individual career goals",
      ],
      icon: "Briefcase",
      statusBadge: "Core Offering",
    },
    {
      id: "technical-vocational",
      title: "Technical & Applied Skills",
      shortDescription:
        "Hands-on technical instruction covering foundational and applied tools essential for today's digital economy.",
      fullDescription:
        "Focused curricula that take students through practical exercises, modern toolsets, and applied projects under instructor guidance.",
      targetAudience:
        "Students, job-seekers, and professionals needing structured, guided technical skill building.",
      whatToExpect: [
        "Hands-on exercises and practical labs",
        "Step-by-step guidance on industry standard tools",
        "Instructor-supported troubleshooting and project work",
        "Resource guides and practice material for ongoing review",
      ],
      icon: "Laptop",
      statusBadge: "High Demand",
    },
    {
      id: "corporate-training",
      title: "Corporate & Team Capacity Building",
      shortDescription:
        "Customized training solutions tailored to organizational objectives, team upskilling, and institutional performance.",
      fullDescription:
        "We collaborate with businesses, NGOs, and public institutions to identify team performance gaps and deliver customized training programs aligned with strategic priorities.",
      targetAudience:
        "Organizations, HR directors, government agencies, and businesses seeking team capacity development.",
      whatToExpect: [
        "Needs assessment aligned with institutional goals",
        "Customized syllabus and schedule flexibility",
        "On-site or dedicated classroom delivery",
        "Post-training reporting and participant feedback summaries",
      ],
      icon: "Building2",
      statusBadge: "Custom Solutions",
    },
    {
      id: "student-foundations",
      title: "Foundational & Youth Skills",
      shortDescription:
        "Essential foundational training designed to prepare students and young graduates for academic and workplace success.",
      fullDescription:
        "Programs dedicated to bridge the gap between academic theory and practical readiness, building core digital literacy, critical thinking, and teamwork.",
      targetAudience:
        "High school graduates, university students, and young job-seekers entering the workforce.",
      whatToExpect: [
        "Core digital literacy and study techniques",
        "Presentation, resume, and interview readiness practice",
        "Mentorship and supportive cohort environment",
        "Practical capstone exercises to demonstrate learning",
      ],
      icon: "GraduationCap",
      statusBadge: "Foundational",
    },
  ],
};

