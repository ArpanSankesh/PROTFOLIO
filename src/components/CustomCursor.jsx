import React, { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  // Faster, more responsive spring for the glowing blob
  const blobSpringConfig = { damping: 25, stiffness: 250 };
  const blobX = useSpring(mouseX, blobSpringConfig);
  const blobY = useSpring(mouseY, blobSpringConfig);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, .interactive');
      setIsHovering(!!isInteractive);
    };

    if (!isTouch) {
      window.addEventListener("mousemove", moveCursor, { passive: true });
      window.addEventListener("mouseover", handleHover);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY, isTouch]);

  if (isTouch) return null;

  return (
    <motion.div
      className={`cursor-blob ${isHovering ? "cursor-blob-hover" : ""}`}
      style={{
        x: blobX,
        y: blobY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isHovering ? 1.4 : 1,
        opacity: isHovering ? 1 : 0.8,
      }}
    />
  );
};
