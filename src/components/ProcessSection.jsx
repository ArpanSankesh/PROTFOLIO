import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { processSteps } from "../data.js";

export const ProcessSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Motion values for fluid mouse tracking overlay
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the raw mouse movement with physical springs
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const floatX = useSpring(mouseX, springConfig);
  const floatY = useSpring(mouseY, springConfig);

  // Track the mouse globally across the window
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="py-12 md:12 px-4 md:px-6 bg-darker relative">
      <div className="max-w-7xl mx-auto border-t border-white/10 relative">
        
        {/* The floating image wrapper that tracks the cursor */}
        <motion.div
          className="fixed pointer-events-none z-[150] w-[280px] md:w-[400px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          style={{
            x: floatX,
            y: floatY,
            translateX: "-50%",
            translateY: "-50%",
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.8,
          }}
          transition={{ 
            opacity: { duration: 0.3, ease: "easeInOut" }, 
            scale: { duration: 0.5, type: "spring", damping: 20 } 
          }}
        >
          <AnimatePresence>
            {hoveredIndex !== null && (
              <motion.img
                key={hoveredIndex}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={`https://picsum.photos/seed/process-${processSteps[hoveredIndex].id}/600/400`}
                alt="Process Step"
                className="w-full h-full object-cover absolute inset-0"
                loading="eager"
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-8 md:mb-16 pt-6 md:pt-12">
          <div className="shrink-0">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">My Process</h2>
            <p className="text-white/40 text-lg mt-4">Simple, clear, no surprises</p>
          </div>
        </div>
        
        {/* Interactive Rows replacing sub-text */}
        <div className="flex flex-col">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-b border-white/10 py-6 md:py-16 flex items-center justify-between cursor-pointer -mx-4 px-4 md:-mx-6 md:px-6 md:hover:px-12 transition-all duration-500 ease-out"
            >
              <div className="flex items-center gap-4 md:gap-16 lg:gap-32 w-full">
                <span className="text-white/40 font-mono text-xl md:text-2xl group-hover:text-accent transition-colors duration-300">
                  {step.id}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white/60 group-hover:text-white transition-colors duration-300 tracking-tighter">
                  {step.title}
                </h3>
              </div>
              <div className="hidden md:block opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                <ArrowRight size={40} className="text-accent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
