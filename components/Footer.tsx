"use client";

import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d14] border-t border-[#1e1e2e] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#94a3b8] text-sm">
          © 2026 Carlos Navarro Jr. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a href="https://github.com/CarlosNavarroJr" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/carlos-navarro-jr-782581191/" target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:navarro89cnp@gmail.com" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors">
            <Mail size={18} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors ml-2"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
