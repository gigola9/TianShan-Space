import { useState } from 'react';
import { ExternalLink, Filter, Cpu, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language, Project } from '../types';
import { projects, dictionary } from '../data';

interface PortfolioProps {
  language: Language;
}

export default function Portfolio({ language }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: dictionary.portfolioAll[language] },
    { id: 'web', label: dictionary.portfolioWeb[language] },
    { id: 'mobile', label: dictionary.portfolioMobile[language] },
    { id: 'enterprise', label: dictionary.portfolioEnterprise[language] },
    { id: 'ux-ui', label: dictionary.portfolioUXUI[language] },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 bg-[#0A0A0A] border-b border-artistic-border scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16"
          id="portfolio-header-container"
        >
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-artistic-primary font-black block mb-4">
              {dictionary.navPortfolio[language]}
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#F5F5F4] uppercase tracking-wider mb-4">
              {dictionary.portfolioHeader[language]}
            </h2>
            <p className="text-[#F5F5F4]/60 text-sm sm:text-base leading-relaxed">
              {dictionary.portfolioSubheader[language]}
            </p>
          </div>

          {/* Filtering Controls using flat sharp coordinates */}
          <div className="flex flex-wrap items-center gap-1 border border-artistic-border bg-black/40 p-1.5 rounded-none backdrop-blur-md" id="portfolio-category-toggles">
            {categories.map(cat => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-none text-[10px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-artistic-primary text-white font-black'
                      : 'text-[#F5F5F4]/60 hover:text-white hover:bg-white/5'
                  }`}
                  id={`filter-tab-${cat.id}`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Showcase Grid with crisp sharp borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[480px]" id="portfolio-grid-container">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                key={project.id}
                className="group relative bg-[#121212] rounded-none border border-artistic-border hover:border-artistic-primary shadow-xl overflow-hidden transition-all duration-500 flex flex-col h-full"
                id={`portfolio-item-${project.id}`}
              >
                {/* Card Image Area with custom absolute tag */}
                <div className="relative h-56 overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 opacity-80 group-hover:opacity-100"
                  />
                  
                  {/* Visual Category Badge on actual card image */}
                  <div className="absolute top-4 left-4 bg-black/95 border border-artistic-border px-3 py-1 rounded-none">
                    <span className="font-mono text-[9px] tracking-widest text-[#F5F5F4] font-extrabold uppercase">
                      {project.categoryLabel[language]}
                    </span>
                  </div>

                  {/* Performance metric badge in the top-right */}
                  {project.metrics && (
                    <div className="absolute top-4 right-4 bg-black border border-artistic-primary/40 px-3 py-1 rounded-none shadow-2xl flex items-center gap-1.5">
                      <span className="w-1 to-1.5 h-1.5 bg-artistic-primary rounded-full animate-pulse" />
                      <span className="font-mono text-[10px] text-[#F5F5F4] font-bold uppercase tracking-wider">
                        {project.metrics[language]}
                      </span>
                    </div>
                  )}

                  {/* Tech Layer Overlap on Hover */}
                  <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] uppercase tracking-widest text-artistic-primary font-mono font-black mb-3 block">
                      {dictionary.techStackLabel[language]}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono text-[#F5F5F4] bg-[#121212] border border-artistic-border px-2 py-0.5 rounded-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[16px] font-sans font-black text-[#F5F5F4] uppercase tracking-wide mb-2.5 group-hover:text-artistic-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#F5F5F4]/60 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {project.description[language]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-artistic-border flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold uppercase tracking-widest text-artistic-primary hover:text-white flex items-center gap-2 group/btn cursor-pointer transition-colors focus:outline-none"
                      id={`preview-action-${project.id}`}
                    >
                      <span>{dictionary.viewProject[language]}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <span className="font-mono text-[9px] text-artistic-muted">
                      ID // 0{project.id}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Project Inspector Lightbox/Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              id="portfolio-modal-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-[#121212] border border-artistic-border rounded-none w-full max-w-2xl overflow-hidden shadow-2xl relative"
              >
                
                {/* Close Button top corner */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-none bg-black border border-artistic-border text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                  id="close-modal-btn"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="relative h-64 sm:h-80 bg-black">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="font-mono text-[9px] tracking-widest text-white font-extrabold uppercase bg-artistic-primary border border-artistic-border px-3 py-1 rounded-none mb-3 inline-block">
                      {selectedProject.categoryLabel[language]}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-black text-white uppercase tracking-wider mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body Info */}
                <div className="p-6 sm:p-8">
                  <h4 className="text-white text-[11px] font-black tracking-widest uppercase mb-3">Project Architecture & Goal</h4>
                  <p className="text-[#F5F5F4]/70 text-sm leading-relaxed mb-6">
                    {selectedProject.description[language]} This platform represents modern cloud native code engineering designed by TianShan Space. It features reactive state management, customized UI animations, and automated backend routing.
                  </p>

                  {selectedProject.metrics && (
                    <div className="bg-black border border-artistic-primary/30 rounded-none p-4 mb-6 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-artistic-primary shrink-0" />
                      <div>
                        <p className="text-[10px] text-[#F5F5F4]/50 font-bold uppercase tracking-wider">Engineering Output Achieved</p>
                        <p className="text-sm font-black text-white uppercase tracking-wide">{selectedProject.metrics[language]}</p>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-white text-[11px] font-black tracking-widest uppercase mb-3">Deployed Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono text-white bg-black border border-artistic-border px-2.5 py-1 rounded-none font-semibold uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-artistic-border flex gap-3">
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        // Scroll to contact form
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 bg-artistic-primary text-white text-[11px] font-bold uppercase tracking-widest py-3.5 rounded-none transition duration-300 focus:outline-none cursor-pointer"
                      id="modal-request-similar"
                    >
                      {language === 'en' ? 'Build Similar Product' : 'მსგავსი პროექტის შეკვეთა'}
                    </button>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 border border-artistic-border bg-black text-[#F5F5F4]/80 hover:text-white text-[11px] font-bold uppercase tracking-widest rounded-none transition cursor-pointer focus:outline-none"
                      id="modal-close"
                    >
                      {language === 'en' ? 'Dismiss' : 'დახურვა'}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
