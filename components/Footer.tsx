import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Metsulin Corporation
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Developing biosensing technologies and Software as a Medical Device
              (SaMD) to support disease prevention and remission programs.
            </p>
            {/*<p className="text-sm font-medium text-[#0066cc]">Launching 2026</p>*/}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          
          {/* Contact */}
          {/* <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:@metsulin.com"
                  className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors"
                >
                  @metsulin.com
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Metsulin Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
