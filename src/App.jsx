import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { ScrollProgress } from "./components/ScrollProgress.jsx";
import { CustomCursor } from "./components/CustomCursor.jsx";
import { BookingModal } from "./components/BookingModal.jsx";
import { ProjectDetail } from "./components/ProjectDetail.jsx";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { WorkSection } from "./components/WorkSection.jsx";
import { ServicesSection } from "./components/ServicesSection.jsx";
import { ProcessSection } from "./components/ProcessSection.jsx";
import { TestimonialsSection } from "./components/TestimonialsSection.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => {
    setIsBookingOpen(true);
  };

  useEffect(() => {
    if (isMenuOpen || selectedProject || isBookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, selectedProject, isBookingOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["about", "work", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Handle smooth anchor scrolling natively with Lenis
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href');
        if (id && id !== '#') {
          lenis.scrollTo(id);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen selection:bg-accent selection:text-dark"
    >
      <ScrollProgress />
      <CustomCursor />
      <Toaster position="top-center" expand={false} richColors />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
      
      <Header 
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        openBooking={openBooking}
      />

      <Hero openBooking={openBooking} />
      
      <WorkSection setSelectedProject={setSelectedProject} />
      
      <ServicesSection openBooking={openBooking} />
      
      <ProcessSection />
      
      <TestimonialsSection />

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            onContact={() => {
              setSelectedProject(null);
              openBooking();
            }}
          />
        )}
      </AnimatePresence>

      <Footer openBooking={openBooking} />
    </motion.div>
  );
}
