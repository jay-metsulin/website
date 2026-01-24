"use client";

import Link from "next/link";
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
    { href: "/technology", label: "Technology" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 backdrop-blur-sm"
          : "bg-white/0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">Metsulin</span>
          </Link>

          {/* Desktop Navigation */}
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#0066cc]"
              >
                {link.label}
              </Link>
            ))}
            {/*
            <a
              href="mailto:@metsulin.com"
              className="rounded-full bg-[#0066cc] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0052a3]"
            >
              Contact
            </a>
            */}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#0066cc]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:info@metsulin.com"
              className="block rounded-md bg-[#0066cc] px-3 py-2 text-base font-medium text-white hover:bg-[#0052a3]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
