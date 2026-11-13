import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const font = Manrope({ subsets: ["latin"], variable: "--font", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description = "Portfolio of Muhammad Qasim: Python backend development, AI integration and workflow automation projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} | Python Developer and AI Automation`, template: `%s | ${profile.name}` },
  description,
  alternates: { canonical: "/" },
  openGraph: { title: `${profile.name} | Python Developer and AI Automation`, description, url: siteUrl, siteName: profile.name, type: "website" },
  twitter: { card: "summary", title: profile.name, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
