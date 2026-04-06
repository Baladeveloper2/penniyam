import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Penniyam Academy - Empowering Women Entrepreneurs",
  description: "Join Penniyam Academy for professional training, business networking, and market access. Transform your skills into a successful business.",
  keywords: "women entrepreneurship training, baking classes, beautician course, tailoring course, business networking tamilnadu",
  icons: {
    icon: "/Academy.jpeg",
    shortcut: "/Academy.jpeg",
    apple: "/Academy.jpeg",
  },
};

import AuthProvider from "@/components/AuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning={true}>
      <body style={{ fontFamily: 'var(--font-outfit), var(--font-inter), sans-serif' }}>
        <AuthProvider>
          <div className="flex-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1, paddingTop: '110px' }}>{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
