
import { motion } from "framer-motion"
import arham from "../../assets/arham.png"

const stats = [
  { label: "Month Experience ", value: "6" },
  { label: "Projects Completed", value: "5+" },
  { label: "Happy Clients", value: "10+" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <section
      id="about"
      className="relative font-lexend w-full py-20 sm:py-28 px-4 sm:px-6 bg-transparent overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] rounded-full bg-blue-600/10 blur-[130px] -z-10" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative flex justify-center md:justify-start order-1 md:order-none"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72">
            <motion.div
              className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 blur-md opacity-60"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center">
              {/* Replace src with your photo */}
              <img
                src={arham}
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          </div>
        </motion.div>

        {/* Text side */}
        <div>
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-block text-sm font-medium text-blue-300 tracking-widest uppercase mb-3"
          >
            About Me
          </motion.span>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5"
          >
            <span className="bg-gradient-to-r from-blue-200 to-purple-400 bg-clip-text text-transparent">
              FrontEnd Developer
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8"
          >
            Hi, I'm Ansari Arham, a BCA graduate and aspiring Frontend Developer
            passionate about creating modern, responsive, and user-friendly web
            applications. I work with HTML, CSS, JavaScript, Tailwind CSS,
            React.js, and Redux to build clean and interactive websites. I enjoy
            solving real-world problems, learning new technologies, and
            collaborating with teams to develop impactful projects.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-3 py-4 text-center hover:border-blue-400/30 transition-colors"
              >
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="text-[11px] sm:text-xs text-gray-400 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
