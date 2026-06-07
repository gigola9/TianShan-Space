import { ArrowRight, Sparkles, Code2, Heart, Award, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { dictionary } from '../data';

interface HeroProps {
  language: Language;
  onExplorePortfolio: () => void;
  onExploreEstimator: () => void;
}

export default function Hero({ language, onExplorePortfolio, onExploreEstimator }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Structural layout gridlines for the Artistic Flair aesthetic */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Fine vertical and horizontal coordinate rules */}
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-artistic-border hidden md:block"></div>
        <div className="absolute left-2/3 top-0 bottom-0 w-[1px] bg-artistic-border hidden md:block"></div>
        <div className="absolute left-0 right-0 top-1/3 h-[1px] bg-artistic-border"></div>
        <div className="absolute left-0 right-0 top-2/3 h-[1px] bg-artistic-border"></div>
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,245,244,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,245,244,0.01)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-8" id="hero-intro-container">
          {/* Active status coordinate badge */}
          <div className="inline-flex items-center gap-3 border border-artistic-border py-1.5 px-4 rounded mb-8 bg-black/40">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-artistic-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-artistic-primary"></span>
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#F5F5F4]/70 uppercase font-bold">
              {dictionary.activeBadge[language]}
            </span>
            <span className="text-[9px] text-[#F5F5F4]/30 font-mono">|</span>
            <span className="font-mono text-[9px] text-artistic-primary uppercase tracking-widest font-black">Tbilisi, Georgia</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight text-[#F5F5F4] mb-6 leading-[1.08]">
            <span className="block text-[#F5F5F4]/90">{dictionary.heroTitleTop[language]}</span>
            <span className="block mt-2 text-artistic-primary uppercase font-extrabold tracking-wide">
              {dictionary.heroTitleHighlight[language]}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#F5F5F4]/60 leading-relaxed max-w-2xl mb-10 font-normal">
            {dictionary.heroSubtitle[language]}
          </p>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Project Estimator button */}
            <button
              onClick={onExploreEstimator}
              className="flex items-center justify-center gap-3 bg-artistic-primary hover:bg-[#2040A0] text-white font-black text-[11px] uppercase tracking-widest px-8 py-4 rounded shadow-xl shadow-artistic-primary/10 transition-all duration-300 cursor-pointer focus:outline-none"
              id="hero-estimator-trigger"
            >
              <Sparkles className="w-4 h-4 text-white/85" />
              {dictionary.heroCTAEstimate[language]}
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Explore Portfolio trigger */}
            <button
              onClick={onExplorePortfolio}
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-[#F5F5F4] font-black text-[11px] uppercase tracking-widest px-8 py-4 rounded border border-artistic-border hover:border-[#F5F5F4]/30 transition-all duration-300 cursor-pointer focus:outline-none"
              id="hero-portfolio-trigger"
            >
              {dictionary.navPortfolio[language]}
            </button>
          </div>
        </div>

        {/* Visual Architectural Geometric Sculpture Area */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-8 lg:pt-0" id="hero-graphic-panel">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
            {/* Outer wireframe container */}
            <div className="absolute inset-0 border border-artistic-border rounded p-4 flex items-center justify-center bg-black/20 backdrop-blur-3xl">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-artistic-primary"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-artistic-primary"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-artistic-primary"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-artistic-primary"></div>
              
              {/* Inner Coordinate crosshairs */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] border-l border-dashed border-artistic-border"></div>
              <div className="absolute left-0 right-0 top-1/2 h-[1px] border-t border-dashed border-artistic-border"></div>
            </div>

            {/* Main high quality mountain peaks vector representation of TianShan peaks */}
            <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                {/* Orbital path coordinates */}
                <circle cx="50" cy="50" r="42" className="stroke-artistic-border stroke-[1]" />
                <circle cx="50" cy="50" r="32" className="stroke-artistic-border stroke-[1]" strokeDasharray="4 4" />
                
                {/* Back peaks - blue translucent wires */}
                <path d="M15 75 L38 35 L58 60 L80 32 L92 75 Z" className="stroke-artistic-primary/40 stroke-[1.5] fill-artistic-primary/5" />
                
                {/* Main front peaks - elegant white wires */}
                <path d="M8 75 L30 42 L48 62 L68 25 L88 75 Z" className="stroke-[#F5F5F4] stroke-[2]" />
                
                {/* Vertex coordinates highlight */}
                <circle cx="30" cy="42" r="3" className="fill-[#F5F5F4] stroke-[15] stroke-[#F5F5F4]/10 animate-pulse" />
                <circle cx="68" cy="25" r="3" className="fill-artistic-primary stroke-[15] stroke-artistic-primary/10 animate-pulse" />
                <circle cx="48" cy="62" r="2" className="fill-artistic-primary" />
                <circle cx="80" cy="32" r="2" className="fill-[#F5F5F4]/60" />

                {/* Celestial coordinate */}
                <circle cx="50" cy="18" r="1.5" className="fill-white" />
              </svg>
            </div>

            {/* High end floating context badges with clean layout formatting */}
            <div className="absolute top-6 -right-2 bg-[#0A0A0A] border border-artistic-border px-3 py-1.5 shadow-xl">
              <div className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-artistic-primary" />
                <span className="text-[9px] font-mono font-black tracking-widest text-[#F5F5F4] uppercase">SYS_ENG // OK</span>
              </div>
            </div>

            <div className="absolute bottom-6 -left-4 bg-[#0A0A0A] border border-artistic-border px-3 py-1.5 shadow-xl">
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-artistic-primary" />
                <span className="text-[9px] font-mono font-black tracking-widest text-[#F5F5F4] uppercase">PREMIUM_BUILD_SEC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
