import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://joematthewslandscaping.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Joe Matthews Landscaping & Paving | Professional Landscaping Services in Meath, Dublin & Louth",
    template: "%s | Joe Matthews Landscaping & Paving"
  },
  description: "Joe Matthews Landscaping & Paving is a family-owned landscaping company based in Castletown, Co. Meath, Ireland. We specialize in landscape design and construction for both residential and commercial clients, offering services such as garden design, paving, patios, walling, gazebos, and water features in Meath, Dublin, Cavan, Louth, and Westmeath.",
  keywords: [
    "landscaping services",
    "garden design",
    "paving services",
    "patio installation",
    "landscaping Meath",
    "landscaping Dublin",
    "landscaping Louth",
    "garden design Ireland",
    "paving contractors",
    "patio builders",
    "walling services",
    "gazebo installation",
    "water features",
    "commercial landscaping",
    "residential landscaping"
  ],
  authors: [{ name: "Joe Matthews Landscaping & Paving" }],
  creator: "Joe Matthews Landscaping & Paving",
  publisher: "Joe Matthews Landscaping & Paving",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: baseUrl,
    siteName: "Joe Matthews Landscaping & Paving",
    title: "Joe Matthews Landscaping & Paving | Professional Landscaping Services in Meath, Dublin & Louth",
    description: "Family-owned landscaping company specializing in garden design, paving, patios, walling, gazebos, and water features across Meath, Dublin, Louth, Cavan, and Westmeath.",
    images: [
      {
        url: `${baseUrl}/newjob/pic_2.jpg`,
        width: 1200,
        height: 630,
        alt: "Joe Matthews Landscaping & Paving - Professional Landscaping Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Matthews Landscaping & Paving | Professional Landscaping Services",
    description: "Family-owned landscaping company specializing in garden design, paving, patios, and more across Meath, Dublin, and Louth.",
    images: [`${baseUrl}/newjob/pic_2.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    // Add Google Search Console verification if available
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
