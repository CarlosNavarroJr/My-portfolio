"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/experience";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 px-6 bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#e2e8f0] mb-2">Work Experience</h2>
          <div className="w-12 h-1 bg-[#38bdf8] mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 hover:border-[#38bdf8]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.08)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-[#e2e8f0] font-semibold text-lg">{job.company}</h3>
              </div>
              <p className="text-[#38bdf8] text-sm font-medium mb-1">{job.title}</p>
              <p className="text-[#94a3b8] text-xs mb-4">{job.dates}</p>

              <ul className="space-y-2 mb-4">
                {job.bullets.map((b, j) => (
                  <li key={j} className="text-[#94a3b8] text-sm flex gap-2">
                    <span className="text-[#38bdf8] mt-1.5 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-md bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
