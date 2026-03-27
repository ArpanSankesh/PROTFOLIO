import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Zap } from "lucide-react";
import { services } from "../data.js";

export const ServicesSection = ({ openBooking }) => {
  return (
    <section className="pt-8 md:py-20 px-3 md:px-6 bg-darker">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10 md:mb-20 px-2">
          <div className="shrink-0">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">My Services</h2>
            <p className="text-white/40 text-sm mt-2">Three ways to work with me</p>
          </div>
          <div className="h-[1px] w-full bg-white/10 hidden md:block" />
          <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs text-white/40 uppercase tracking-widest shrink-0">
            <span>Visual Identity</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>E-commerce</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>Landing Pages</span>
            <span className="w-1 h-1 rounded-full bg-accent" />
            <span>Web Design</span>
          </div>
        </div>
        
        <div className="space-y-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group bg-white/[0.02] border border-white/5 rounded-3xl md:rounded-[32px] p-4 sm:p-8 md:p-12 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6 md:mb-12">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-accent font-bold text-2xl">{idx + 1}.</span>
                  <h3 className="text-xl md:text-3xl font-bold">{service.title}</h3>
                </div>
                <div className="h-[1px] w-full bg-white/10 hidden md:block" />
                <div className="flex items-center gap-4 text-xs md:text-sm text-white/40 shrink-0 whitespace-nowrap">
                  <span>Starts at <span className="text-white font-medium">{service.price}</span></span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{service.time}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-12 items-start">
                <div className="lg:col-span-6">
                  <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">What you get:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-white/80 text-sm md:text-base">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-accent text-sm font-bold mb-2">Perfect for:</p>
                    <p className="text-white/80 text-sm">{service.perfectFor}</p>
                  </div> */}
                </div>
                <div className="lg:col-span-5">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Includes:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                            <CheckCircle2 size={14} className="text-accent shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button 
                      onClick={() => openBooking()}
                      className="w-full py-4 bg-accent text-dark font-bold rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:shadow-[0_0_30px_rgba(0,255,102,0.4)]"
                    >
                      <Zap size={20} fill="currentColor" />
                      BOOK A FREE CALL
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-1 flex justify-end">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 items-center hidden md:flex justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-all duration-500">
                    <Zap size={20} fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
