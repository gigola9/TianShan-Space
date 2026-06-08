import { Language } from '../types';
import { dictionary } from '../data';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-black border-t border-artistic-border py-12 relative overflow-hidden" id="main-footer">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 font-sans">
        
        {/* Brand Information */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-3">
            <svg viewBox="0 0 100 100" className="w-5 h-5 fill-none stroke-artistic-primary stroke-[8]">
              <path d="M15 80 L50 25 L85 80 Z" strokeLinejoin="miter" />
            </svg>
            <span className="font-sans font-black tracking-widest text-[#F5F5F4] text-xs">
              TIANSHAN SPACE
            </span>
          </div>
          <p className="text-[10px] text-artistic-muted font-mono tracking-wide max-w-sm uppercase">
            {language === 'en'
              ? 'Premier design & engineering studio specializing in high-speed digital products.'
              : 'პროგრამული უზრუნველყოფის სტუდია — უმაღლესი სიჩქარის ციფრული გადაწყვეტილებები.'}
          </p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <button
            onClick={() => scrollToSection('home')}
            className="text-[10px] text-artistic-muted hover:text-artistic-primary transition-colors cursor-pointer focus:outline-none font-mono uppercase tracking-widest font-black"
          >
            {dictionary.navHome[language]}
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-[10px] text-artistic-muted hover:text-artistic-primary transition-colors cursor-pointer focus:outline-none font-mono uppercase tracking-widest font-black"
          >
            {dictionary.navServices[language]}
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-[10px] text-artistic-muted hover:text-artistic-primary transition-colors cursor-pointer focus:outline-none font-mono uppercase tracking-widest font-black"
          >
            {dictionary.navPortfolio[language]}
          </button>
          <button
            onClick={() => scrollToSection('estimator')}
            className="text-[10px] text-artistic-muted hover:text-artistic-primary transition-colors cursor-pointer focus:outline-none font-mono uppercase tracking-widest font-black"
          >
            {dictionary.navEstimator[language]}
          </button>
          <button
            onClick={() => scrollToSection('blog')}
            className="text-[10px] text-artistic-muted hover:text-artistic-primary transition-colors cursor-pointer focus:outline-none font-mono uppercase tracking-widest font-black"
          >
            {dictionary.navBlog[language]}
          </button>
        </div>

        {/* Copyrights */}
        <div className="text-center md:text-right">
          <p className="text-[10px] text-[#F5F5F4]/70 font-mono uppercase tracking-wider">
            &copy; {currentYear} TianShan Space.
          </p>
          <p className="text-[9px] text-[#F5F5F4]/40 font-mono mt-0.5 tracking-wider uppercase font-semibold">
            All rights reserved // Tbilisi, Georgia
          </p>
        </div>

      </div>
    </footer>
  );
}
