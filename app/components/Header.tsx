
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30 mx-auto flex w-full max-w-[1040px] items-center justify-between px-5 py-8 md:px-0">
      {/* Business Name */}
      <Link
  href="/"
  className="font-[family-name:var(--font-handwriting)] text-5xl font-normal text-black md:text-[64px]"
>
  Bryan Bucknell
</Link>

      {/* Hamburger Menu */}
      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-[#10233a] transition-transform hover:scale-105"
      >
        {menuOpen ? (
          <X size={48} strokeWidth={3} />
        ) : (
          <Menu size={48} strokeWidth={3} />
        )}
      </button>

      {/* Navigation Menu */}
      {menuOpen && (
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className="absolute right-5 top-24 z-40 flex min-w-56 flex-col gap-4 rounded-lg bg-[#e5e2d6] p-6 shadow-lg md:right-0"
        >
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">
            Home
          </Link>

          <Link href="/web-development" onClick={() => setMenuOpen(false)} className="hover:underline">
            Web Development
          </Link>

          <Link href="/data-ai" onClick={() => setMenuOpen(false)} className="hover:underline">
            Data and AI
          </Link>

          <Link href="/it-support" onClick={() => setMenuOpen(false)} className="hover:underline">
            IT Support
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:underline">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
