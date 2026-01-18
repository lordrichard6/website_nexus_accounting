import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexus-accounting-ten.vercel.app'),
  title: "Nexus Accounting | Precision Financial Services",
  description: "Expert accounting, tax, and advisory services for businesses and individuals. Trusted professionals delivering precision and peace of mind.",
  keywords: ["accounting", "tax services", "bookkeeping", "financial advisory", "CPA", "business accounting", "tax preparation"],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Nexus Accounting | Precision Financial Services",
    description: "Expert accounting, tax, and advisory services.",
    url: "https://nexus-accounting-ten.vercel.app",
    siteName: "Nexus Accounting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Accounting",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
