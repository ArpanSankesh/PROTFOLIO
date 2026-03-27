import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, CheckCircle2, Zap } from "lucide-react";
import logo from "../../assets/logo.webp";

export const Hero = ({ openBooking }) => {
  const heroText = "I Build Websites That Turn Visitors Into Clients";

  return (
    <section id="about" className="pt-28 sm:pt-24 md:pt-40 pb-12 md:pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8">
            <div className="relative">
              <img 
                src={logo} 
                alt="Arpan Sankesh" 
                className="w-16 h-16 md:w-20 md:h-20 rounded-full p-1 object-cover"
                referrerPolicy="no-referrer"
                fetchpriority="high"
                loading="eager"
              />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-2">Arpan Sankesh</h2>
              <div className="flex gap-3 text-white/40">
                <a href="https://github.com/ArpanSankesh" target="_blank" rel="noopener noreferrer"><Github size={16} className="hover:text-white cursor-pointer transition-colors" /></a>
                <a href="https://www.linkedin.com/in/arpan-sankesh/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} className="hover:text-white cursor-pointer transition-colors" /></a>
                <a href="https://www.instagram.com/buildwith.arpan/" target="_blank" rel="noopener noreferrer"><Instagram size={16} className="hover:text-white cursor-pointer transition-colors" /></a>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] md:leading-[1] tracking-tighter mb-6 md:mb-12 max-w-6xl">
            {heroText}
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
            <div className="max-w-xl">
              <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-6">
                I'm a web designer & developer who builds high-converting websites for businesses that want results. Most sites convert 2-3% of visitors. Mine hit 6-8%. That's 3x more leads, bookings, and sales from the same traffic.
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/40">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                Trusted by 25+ businesses • Average 2-3x increase in conversions within 30 days
              </div>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-6">
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => openBooking()}
                  className="w-full md:w-auto px-8 py-4 bg-accent text-dark font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:shadow-[0_0_30px_rgba(0,255,102,0.4)]"
                >
                  <Zap size={20} fill="currentColor" />
                  BOOK A FREE CALL
                </button>
                <p className="text-xs text-white/40 text-center md:text-left">
                  See exactly what's costing you conversions • 5-minute video • No obligation
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
