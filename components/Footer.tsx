import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/science", label: "Science" },
    { href: "/for-clinics", label: "For Clinics" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Metsulin"
                width={120}
                height={34}
                className="h-7 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              The first at-home rapid test for insulin and glucose.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <a
              href="http://linkedin.com/company/metsulin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Metsulin on LinkedIn"
              className="inline-flex items-center justify-center rounded-full border border-white/20 p-2.5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <p className="mt-4 text-sm text-white/40">Menlo Park, CA</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-center text-xs text-white/30">
            &copy; {year} Metsulin Corporation. All rights reserved.
          </p>
          <a
            href="http://linkedin.com/company/metsulin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Metsulin on LinkedIn"
            className="text-white/30 hover:text-white transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
