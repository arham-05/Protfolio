import React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, ArrowDown } from "lucide-react"
import RippleText from "./Heading";

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI Developer",
  "Responsive Web Designer",
]

const HeroSection = () => {
const [displayText, setDisplayText] = useState("");
const [roleIndex, setRoleIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentRole = roles[roleIndex];

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setDisplayText(currentRole.substring(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      setDisplayText(currentRole.substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);

      if (charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, isDeleting ? 50 : 100);

  return () => clearTimeout(timer);
}, [charIndex, isDeleting, roleIndex]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }
  return (
    <section
      id="home"
      className="relative font-bricolage min-h-screen w-full overflow-hidden bg-transparent flex items-center justify-center px-4 sm:px-6 py-24 sm:py-0"
    >
      {" "}
      {/* Animated gradient orbs — subtle, sits on top of your existing global bg */}
      <motion.div
        className="absolute top-1/4 -left-20 sm:-left-32 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full bg-blue-600/15 blur-[90px] sm:blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 sm:-right-32 w-72 h-72 sm:w-[28rem] sm:h-[28rem] rounded-full bg-purple-600/15 blur-[90px] sm:blur-[120px]"
        animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl w-full text-center"
      >
        {/* <motion.span
          variants={item}
          className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium text-blue-300 border border-blue-400/20 bg-blue-500/10 backdrop-blur-sm"
        >
          👋 Available for freelance work
        </motion.span> */}

        <motion.h1 
         whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
  variants={item} 
  className="text-4xl font-bricolage xs:text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight px-2" 
> 
  Hi, I'm{" "} 
  <RippleText className="bg-gradient-to-r from-blue-100 via-blue-200 to-purple-400 bg-clip-text text-transparent">
    Ansari Arham
  </RippleText>
</motion.h1>

        <motion.div
          variants={item}
          className="mt-4 h-8 sm:h-10 flex items-center justify-center px-2"
        >
          <span className="text-base xs:text-lg sm:text-2xl text-gray-300 font-mono text-center">
            {displayText}
            <span className="inline-block w-[2px] h-5 sm:h-6 ml-1 bg-blue-400 align-middle animate-pulse" />
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed px-2"
        >
          I design and build fast, accessible, and visually engaging web
          experiences — turning ideas into interfaces people enjoy using.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto text-center px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-300 to-purple-300 shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] transition-shadow"
          >
            View My Work
          </motion.a>
          {/* <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-7 py-3 rounded-full font-semibold text-white border border-white/15 bg-white/5 backdrop-blur-md flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            <Download size={18} /> Resume
          </motion.a> */}
        </motion.div>
      </motion.div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  )
}

export default HeroSection
