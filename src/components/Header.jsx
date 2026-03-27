import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Github, Instagram, Linkedin, Zap } from "lucide-react";
import logo from "../../assets/logo.webp";

export const Header = ({ isScrolled, activeSection, isMenuOpen, setIsMenuOpen, openBooking }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center border-b ${isScrolled ? "bg-darker/80 backdrop-blur-xl border-white/5 py-3 md:py-4 shadow-xl" : "bg-transparent border-transparent py-5 md:py-6"}`}>
      <div className="w-full max-w-7xl flex justify-between items-center px-4 md:px-6 relative z-50">
        <div 
          className="relative flex items-center h-8 md:h-10 cursor-pointer w-32 md:w-40" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.span 
                key="text"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-lg md:text-xl font-bold tracking-widest uppercase absolute left-0 text-white"
              >
                PORTFOLIO
              </motion.span>
            ) : (
              <motion.div 
                key="logo"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center gap-2 md:gap-3 absolute left-0"
              >
                <img 
                  src={logo} 
                  alt="Arpan Sankesh" 
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                  fetchpriority="high"
                />
                <span className="text-lg md:text-xl font-bold tracking-tight">Arpan</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#about" className={`text-sm font-medium transition-colors ${activeSection === "about" ? "text-white" : "text-white/60 hover:text-white"}`}>About</a>
          <a href="#work" className={`text-sm font-medium transition-colors ${activeSection === "work" ? "text-white" : "text-white/60 hover:text-white"}`}>Work</a>
          <button 
            onClick={() => openBooking()}
            className="px-5 lg:px-6 py-2 md:py-2.5 bg-accent text-dark rounded-full text-sm font-bold shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:shadow-[0_0_30px_rgba(0,255,102,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Zap size={14} fill="currentColor" />
            BOOK A FREE CALL
          </button>
        </nav>

        <button 
          className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            data-lenis-prevent="true"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-darker z-40 md:hidden overflow-y-auto flex flex-col pt-24 px-6 pb-12"
          >
            <div className="flex-1 flex flex-col justify-center gap-6 mt-8">
              <motion.span 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.2 }} 
                className="text-white/20 font-mono text-sm tracking-widest uppercase mb-2"
              >
                Navigation
              </motion.span>
              
              {[
                { name: "About", id: "about" },
                { name: "Work", id: "work" }
              ].map((item, idx) => (
                <motion.a 
                  key={item.name}
                  href={`#${item.id}`} 
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.1), duration: 0.5, ease: "easeOut" }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-5xl sm:text-6xl font-bold tracking-tighter ${activeSection === item.id ? "text-accent" : "text-white/60 hover:text-white"}`}
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a 
                href="#contact" 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  openBooking();
                }}
                className="text-5xl sm:text-6xl font-bold tracking-tighter text-white"
              >
                Contact
              </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-12 space-y-8 border-t border-white/10 pt-8"
            >
              <div>
                <span className="text-white/20 font-mono text-xs tracking-widest uppercase block mb-4">Get in touch</span>
                <a href="mailto:arpansankesh830@gmail.com" className="text-lg text-white/80 block mb-2 hover:text-white transition-colors">arpansankesh830@gmail.com</a>
                <a href="tel:+918305343679" className="text-lg text-white/80 block hover:text-white transition-colors">(+91) 8305343679</a>
              </div>
              
              <div>
                <span className="text-white/20 font-mono text-xs tracking-widest uppercase block mb-4">Socials</span>
                <div className="flex gap-6 text-white">
                  <a href="https://github.com/ArpanSankesh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Github size={24} /></a>
                  <a href="https://www.linkedin.com/in/arpan-sankesh/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
                  <a href="https://www.instagram.com/buildwith.arpan/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Instagram size={24} /></a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
