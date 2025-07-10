import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Anderson Carl - Life in the UK Documents Specialist",
  description: "Professional assistance with UK documentation processes including passport, driver licence, resident permit, visa renewal, and certificates. Expert consultation services.",
  keywords: "UK documents, passport application, driver licence, resident permit, visa renewal, UK birth certificate, UK marriage certificate, IELTS certificate, PTE certificate, Life in the UK, Anderson Carl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
