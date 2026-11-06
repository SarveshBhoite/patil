import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leadspiredigitals.com";

export const metadata: Metadata = {
  title: "ELEVATE05 | Your Growth, Our Mission",
  description: "ELEVATE05 helps businesses grow through strategic digital marketing, social media, performance advertising, websites and innovative digital solutions.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "ELEVATE05 | Your Growth, Our Mission",
    description: "ELEVATE05 helps businesses grow through strategic digital marketing, social media, performance advertising, websites and innovative digital solutions.",
    url: siteUrl,
    siteName: "ELEVATE05",
    locale: "en_US",
    type: "website",
    images: [{ url: `${siteUrl}/logo.png`, width: 1200, height: 630, alt: "ELEVATE05" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEVATE05 | Your Growth, Our Mission",
    description: "ELEVATE05 helps businesses grow through strategic digital marketing, social media, performance advertising, websites and innovative digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ELEVATE05",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "description": "ELEVATE05 helps businesses grow through strategic digital marketing, social media, performance advertising, websites and innovative digital solutions."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased overflow-x-hidden dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('leadspire-theme');
                if (t === 'light') {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${syne.variable} ${jakarta.variable} ${jetbrainsMono.variable} font-sans bg-[#07080C] text-[#F3F5F9] selection:bg-[#F59E0B] selection:text-[#07080C] overflow-x-hidden flex flex-col min-h-screen`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
