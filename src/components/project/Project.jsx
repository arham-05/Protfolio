import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import employee from "../../assets/employee.png"
import cart from "../../assets/E-com.png"
import Weather from "../../assets/Weather.png"

// GitHub icon — lucide-react removed brand icons in v1.0, so this is a small inline SVG
const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width={16}
    height={16}
    fill="currentColor"
    {...props}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.478 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.29 0 .32.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const projects = [
  {
    image: employee,
    title: "CRUD Operation",
    desc: "Built a CRUD-based application using React.js, enabling users to create, read, update, and delete data with efficient state management and a responsive UI.",
    tags: ["React.js", "Tailwind", "JavaScript"],
    github: "https://github.com/arham-05/Crud-Operation9",
    live: "https://crud-opearation.netlify.app/",
  },
  {
    image: cart,
    title: "E-Commerce",
    desc: "Developed a responsive E-Commerce web application using React.js and Redux with product listing, shopping cart, and dynamic state management for a smooth user experience.",
    tags: ["Redux", "React.js", "Tailwind", "JavaScript"],
    github: "https://github.com/arham-05/Shop-Ease",
    live: "https://swift-shop-cart.netlify.app/",
  },
  {
    image: Weather,
    title: "Live-SkyCast",
    desc: "Developed a responsive Weather Application using React.js and OpenWeather API. The app provides real-time weather information, including temperature, humidity, wind speed, and weather conditions with a clean and user-friendly interface.",
    tags: [ "Redux" ,"React.js","Tailwind",],
    github: "https://github.com/arham-05/SkynCast",
    live: "https://live-skycast.netlify.app/",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 bg-transparent overflow-hidden"
    >
      <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[130px] -z-10" />

      <div className="max-w-6xl mx-auto text-center mb-14">
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="inline-block text-sm font-medium text-blue-300 tracking-widest uppercase mb-3"
        >
          Featured Work
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
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={i}
            whileHover={{ y: -8 }}
            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all"
          >
            {/* preview area */}
            <div className="h-40 w-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />{" "}
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <GithubIcon /> Code
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
