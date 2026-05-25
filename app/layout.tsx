import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Three Pillars | Data Science, Web Development & IT Solutions",

  description:
    "Three Pillars provides data science, web development, automation, and human-centered technology solutions.",

  keywords: [
    "data science",
    "web development",
    "automation",
    "IT solutions",
    "machine learning",
    "Peterborough Ontario",
    "Three Pillars",
  ],

  authors: [{ name: "Bryan Bucknell" }],

  creator: "Bryan Bucknell",

  metadataBase: new URL("https://threepillars.dev"),

  openGraph: {
    title: "Three Pillars",
    description:
      "Human-centered technology, data science, web development, and automation services.",

    url: "https://threepillars.dev",

    siteName: "Three Pillars",

    locale: "en_CA",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Three Pillars",

    description:
      "Human-centered technology, data science, web development, and automation services.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
