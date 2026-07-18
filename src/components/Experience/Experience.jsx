"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Frontend Developer",
    org: "Learning a new technology",
    period: "2026 — Present",
    desc: "Building responsive, animated web interfaces with React and Tailwind CSS.",
  },
  {
    type: "education",
    title: "BCA, Bachlor of Computer Application",
    org: "YCMOU, Nashik",
    period: "2023 — 2026",
    desc: "Focused on web development, data structures, and software engineering.",
  },
//   {
//     type: "work",
//     title: "Freelance Web Developer",
//     org: "Self-employed",
//     period: "2023 — 2024",
//     desc: "Delivered landing pages and portfolio sites for small businesses.",
//   },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative font-lexend w-full py-20 sm:py-28 px-4 sm:px-6 bg-transparent overflow-hidden"
    >
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-[130px] -z-10" />

      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="inline-block text-sm font-medium text-blue-300 tracking-widest uppercase mb-3"
        >
          My Journey
        </motion.span>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-200"
        >
          Experience &{" "}
          <span className="bg-gradient-to-r from-blue-200 to-purple-400 bg-clip-text text-transparent">
            Education
          </span>
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* vertical line */}
        <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-transparent sm:-translate-x-1/2" />

        <div className="space-y-10">
          {timeline.map((entry, i) => {
            const Icon = entry.type === "work" ? Briefcase : GraduationCap;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={i}
                className={`relative flex items-start sm:items-center gap-5 sm:gap-0 ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* icon dot */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                  <Icon size={18} className="text-white" />
                </div>

                {/* card */}
                <div
                  className={`flex-1 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 hover:border-blue-400/30 transition-colors ${
                    isLeft ? "sm:mr-10" : "sm:ml-10"
                  }`}
                >
                  <span className="text-xs text-blue-300 font-medium">
                    {entry.period}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-1">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-0.5 mb-2">
                    {entry.org}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {entry.desc}
                  </p>
                </div>

                {/* spacer for alternating layout on desktop */}
                <div className="hidden sm:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}