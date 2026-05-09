"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, MessageSquare, Target, Users, Search } from "lucide-react";
import { traits } from "@/data/whyHireMe";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2, Zap, MessageSquare, Target, Users, Search,
};

export default function WhyHireMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#e2e8f0] mb-2">Why Hire Me</h2>
          <div className="w-12 h-1 bg-[#38bdf8] mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {traits.map((trait, i) => {
            const Icon = iconMap[trait.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#111118] border border-[#1e1e2e] rounded-xl p-6 hover:border-[#38bdf8]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.08)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/10 flex items-center justify-center mb-4">
                  {Icon && <Icon size={20} className="text-[#38bdf8]" />}
                </div>
                <h3 className="text-[#e2e8f0] font-semibold mb-2">{trait.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed">{trait.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
