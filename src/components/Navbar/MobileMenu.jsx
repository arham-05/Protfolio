import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/arhamRESUME.pdf";
import { navLinks } from "./NavPages";

export default function MobileMenu({ open, setOpen }) {
  // Lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key, and auto-close if screen grows to desktop size
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);

    window.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onChange);
    };
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <div className="md:hidden">
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Mobile Menu */}
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 flex h-dvh w-[85%] max-w-xs flex-col overflow-y-auto bg-[#0f172a] shadow-2xl sm:max-w-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6 sm:py-6">
              <h1 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                Arham.
              </h1>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-full p-1 text-3xl text-white transition hover:text-red-400 sm:text-4xl"
              >
                <IoClose />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-6 flex flex-col space-y-5 px-6 sm:mt-10 sm:space-y-7 sm:px-8">
              {navLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="text-xl font-semibold text-white transition hover:text-cyan-400 sm:text-2xl"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Resume Button */}
            <div className="mt-8 px-6 sm:mt-10 sm:px-8">
              <a
                href={resume}
                download
                className="block rounded-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 text-center text-sm font-semibold text-white transition hover:scale-105 active:scale-95 sm:text-base"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons (pushed to bottom when there is room) */}
            <div className="mt-auto flex justify-center gap-8 px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10 text-2xl sm:text-3xl">
              <a
                href="https://github.com/arham-05"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-white transition hover:scale-110 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ansarimohammadarham/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-white transition hover:scale-110 hover:text-blue-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}