"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/skills";
import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiDocker,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss,
  SiPostgresql, SiMongodb,
  SiGit, SiGithub, SiDocker, FaAws,
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#e2e8f0] mb-2">Skills</h2>
          <div className="w-12 h-1 bg-[#38bdf8] mb-12" />
        </motion.div>

        <div className="space-y-10">
          {skills.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="text-[#94a3b8] text-xs font-semibold uppercase tracking-widest mb-5">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-6">
                {cat.skills.map((skill, si) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.05 }}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-14 h-14 rounded-xl bg-[#111118] border border-[#1e1e2e] flex items-center justify-center group-hover:border-[#38bdf8]/50 group-hover:bg-[#38bdf8]/5 transition-all duration-200">
                        {Icon ? (
                          <Icon size={26} className="text-[#94a3b8] group-hover:text-[#38bdf8] transition-colors duration-200" />
                        ) : (
                          <span className="text-[#94a3b8] text-xs">{skill.name.slice(0, 2)}</span>
                        )}
                      </div>
                      <span className="text-xs text-[#94a3b8] group-hover:text-[#e2e8f0] transition-colors duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
