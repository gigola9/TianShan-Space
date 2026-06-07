import { useState, useEffect } from 'react';
import { Languages, Menu, X, Rocket, Compass, Layers, Cpu, Users, PhoneCall } from 'lucide-react';
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
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'home', label: dictionary.navHome[language], icon: Compass },
    { id: 'services', label: dictionary.navServices[language], icon: Layers },
    { id: 'portfolio', label: dictionary.navPortfolio[language], icon: Cpu },
    { id: 'estimator', label: dictionary.navEstimator[language], icon: Rocket },
    { id: 'team', label: dictionary.navTeam[language], icon: Users },
  ];

  return (
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-artistic-border py-5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-7 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Sleek Minimalist Logo representing TianShan Space */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3.5 group text-left cursor-pointer focus:outline-none"
          id="nav-logo-btn"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-artistic-primary group-hover:scale-105 transition-all duration-500 shadow-md">
            <div className="absolute -inset-1 bg-artistic-primary/20 rounded-full blur group-hover:opacity-100 opacity-60 transition duration-700"></div>
          </div>
          <div>
            <span className="font-sans font-black tracking-widest text-[#F5F5F4] text-base block group-hover:text-artistic-primary transition-colors duration-300">
              TIANSHAN
            </span>
            <span className="font-mono text-[9px] tracking-[0.45em] text-[#F5F5F4]/60 block -mt-1 uppercase font-semibold group-hover:text-white transition-colors duration-300">
              SPACE
            </span>
          </div>
        </button>

        {/* Desktop Navigation with high contrast raw styling */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`transition-colors duration-300 relative focus:outline-none cursor-pointer ${
                  isActive
                    ? 'text-artistic-primary font-black'
                    : 'text-[#F5F5F4]/70 hover:text-artistic-primary'
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-artistic-primary" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side actions - flat high aesthetic language switches */}
        <div className="hidden md:flex items-center gap-6">
          {/* Dual-Language Toggle */}
          <div className="flex items-center border border-artistic-border rounded overflow-hidden">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-[9px] font-mono tracking-widest font-bold transition-all duration-300 focus:outline-none ${
                language === 'en'
                  ? 'bg-artistic-primary text-[#F5F5F4]'
                  : 'text-[#F5F5F4]/50 hover:text-[#F5F5F4]'
              }`}
              id="lang-toggle-en"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('ge')}
              className={`px-3 py-1 text-[9px] font-mono tracking-widest font-bold transition-all duration-300 focus:outline-none ${
                language === 'ge'
                  ? 'bg-artistic-primary text-[#F5F5F4]'
                  : 'text-[#F5F5F4]/50 hover:text-[#F5F5F4]'
              }`}
              id="lang-toggle-ge"
            >
              GE
            </button>
          </div>

          {/* Quick Consultation CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 cursor-pointer bg-transparent hover:bg-artistic-primary text-[#F5F5F4] hover:text-white text-[11px] font-semibold uppercase tracking-widest px-5 py-2 rounded-full border border-artistic-border hover:border-artistic-primary transition-all duration-300 shadow-md focus:outline-none"
            id="nav-consultation-btn"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-artistic-primary animate-pulse group-hover:bg-white"></div>
            {dictionary.getInTouch[language]}
          </button>
        </div>

        {/* Mobile menu and language toggle */}
        <div className="flex xl:hidden items-center gap-3 md:hidden">
          {/* Mobile Language Swap */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'ge' : 'en')}
            className="flex items-center gap-1 bg-slate-900/60 p-2 rounded-lg border border-white/5 text-slate-400 hover:text-white text-[10px] font-semibold focus:outline-none"
            id="mobile-lang-btn"
          >
            <Languages className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
            <span className="font-mono">{language === 'en' ? 'GE' : 'EN'}</span>
          </button>

          {/* Mobile Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-white border border-white/5 focus:outline-none"
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slideout */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navbar-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] py-6 px-6 animate-in slide-in-from-top duration-300"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 text-left focus:outline-none ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-sky-500/10 to-indigo-500/10 text-sky-300 border-l-2 border-sky-400 pl-3.5'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  <Icon className="w-4 h-4 text-sky-400" />
                  {item.label}
                </button>
              );
            })}
            <hr className="border-white/5 my-2" />
            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-xs font-bold tracking-wider py-4 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition-transform duration-100"
              id="mobile-nav-cta"
            >
              <PhoneCall className="w-4 h-4" />
              {dictionary.getInTouch[language]}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
