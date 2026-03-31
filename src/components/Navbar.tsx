"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Hjem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/leverandorer", label: "Leverandører" },
  { href: "/miljo", label: "Miljø" },
  { href: "/kontakt", label: "Kontakt" },
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
      {/* Top bar */}
      <div className="bg-teal-900 text-white text-sm py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-6">
          <a
            href="mailto:mail@lorenskogror.no"
            className="flex items-center gap-1.5 hover:text-teal-200 transition-colors"
          >
            <Mail className="size-3.5" />
            mail@lorenskogror.no
          </a>
          <a
            href="tel:+4792258585"
            className="flex items-center gap-1.5 hover:text-teal-200 transition-colors"
          >
            <Phone className="size-3.5" />
            +47 922 58 585
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Lørenskog Rørleggerbedrift"
              width={48}
              height={48}
              className="h-10 w-auto"
            />
            <span className="font-heading font-semibold text-slate-900 text-sm leading-tight hidden sm:block">
              Lørenskog
              <br />
              Rørleggerbedrift
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="ml-3 bg-teal-600 hover:bg-teal-700 text-white"
              render={<Link href="/kontakt" />}
            >
              Kontakt oss
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-700"
            aria-label="Meny"
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
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:+4792258585"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600"
                >
                  <Phone className="size-4" />
                  +47 922 58 585
                </a>
                <a
                  href="mailto:mail@lorenskogror.no"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600"
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
