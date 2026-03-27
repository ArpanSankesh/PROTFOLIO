import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data.js";

export const WorkSection = ({ setSelectedProject }) => {
  return (
    <section id="work" className="py-10 md:py-16 px-4 md:px-6 bg-darker">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 md:mb-6">
                <div 
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110 flex items-center justify-center relative"
                  style={{ backgroundColor: project.color }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent_70%)]" />
                  <div className="text-white/10 font-black text-9xl select-none tracking-tighter">
                    {project.title[0]}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, white, transparent)` }}
                />
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-white/40">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
