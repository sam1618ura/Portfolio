import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#7B052A]">
      {/* Navbar header */}
      <div className="Adorn-Engraved-Expanded relative mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        {/* Desktop links */}
        <ul className="hidden list-none gap-4 text-lg text-white md:flex">
          <li>
            <Link to="/" className="hover:text-gray-900">
              Work
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-900">
              About
            </Link>
          </li>
        </ul>

        <Link
          to="/"
          className="absolute left-4 -translate-x-3 whitespace-nowrap text-base text-white hover:text-gray-900 md:left-1/2 md:-translate-x-1/2 sm:text-xl"
        >
          Samanda MASDURAUD URREA
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="ml-auto font-sans text-xl leading-none text-white md:hidden"
        >
          {menuOpen ? "X" : "☰"}
        </button>
      </div>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="Adorn-Engraved-Expanded fixed inset-0 z-[-1] flex h-dvh w-full flex-col items-center justify-center gap-10 bg-[#7B052A] text-2xl text-white md:hidden">
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-900"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-900"
          >
            Contact
          </Link>

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-gray-900"
          >
            Work
          </Link>
        </div>
      )}
    </nav>
  );
}
