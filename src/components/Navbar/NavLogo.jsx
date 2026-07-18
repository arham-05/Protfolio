"use client";
import { useRef, useId } from "react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
// Logo is in the public/ folder, so it's referenced by URL path directly
// (no import needed) — see the src="/logo.png" below.

export default function NavbarLogo() {
  const lenis = useLenis();
  const freqAnimRef = useRef(null);
  const scaleAnimRef = useRef(null);
  // useId() is stable across server + client render — avoids hydration mismatch
  const filterId = `logo-ripple-${useId().replace(/:/g, "")}`;

  const scrollToTop = () => {
    lenis?.scrollTo(0);
  };

  const triggerRipple = () => {
    freqAnimRef.current?.beginElement();
    scaleAnimRef.current?.beginElement();
  };

  return (
    <>
      {/* Hidden SVG filter definition — renders nothing visible on its own */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.04"
              numOctaves="2"
              seed="4"
              result="noise"
            >
              <animate
                ref={freqAnimRef}
                attributeName="baseFrequency"
                dur="1s"
                values="0.01 0.04;0.02 0.09;0.01 0.04"
                begin="indefinite"
                fill="freeze"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            >
              <animate
                ref={scaleAnimRef}
                attributeName="scale"
                dur="1s"
                values="0;14;0"
                begin="indefinite"
                fill="freeze"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>

      <motion.a
        href="#home"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        className="flex items-center gap-2 cursor-pointer select-none"
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src="/logo.png"
          alt="Arham logo"
          onMouseEnter={triggerRipple}
          className="h-14 sm:h-16 w-auto object-contain"
          style={{ filter: `url(#${filterId})` }}
          whileHover={{
            scale: 1.06,
            filter: [
              `url(#${filterId}) drop-shadow(0 0 0px rgba(139,92,246,0))`,
              `url(#${filterId}) drop-shadow(0 0 16px rgba(139,92,246,0.6))`,
              `url(#${filterId}) drop-shadow(0 0 0px rgba(139,92,246,0))`,
            ],
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.a>
    </>
  );
}