import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Twitter, Instagram, Linkedin, Github, Zap } from "lucide-react";
import logo from "../../assets/logo.webp";

export const Footer = ({ openBooking }) => {
  return (
    <footer id="contact" className="pt-16 md:pt-24 pb-8 md:pb-12 px-6 bg-darker">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <img 
              src={logo} 
              alt="Arpan Sankesh" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10 bg-accent"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <p className="text-base md:text-lg font-medium max-w-sm">
              I guarantee 2x bookings in 45 days or you get your money back.
            </p>
          </div>

          <h2 className="text-6xl sm:text-xl md:text-xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[0.9]">
            Let's Work Together!
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            <button 
              onClick={() => openBooking()}
              className="w-full md:w-auto px-10 py-5 md:px-12 md:py-6 bg-accent text-dark font-bold text-lg md:text-xl rounded-full flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:shadow-[0_0_30px_rgba(0,255,102,0.4)]"
            >
              <Zap size={24} fill="currentColor" />
              BOOK A FREE CALL
            </button>
            
            <div className="flex flex-col gap-4 text-lg md:text-xl">
              <a href="mailto:arpansankesh830@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Mail size={20} className="text-accent" /> arpansankesh830@gmail.com
              </a>
              <a href="tel:+918305343679" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Phone size={20} className="text-accent" /> (+91) 8305343679
              </a>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-8 pt-8 md:pt-12 border-t border-white/10">
          <div className="flex gap-6 text-white/40">
            <a href="https://github.com/ArpanSankesh" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/arpan-sankesh/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors"><Linkedin size={20} /></a>
            <a href="https://www.instagram.com/buildwith.arpan/" target="_blank" rel="noopener noreferrer" className="hover:text-white cursor-pointer transition-colors"><Instagram size={20} /></a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="text-xs md:text-sm text-white/20 text-center">
            Designed By Arpan Sankesh • 2026
          </p>
        </div>
      </div>
    </footer>
  );
};
