import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useState, useEffect } from "react"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
// import MobileMenu from "../Navbar/MobileMenu"
import { navLinks } from "./NavPages";
import MobileMenu from "./MobileMenu"
import resume from "../../assets/arham.pdf"
import NavbarLogo from "./NavLogo"

{
  /* <navLinks /> */
}
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        height: scrolled ? 70 : 90,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled
          ? "bg-black/40 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(59,130,246,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
       <NavbarLogo />
        {/* Desktop Menu */}
       <motion.ul
  variants={container}
  initial="hidden"
  animate="show"
  className="hidden md:flex items-center gap-8"
>
  {navLinks.map((link) => (
    <motion.li
      key={link.name}
      variants={item}
      whileHover={{
        y: -5,
        scale: 1.05,
        textShadow: "0px 0px 15px rgb(59 130 246)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
    >
      <a
        href={link.href}
        className="
        group
        relative
        text-white
        font-medium
        text-lg
        transition-all
        duration-300
        hover:text-cyan-300
        "
      >
        {link.name}

        <span
          className="
          absolute
          left-0
          -bottom-2
          h-[3px]
          w-0
          rounded-full
          bg-gradient-to-r
          from-blue-400
          via-cyan-300
          to-purple-500
          transition-all
          duration-500
          group-hover:w-full
          shadow-[0_0_20px_rgba(59,130,246,.8)]
          "
        />
      </a>
    </motion.li>
  ))}
</motion.ul>
        {/* Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <motion.a
  href="https://github.com/arham-05"
  target="_blank"
  rel="noreferrer"
  whileHover={{
    scale: 1.25,
    rotate: 360,
  }}
  transition={{
    duration: 0.5,
  }}
  className="text-white text-2xl hover:text-cyan-400 transition"
>
  <FaGithub />
</motion.a>
         <motion.a
  href="https://www.linkedin.com/in/ansarimohammadarham/"
  target="_blank"
  rel="noreferrer"
  whileHover={{
    scale: 1.25,
    rotate: 360,
  }}
  transition={{
    duration: 0.5,
  }}
  className="text-white text-2xl hover:text-blue-400 transition"
>
  <FaLinkedin />
</motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href={resume}
            download="Arham_Ansari_Resume.pdf"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-300 to-purple-400 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition"
          >
            Resume
          </motion.a>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenMenu(true)}
          className="md:hidden hover:text-cyan-400 text-white text-4xl"
        >
          <HiOutlineMenuAlt3 />
        </button>{" "}
        <MobileMenu open={openMenu} setOpen={setOpenMenu} />
      </div>
    </motion.header>
  )
}
