import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PageTransition } from "@/components/page-transition";
import { absoluteUrl, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "I Got Curious",
    template: "%s | I Got Curious",
  },
  description:
    "A visual personal journal about places, history, culture, art, technology, and ideas—explored through experience, photography, and curiosity.",
  applicationName: "I Got Curious",
  openGraph: {
    description:
      "A visual personal journal about places, history, culture, art, technology, and ideas—explored through experience, photography, and curiosity.",
    siteName: "I Got Curious",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              description: metadata.description,
              name: "I Got Curious",
              url: absoluteUrl("/"),
            }).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
          href="#main-content"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
