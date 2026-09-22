import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/logo.jpg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-800/80 backdrop-blur-lg border-b border-slate-700/50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg bg-white overflow-hidden flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform border border-slate-700">
              <img src={logoImg} alt="LR Aqua Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-extrabold text-lg tracking-tight leading-none text-white group-hover:text-brand-sky transition-colors flex flex-col">
                <span className="text-xl">LR AQUA</span>
                <span className="text-xs font-semibold text-sky-400 tracking-wider">CONSTRUCTIONS</span>
              </div>
              <div className="text-[9px] font-medium text-slate-400 mt-1">
                Swimming Pools & Water Features
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-slate-850 text-brand-sky font-semibold border border-slate-800"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA & Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-brand-blue to-brand-sky text-white shadow-md shadow-sky-500/10 hover:shadow-lg hover:shadow-sky-500/20 hover:-translate-y-0.5 transition-all"
            >
              Get a Quote
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-700/50 bg-slate-800/90 backdrop-blur-md px-4 pt-2 pb-6 space-y-1 shadow-inner animate-in fade-in slide-in-from-top-4 duration-200">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                  isActive
                    ? "bg-slate-800 text-brand-sky shadow-sm"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 px-4 sm:hidden">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-base font-semibold bg-gradient-to-r from-brand-blue to-brand-sky text-white shadow-md shadow-sky-500/10"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
