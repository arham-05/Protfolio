
import { motion } from "framer-motion";
import { Code2, Server, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React",  "Tailwind CSS", "Framer Motion", "JavaScript", "CSS", "HTML"],
  },
  {
    title: "Backend",
    icon: Server,
    // skills: ["Node.js", "Express", "MongoDB", "REST APIs", "PostgreSQL"],
    skills: ['SQL (Core) '],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git & GitHub", "Figma", "Vite", " Chrome", "DevTools","VS Code"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative font-lexend w-full py-20 sm:py-28 px-4 sm:px-6 bg-transparent overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] -z-10" />

      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="inline-block text-sm font-medium text-blue-300 tracking-widest uppercase mb-3"
        >
          What I Work With
        </motion.span>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
        >
          My{" "}
          <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            Skills
          </span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4">
                <Icon size={22} className="text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-blue-300 hover:border-blue-400/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}