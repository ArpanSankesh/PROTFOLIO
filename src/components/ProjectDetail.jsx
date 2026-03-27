import React from "react";
import { motion } from "framer-motion";
import { X, CheckCircle2, Zap } from "lucide-react";

export const ProjectDetail = ({ project, onClose, onContact }) => {
  return (
    <motion.div
      data-lenis-prevent="true"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
      className="fixed inset-0 z-[200] bg-darker overflow-y-auto"
    >
      <div className="sticky top-0 z-10 p-3 md:p-6 flex justify-between items-center bg-darker/90 backdrop-blur-md border-b border-white/5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full" style={{ backgroundColor: project.color }} />
          <span className="font-bold text-lg md:text-xl">{project.title}</span>
        </div>
        <button 
          onClick={onClose}
          className="p-2 md:p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-12">
        {/* Hero Section */}
        <div className="mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 leading-tight">
              {project.title} <span className="text-white/20 font-medium">— Case Study</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* 01. The Problem */}
        <section className="mb-8 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
            <div className="md:col-span-4">
              <span className="text-accent font-mono text-xs tracking-widest uppercase mb-2 block">01. The Challenge</span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">The Problem</h3>
            </div>
            <div className="md:col-span-8">
               <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                "{project.caseStudy.problem}"
              </p>
            </div>
           </div>
        </section>

        {/* 02. The Result - High Impact */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 md:p-10 rounded-[24px] bg-accent text-dark relative overflow-hidden mb-8 md:mb-16"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-dark/10 flex items-center justify-center">
                <CheckCircle2 size={18} />
               </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-60">02. The Outcome</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold tracking-tighter mb-4 leading-tight">
               The Result
             </h3>
             <p className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              "{project.caseStudy.result}"
            </p>
           </div>
          <div className="absolute -bottom-6 -right-6 text-[100px] md:text-[140px] font-black opacity-5 select-none leading-none">
             WIN
          </div>
        </motion.div>

        {/* 03. How We Did It - Narrative */}
         <div className="mb-8 md:mb-16">
          <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tighter shrink-0">How we did it</h3>
            <div className="h-[1px] w-full bg-white/10" />
           </div>

           <div className="space-y-8 md:space-y-12">
            {/* Discovery & Research */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <span className="text-accent font-mono text-xs tracking-widest uppercase mb-2 block">Phase 01</span>
                <h4 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">Discovery & Research</h4>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {project.caseStudy.discovery} {project.caseStudy.research}
                 </p>
               </div>
              <div className="aspect-video md:aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <img loading="lazy" decoding="async" src={`https://picsum.photos/seed/${project.title}-discovery/800/800`} alt="Discovery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* Design & Strategy */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="md:order-2">
                 <span className="text-accent font-mono text-xs tracking-widest uppercase mb-2 block">Phase 02</span>
                 <h4 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">Design & Strategy</h4>
                 <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {project.caseStudy.design}
                </p>
               </div>
              <div className="aspect-video md:aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 md:order-1">
                 <img loading="lazy" decoding="async" src={`https://picsum.photos/seed/${project.title}-design/800/800`} alt="Design" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
             </div>

             {/* Development & Launch */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                 <span className="text-accent font-mono text-xs tracking-widest uppercase mb-2 block">Phase 03</span>
                <h4 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">Development & Launch</h4>
                 <p className="text-white/60 text-sm md:text-base leading-relaxed">
                   {project.caseStudy.develop} {project.caseStudy.deploy}
                </p>
              </div>
               <div className="aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <img loading="lazy" decoding="async" src={`https://picsum.photos/seed/${project.title}-launch/1200/800`} alt="Launch" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
             </div>
          </div>
         </div>

        {/* Visuals */}
        <div className="mb-8 md:mb-16">
          <div className="aspect-video rounded-[24px] md:rounded-[32px] overflow-hidden bg-white/5 border border-white/10">
            <img 
               loading="lazy"
               decoding="async"
               src={project.image} 
              alt={project.title} 
               className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
         </div>

         {/* Call to Action */}
        <div className="text-center py-8 md:py-10 border-t border-white/10">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tighter mb-6">
            Want results like these?
           </h3>
          <button 
             onClick={() => onContact(`Inquiry about ${project.title}`)}
            className="w-full sm:w-auto px-8 py-4 bg-accent text-dark font-bold text-base md:text-lg rounded-full flex items-center justify-center gap-2 mx-auto hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,102,0.2)] hover:shadow-[0_0_30px_rgba(0,255,102,0.4)]"
           >
            <Zap size={20} fill="currentColor" />
            BOOK A FREE CALL
          </button>
        </div>
      </div>
    </motion.div>
  );
};
