import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logoImg from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 mt-16">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg bg-white overflow-hidden flex items-center justify-center shadow-md shadow-sky-500/20 border border-slate-800">
              <img src={logoImg} alt="LR Aqua Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-extrabold text-lg text-white tracking-tight leading-none flex flex-col">
                <span className="text-xl">LR AQUA</span>
                <span className="text-xs font-semibold text-sky-400 tracking-wider">CONSTRUCTIONS</span>
              </div>
              <div className="text-[9px] font-medium text-slate-400 mt-1">
                Swimming Pools & Water Features
              </div>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Premier aquatic infrastructure & pool construction across India. Delivering excellence in civil engineering.
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Services</h4>
          <ul className="space-y-3.5 text-sm">
            {[
              { name: "Swimming Pools", path: "/services" },
              { name: "Water Features", path: "/services" },
              { name: "Saltwater Systems", path: "/services" },
              { name: "Civil Works", path: "/services" },
              { name: "Maintenance", path: "/services" },
            ].map((s) => (
              <li key={s.name}>
                <Link to={s.path} className="hover:text-white transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Quick Links</h4>
          <ul className="space-y-3.5 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Case Studies", path: "/case-studies" },
              { name: "Blog", path: "/blog" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.name}>
                <Link to={l.path} className="hover:text-white transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-brand-sky shrink-0" />
              <span>3J8W+4R8, BDS Nagar, Kothanur, Bengaluru, Karnataka 560077</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-5 h-5 text-brand-sky shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-5 h-5 text-brand-sky shrink-0" />
              <span>info@lraqua.in</span>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-3 pt-4">
            {[
              { Icon: Linkedin, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-brand-sky hover:text-white transition-all duration-300"
              >
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span>&copy; {new Date().getFullYear()} LR AQUA CONSTRUCTIONS. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
