import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProgressProvider } from "@/components/progress-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ISO 27001 Navigator — Learn it, build it, get certified",
    template: "%s · ISO 27001 Navigator",
  },
  description:
    "A friendly, beginner-first guide to ISO/IEC 27001:2022. Understand the standard, follow a step-by-step roadmap, and get ready-to-use templates for every required document and all 93 Annex A controls.",
  keywords: [
    "ISO 27001",
    "ISO 27001:2022",
    "ISMS",
    "information security",
    "Annex A controls",
    "Statement of Applicability",
    "certification templates",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <ProgressProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ProgressProvider>
      </body>
    </html>
  );
}
