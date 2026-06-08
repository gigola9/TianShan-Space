import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../types';
import { dictionary } from '../data';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  activeSection: string;
}

export default function Header({ language, setLanguage, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'home', label: dictionary.navHome[language] },
    { id: 'services', label: dictionary.navServices[language] },
    { id: 'portfolio', label: dictionary.navPortfolio[language] },
    { id: 'estimator', label: dictionary.navEstimator[language] },
    { id: 'team', label: dictionary.navTeam[language] },
  ];

  return (
    <header
      id="header-navigation"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 pointer-events-none transition-all duration-500"
    >
      <div
        className={`w-full max-w-5xl pointer-events-auto rounded-full border transition-all duration-500 flex items-center justify-between px-6 py-3 md:py-3.5 ${
          isScrolled
            ? 'bg-[#0E0E0E]/80 backdrop-blur-xl border-[#2A52BE]/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
            : 'bg-[#121212]/40 backdrop-blur-md border-white/[0.06]'
        }`}
      >
        {/* Brand Logo representing TianShan Space */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-0.5 group text-left cursor-pointer focus:outline-none"
          id="nav-logo-btn"
        >
          <span className="font-sans font-extrabold tracking-tight text-[#F5F5F4] text-[15px] sm:text-[17px] group-hover:text-artistic-primary transition-colors duration-300">
            TianShan Space
          </span>
          <span className="text-artistic-primary font-sans font-black text-[15px] sm:text-[17px] animate-pulse">.</span>
        </button>

        {/* Desktop Navigation with high contrast elegant styling */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-medium tracking-tight">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-all duration-300 relative py-1 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-[#F5F5F4] font-semibold'
                    : 'text-[#F5F5F4]/60 hover:text-[#F5F5F4]'
                }`}
                id={`nav-item-${item.id}`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-artistic-primary rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side actions - language toggler & elegant Let's talk pill */}
        <div className="hidden md:flex items-center gap-4">
          {/* Compact, ultra-clean Language Toggle */}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'ge' : 'en')}
            className="text-[10px] font-mono font-bold tracking-wider text-[#F5F5F4]/40 hover:text-[#F5F5F4] transition-colors uppercase py-1 px-2 border border-white/[0.05] hover:border-white/15 rounded-full focus:outline-none cursor-pointer"
            id="lang-toggle-quick"
          >
            {language === 'en' ? 'GE' : 'EN'}
          </button>

          {/* Let's talk button with a beautiful pulse effect and indicator */}
          <button
            onClick={() => scrollTo('contact')}
            className="group flex items-center gap-2 bg-[#2D4AA6] hover:bg-[#203a8c] text-white text-[12.5px] font-medium py-2 px-5 sm:px-6 rounded-full transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-black/50 focus:outline-none cursor-pointer active:scale-[0.98]"
            id="nav-consultation-btn"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse shrink-0" />
            <span className="font-sans font-medium tracking-tight">{language === 'en' ? "Let's talk" : "კონტაქტი"}</span>
            <span className="text-white/60 group-hover:text-white transition-colors duration-200 ml-0.5 select-none font-sans font-medium">↗</span>
          </button>
        </div>

        {/* Mobile menu and code control */}
        <div className="flex md:hidden items-center gap-2.5">
          {/* Mobile Language Swap */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ge' : 'en')}
            className="text-[10px] font-mono font-bold text-[#F5F5F4]/50 hover:text-white py-1 px-2.5 border border-white/10 rounded-full focus:outline-none cursor-pointer"
            id="mobile-lang-btn"
          >
            {language === 'en' ? 'GE' : 'EN'}
          </button>

          {/* Mobile Hamburguer Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 focus:outline-none cursor-pointer"
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with matched floating rounded-2xl look */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navbar-menu"
          className="md:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-[#0E0E0E]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.85)] rounded-2xl py-5 px-6 animate-in slide-in-from-top-4 duration-300 pointer-events-auto"
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 text-left focus:outline-none cursor-pointer ${
                    isActive
                      ? 'bg-artistic-primary/10 text-artistic-primary border-r-2 border-artistic-primary'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
            <hr className="border-white/5 my-1" />
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center justify-center gap-2.5 w-full bg-[#2D4AA6] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-full shadow-lg shadow-black/20 active:scale-[0.98] transition-transform duration-100 cursor-pointer"
              id="mobile-nav-cta"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981] animate-pulse" />
              <span>{language === 'en' ? "Let's talk ↗" : "კონტაქტი ↗"}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
