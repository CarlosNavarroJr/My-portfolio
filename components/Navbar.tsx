"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1e1e2e]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <span className="text-[#38bdf8] font-bold text-lg tracking-tight">CN</span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-[#94a3b8] hover:text-[#38bdf8] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#38bdf8] transition-all duration-200 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/CarlosNavarroJr" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/carlos-navarro-jr-782581191/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:navarro89cnp@gmail.com" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-[#38bdf8]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111118] border-b border-[#1e1e2e] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-[#94a3b8] hover:text-[#38bdf8] text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/CarlosNavarroJr" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/carlos-navarro-jr-782581191/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:navarro89cnp@gmail.com" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
