"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#e2e8f0] mb-2">About Me</h2>
          <div className="w-12 h-1 bg-[#38bdf8] mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-[#94a3b8] leading-relaxed"
          >
            {/* TODO: Replace these paragraphs with your own bio */}
            <p>
              I&apos;m a software developer based in Milwaukee WI, passionate about building things
              that live on the internet. My background spans both hardware and software — I bring
              a detail-oriented, systems-thinking mindset to everything I build.
            </p>
            <p>
              I love the craft of writing clean, maintainable code and enjoy working across the
              full stack — from designing APIs and databases to building polished UIs. Whether
              it&apos;s a side project or a production system, I care about getting the details
              right.
            </p>
            <p>
              I&apos;m currently looking for opportunities where I can contribute to a strong
              engineering team, grow as a developer, and work on products that make a real impact.
            </p>
          </motion.div>

          {/* Code block decoration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 font-mono text-sm"
          >
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <pre className="text-[#94a3b8] leading-7 overflow-x-auto">
              <span className="text-[#38bdf8]">const</span>{" "}
              <span className="text-[#e2e8f0]">carlos</span>{" "}
              <span className="text-[#38bdf8]">=</span> {"{"}
              {"\n"}
              {"  "}<span className="text-[#38bdf8]">name</span>:{" "}
              <span className="text-green-400">&quot;Carlos Navarro Jr.&quot;</span>,{"\n"}
              {"  "}<span className="text-[#38bdf8]">role</span>:{" "}
              <span className="text-green-400">&quot;Fullstack Engineer&quot;</span>,{"\n"}
              {"  "}<span className="text-[#38bdf8]">loves</span>: [{"\n"}
              {"    "}<span className="text-green-400">&quot;clean code&quot;</span>,{"\n"}
              {"    "}<span className="text-green-400">&quot;solving hard problems&quot;</span>,{"\n"}
              {"    "}<span className="text-green-400">&quot;shipping fast&quot;</span>,{"\n"}
              {"  "}],{"\n"}
              {"  "}<span className="text-[#38bdf8]">available</span>:{" "}
              <span className="text-purple-400">true</span>,{"\n"}
              {"}"};
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
