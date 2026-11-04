import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { NAV_LINKS } from "../data/siteData";
import Button from "./ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-[95%] xl:max-w-[1720px] items-center justify-between px-4 sm:px-6 lg:px-6 py-2.5">

        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="Eye Hospital logo"
            decoding="async"
            className="h-8 w-auto object-contain sm:h-9 lg:h-10"
            width={40}
            height={40}
          />
          <span className="text-base font-bold text-gray-900 sm:text-lg lg:text-xl">
            Eye<span className="text-[#00897b]">Hospital</span>.com
          </span>
        </a>

        {/* Desktop / Tablet Navigation Links */}
        <nav className="hidden md:flex" aria-label="Main Navigation">
          <ul className="flex items-center gap-2 md:gap-3 lg:gap-6 xl:gap-8 text-xs lg:text-sm xl:text-base font-medium text-gray-700">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-[#00897b] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-1 py-0.5"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop / Tablet Action Button */}
        <div className="hidden md:block shrink-0">
          <Button href="#appointment" size="sm" variant="primary">
            Book Appointment
          </Button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[#00897b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-nav-menu" className="absolute top-full left-0 right-0 z-50 border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl md:hidden">
          <ul className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-[#00897b] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Action Button */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <Button href="#appointment" onClick={closeMenu} size="full" variant="primary" className="text-center">
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
