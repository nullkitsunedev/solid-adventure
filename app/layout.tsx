import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LatestNoticeStrip } from "@/components/latest-notice-strip";
import { PageTransition } from "@/components/page-transition";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Newaz Ali Ideal School",
  description: "Newaz Ali Ideal School website rebuilt in Next.js and Sanity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased">
        <div className="page-shell">
          <SiteHeader />
          <LatestNoticeStrip />
          <PageTransition>{children}</PageTransition>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
