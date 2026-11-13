export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  features: string[];
  featuresLabel: "Core features" | "Planned features";
  status?: ProjectStatus; // set only when it is true
  repoUrl?: string; // add only real URLs
  liveUrl?: string;
}

export const profile = {
  name: "Muhammad Qasim",
  title: "Junior Software Associate | Python Developer | AI Automation",
  tagline: "I build Python backends and AI automation that solve real business problems.",
  email: "dayoqasim@outlook.com",
  linkedin: "https://www.linkedin.com/in/muhammad-qasim-b5b106332/",
  github: "https://github.com/MuhammadQasim37",
  about: [
    "I am a technology enthusiast and software developer focused on Python development, backend engineering, AI integration and workflow automation.",
    "I enjoy building practical applications that solve real-world business problems, and I keep improving my programming, software engineering and problem-solving skills.",
  ],
  interests: ["Software development", "AI agents", "Backend engineering", "Database systems", "Workflow automation", "Business process automation"],
};

export const skillGroups: { title: string; items: string[] }[] = [
  { title: "Programming and development", items: ["Python", "SQL", "JavaScript", "TypeScript", "FastAPI", "Next.js", "Streamlit", "REST APIs"] },
  { title: "AI and automation", items: ["AI Agents", "RAG", "Model Context Protocol (MCP)", "n8n", "Make.com", "LLM integration", "Workflow automation", "Azure AI Foundry"] },
  { title: "Databases and tools", items: ["PostgreSQL", "SQLite", "Git", "GitHub", "Ollama"] },
];

export const projects: Project[] = [
  {
    slug: "ai-inventory-management",
    title: "AI Inventory Management System",
    description: "An inventory application for managing products, sales, stock levels and stock-related decisions.",
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLModel", "Streamlit", "AI Agents"],
    featuresLabel: "Core features",
    features: ["Product CRUD operations", "Sales management", "Automatic stock reduction", "Stock validation", "Inventory monitoring", "AI-assisted inventory recommendations"],
  },
  {
    slug: "smartlms",
    title: "SmartLMS",
    description: "An instructor-focused Learning Management System backend module that simplifies educational operations.",
    stack: ["Python", "FastAPI", "PostgreSQL", "n8n", "LLM integration"],
    featuresLabel: "Core features",
    features: ["Assignment management", "Quiz and exam workflows", "Student progress monitoring", "Automated notifications", "Assignment reminders", "AI-assisted student risk analysis"],
  },
  {
    slug: "ai-image-classification",
    title: "AI Image Classification",
    description: "An application that analyzes uploaded chair images and classifies each one as occupied or empty.",
    stack: ["Python", "FastAPI", "Google Gemini", "Streamlit"],
    featuresLabel: "Core features",
    features: ["Image upload", "AI-powered image analysis", "Occupied / empty classification", "API integration", "Frontend interface"],
  },
  {
    slug: "customer-intelligence-platform",
    title: "AI-Powered Customer Intelligence and E-Commerce Platform",
    description: "A business platform concept that combines customer management, e-commerce operations, inventory monitoring, sales analytics and intelligent automation.",
    stack: ["Python", "SQL", "Streamlit", "n8n", "Make.com", "AI integration"],
    featuresLabel: "Planned features",
    status: "planned",
    features: ["Customer management", "Product management", "Inventory monitoring", "Sales analytics", "Customer recognition", "Automated email communication", "AI-based product recommendations"],
  },
];

export interface JourneyItem {
  period: string;
  title: string;
  place?: string;
  text?: string;
  current?: boolean;
}

// Only facts provided by Muhammad Qasim. Add start dates when confirmed.
export const journey: JourneyItem[] = [
  { period: "2021 - 2022", title: "Matric", place: "Govt High School Detha Bhaya" },
  { period: "2023 - 2024", title: "Intermediate", place: "Govt Degree College" },
  { period: "In progress", title: "Associate Degree in Science (ADS)", place: "Currently studying", current: true },
  { period: "2026 - 5 months", title: "Training", place: "xLoop Digital Services and Mari Energies", text: "Five months of professional training in software development." },
  { period: "Present", title: "Junior Software Associate", text: "Working as a junior software associate, building Python backend, AI and automation solutions.", current: true },
];

export const approach = [
  { title: "Start from the problem", text: "I begin with the business task the software must handle, then pick tools to fit it." },
  { title: "Keep data and logic clear", text: "Validated inputs, a proper database and small API endpoints keep applications easy to change." },
  { title: "Use AI where it helps", text: "AI features support decisions, such as recommendations and risk analysis, on top of reliable core logic." },
  { title: "Keep learning", text: "I keep improving my engineering skills with each project I build." },
];
