import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/arham.pdf";
import { navLinks } from "./NavPages";



export default function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Mobile Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-[#0f172a] z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Arham.
              </h1>

              <button
                onClick={() => setOpen(false)}
                className="text-white text-4xl hover:text-red-400 transition"
              >
                <IoClose />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col mt-10 px-8 space-y-7">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white text-2xl font-semibold hover:text-cyan-400 transition"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="px-8 mt-10">
              <a
                href={resume}
                download
                className="block text-center py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-8 mt-12 text-3xl">
              <a
                href="https://github.com/arham-05"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-cyan-400 hover:scale-110 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ansarimohammadarham/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-400 hover:scale-110 transition"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Footer */}
            {/* <p className="absolute bottom-6 w-full text-center text-gray-400 text-sm">
              © 2026 Arham Ansari
            </p> */}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}