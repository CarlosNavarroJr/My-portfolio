"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#e2e8f0] mb-2">Projects</h2>
          <div className="w-12 h-1 bg-[#38bdf8] mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden hover:border-[#38bdf8]/40 hover:shadow-[0_0_24px_rgba(56,189,248,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Screenshot / placeholder */}
              <div className="relative h-44 bg-gradient-to-br from-[#0d1929] to-[#111118] flex items-center justify-center shrink-0">
                {project.screenshot ? (
                  <Image
                    src={project.screenshot}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-3xl font-bold text-[#38bdf8]/30 font-mono">
                    {project.initials}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-[#e2e8f0] font-semibold text-base mb-2">{project.name}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#94a3b8] hover:text-[#38bdf8] transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
