import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Be10X - Become 10X Version Of Yourself",
  description:
    "Discover industry-leading IT professional courses and workshops, Generative AI courses, Microsoft Office courses, and Power BI Workshops all designed for your career growth.",
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32" },
      { url: "/seo/favicon-192.png", sizes: "192x192" },
    ],
    apple: "/seo/favicon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
