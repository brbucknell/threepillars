"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Bodoni_Moda } from "next/font/google";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});
const navigation = [
  { label: "Home", href: "/#home" },
  { label: "Web Development", href: "/#web-development" },
  { label: "Data Science & AI", href: "/#data-ai" },
  { label: "IT Support", href: "/#it-support" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main header - remains at top of page */}
      <header className="relative z-30 mx-auto flex w-full max-w-[1040px] items-center justify-between px-5 py-8 md:px-0">

        {/* Business Name */}
       {/* Business Name */}
{/* Business Name */}
<Link
  href="/"
  className={`${bodoni.className} text-5xl font-normal italic tracking-[-0.04em] text-black md:text-[64px]`}
>
  Outlier
</Link>
      </header>

      {/* Fixed Hamburger Menu */}
      <div className="fixed right-5 top-6 z-50 md:right-10">
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-lg border border-slate-200 bg-[#e5e2d6] text-[#10233a] shadow-md transition-all duration-200 hover:scale-105 hover:bg-white"
        >
          {menuOpen ? (
            <X size={34} strokeWidth={2.5} />
          ) : (
            <Menu size={34} strokeWidth={2.5} />
          )}
        </button>

        {/* Dropdown Navigation */}
        {menuOpen && (
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className="absolute right-0 top-16 flex w-64 flex-col overflow-hidden rounded-lg border border-slate-200 bg-[#e5e2d6] shadow-xl"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-300/50 px-5 py-4 text-base font-medium text-slate-900 transition-colors hover:bg-white last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
