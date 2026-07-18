"use client";
import { ReactLenis } from "lenis/react";

/**
 * Wrap your entire app with this component (in layout.jsx / App.jsx)
 * to enable buttery-smooth momentum scrolling across the whole portfolio.
 */
export default function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1, // lower = smoother/slower, higher = snappier (0.05–0.15 sweet spot)
        duration: 1.2, // scroll animation duration
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
