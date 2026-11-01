
import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";

const handwriting = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "Bryan Bucknell",
  description: "Web Development, Data and AI, and IT Support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={handwriting.variable}>{children}</body>
    </html>
  );
}
