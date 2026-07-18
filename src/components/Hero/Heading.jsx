
import { useRef, useId } from "react";
import { motion } from "framer-motion";

/**
 * RippleText — wraps text in a liquid/water ripple distortion on hover.
 * Uses SVG feTurbulence + feDisplacementMap (SMIL <animate>) to physically
 * warp the glyph shapes for a brief moment, combined with a soft glow.
 *
 * Usage:
 *   <RippleText className="bg-gradient-to-r from-blue-100 via-purple-200 to-blue-300 bg-clip-text text-transparent">
 *     Ansari Arham
 *   </RippleText>
 */
export default function RippleText({ children, className = "" }) {
  const freqAnimRef = useRef(null);
  const scaleAnimRef = useRef(null);
  // useId() is stable across server + client render, unlike Math.random(),
  // so it won't cause a hydration mismatch in SSR frameworks like Next.js.
  const filterId = `water-ripple-${useId().replace(/:/g, "")}`;

  const triggerRipple = () => {
    // Restart the SMIL animations from the beginning each time you hover
    freqAnimRef.current?.beginElement();
    scaleAnimRef.current?.beginElement();
  };

  return (
    <>
      {/* Hidden SVG filter definition — lives once per instance, renders nothing visible */}
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id={filterId} x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01 0.04"
              numOctaves="2"
              seed="3"
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
                values="0;20;0"
                begin="indefinite"
                fill="freeze"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>

      <motion.span
        onMouseEnter={triggerRipple}
        className={`inline-block cursor-default ${className}`}
        style={{ filter: `url(#${filterId})` }}
        whileHover={{
          filter: [
            `url(#${filterId}) drop-shadow(0 0 0px rgba(139,92,246,0))`,
            `url(#${filterId}) drop-shadow(0 0 22px rgba(139,92,246,0.7))`,
            `url(#${filterId}) drop-shadow(0 0 0px rgba(139,92,246,0))`,
          ],
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    </>
  );
}