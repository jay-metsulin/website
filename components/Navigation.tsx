"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/science", label: "Science" },
    { href: "/for-clinics", label: "For Clinics" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo-branded.png"
              alt="Metsulin"
              width={140}
              height={40}
              className="h-8 w-auto rounded"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="http://linkedin.com/company/metsulin"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                scrolled
                  ? "text-gray-700 border-gray-300 hover:bg-gray-100"
                  : "text-white border-white/20 hover:bg-white/10"
              }`}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`md:hidden rounded-lg p-2 transition-colors ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
          <div className="space-y-1 px-4 pb-4 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0066cc] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="http://linkedin.com/company/metsulin"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border border-gray-300 px-4 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
