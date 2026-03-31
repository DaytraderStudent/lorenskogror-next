"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/leverandorer", label: "Leverandører" },
  { href: "/miljo", label: "Miljø" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Lørenskog Rørleggerbedrift"
              width={48}
              height={48}
              className="h-10 w-auto brightness-0 invert"
            />
            <span className="font-heading font-semibold text-white text-sm leading-tight hidden sm:block">
              Lørenskog
              <br />
              Rørleggerbedrift
            </span>
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA button — rounded pill style like FlowMate */}
          <div className="hidden md:block">
            <Link
              href="/kontakt"
              className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium text-white border border-white/25 hover:bg-white/10 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              Kontakt oss
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white cursor-pointer"
            aria-label={open ? "Lukk meny" : "Åpne meny"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="block mt-3 px-4 py-3 text-sm font-medium text-white text-center border border-white/25 rounded-full hover:bg-white/10 transition-colors"
              >
                Kontakt oss
              </Link>
              <div className="pt-4 border-t border-white/10 mt-3 flex flex-col gap-2">
                <a
                  href="tel:+4792258585"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="size-4" />
                  +47 922 58 585
                </a>
                <a
                  href="mailto:mail@lorenskogror.no"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="size-4" />
                  mail@lorenskogror.no
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
