import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Decode AI - Dr. Expert Academy",
  description:
    "Master Claude, ChatGPT, and modern AI tools in one 4-hour course. Prompt engineering, AI-built websites, NotebookLM research, presentations, and Google Workspace AI workflows.",
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32" },
      { url: "/seo/favicon-192.png", sizes: "192x192" },
    ],
    apple: "/seo/apple-touch-icon.png",
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
      </body>
    </html>
  );
}
