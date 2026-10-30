import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#doctors" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Eye Hospital logo"
            className="h-9 w-auto object-contain sm:h-10"
          />
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
            Eye<span className="text-teal-600">Hospital</span>.com
          </h2>
        </a>

        {/* Desktop / Tablet Navigation Links */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 lg:gap-8 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-teal-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl md:hidden">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Action Button */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <a
              href="#contact"
              onClick={closeMenu}
              className="block w-full rounded-full bg-teal-600 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-700 transition"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
