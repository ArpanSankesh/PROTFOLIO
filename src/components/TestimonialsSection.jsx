import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../data.js";

export const TestimonialsSection = () => {
  return (
    <section className="py-8 md:py-24 px-3 md:px-6 bg-darker">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 mb-8 md:mb-20 px-2 md:px-0">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">My Clients</h2>
          <div className="flex flex-wrap gap-3 md:gap-8 opacity-20">
            <span className="text-lg md:text-2xl font-bold italic">Logosipsum</span>
            <span className="text-lg md:text-2xl font-bold italic">Brandify</span>
            <span className="text-lg md:text-2xl font-bold italic">Keystone</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass flex flex-col justify-between h-full"
            >
              <p className="text-base md:text-lg text-white/80 italic mb-12 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <h4 className="font-bold text-sm md:text-base">{t.name}</h4>
                    <p className="text-[10px] md:text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
                <div className="text-accent font-bold text-sm md:text-base">4.9/5 ★</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
