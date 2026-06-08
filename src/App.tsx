import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProjectEstimator from './components/ProjectEstimator';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Language } from './types';
import { testimonials } from './data';
import { Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [language, setLanguage] = useState<Language>('ge'); // Default to Georgian as they are based in Georgia, but easily toggleable
  const [activeSection, setActiveSection] = useState<string>('home');
  const [estimatorPrefill, setEstimatorPrefill] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [isBlogArchiveOpen, setIsBlogArchiveOpen] = useState<boolean>(false);

  // Handle intersection/scroll mapping to highlight navbar tabs dynamically and track progress
  useEffect(() => {
    const handleScroll = () => {
      // If blog archive page is open, keep standard header focus on "blog"
      if (isBlogArchiveOpen) {
        setActiveSection('blog');
        return;
      }

      // 1. Navbar section mapping
      const sections = ['home', 'services', 'portfolio', 'estimator', 'team', 'blog'];
      const scrollPosition = window.scrollY + 120; // safe threshold offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // 2. Scroll percentage tracking
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBlogArchiveOpen]);

  const handleEstimatorDraftSubmit = (draft: string) => {
    setEstimatorPrefill(draft);
    
    // Smooth scroll down to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleNavItemClick = (id: string) => {
    setSelectedBlogId(null);
    if (id === 'blog') {
      setIsBlogArchiveOpen(true);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setActiveSection('blog');
    } else {
      if (isBlogArchiveOpen) {
        setIsBlogArchiveOpen(false);
        setActiveSection(id);
        // Let component re-mount/render elements on home page first, then scroll
        setTimeout(() => {
          scrollToSection(id);
        }, 350);
      } else {
        scrollToSection(id);
      }
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 selection:bg-sky-500/20 selection:text-sky-300 font-sans antialiased overflow-x-hidden">
      
      {/* Sleek Horizontal Scroll Progress Bar */}
      {!isBlogArchiveOpen && (
        <div 
          id="scroll-progress-bar"
          className="fixed top-0 left-0 h-[3px] bg-artistic-primary z-[9999] transition-all duration-100 ease-out shadow-[0_1px_8px_rgba(42,82,190,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      )}

      {/* Absolute top grid background texture */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none z-0" />

      {/* Header element */}
      <Header
        language={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        onNavItemClick={handleNavItemClick}
      />

      {/* Main layout contents */}
      <main className="relative z-10 w-full" id="main-content-area">
        <AnimatePresence mode="wait">
          {!isBlogArchiveOpen ? (
            <motion.div
              key="main-landing-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* HERO SECTION */}
              <Hero
                language={language}
                onExplorePortfolio={() => scrollToSection('portfolio')}
                onExploreEstimator={() => scrollToSection('estimator')}
              />

              {/* SERVICES SECTION */}
              <Services language={language} />

              {/* PORTFOLIO SHOWCASE SECTION */}
              <Portfolio language={language} />

              {/* PROJECT ESTIMATOR / PRICING SECTION */}
              <ProjectEstimator
                language={language}
                onEstimatorSubmit={handleEstimatorDraftSubmit}
              />

              {/* TESTIMONIAL FEATURE HIGHLIGHT */}
              <section className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.02)_0%,transparent_50%50%)]" />
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                  <div className="text-center mb-12">
                    <Quote className="w-8 h-8 text-sky-400 mx-auto opacity-40 animate-pulse mb-3" />
                    <h3 className="text-xl sm:text-2xl font-sans tracking-tight font-extrabold text-white">
                      {language === 'en' ? 'Trusted by Dynamic Founders' : 'დამფუძნებლები ჩვენზე'}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((test) => (
                      <div
                        key={test.id}
                        className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
                        id={`testimonial-${test.id}`}
                      >
                        <p className="text-xs sm:text-sm text-slate-350 leading-relaxed italic mb-6">
                          "{test.text[language]}"
                        </p>
                        <div className="flex items-center gap-4">
                          <img
                            src={test.avatar}
                            alt={test.name[language]}
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 rounded-full object-cover border border-white/10"
                          />
                          <div>
                            <h4 className="text-xs font-bold text-white">{test.name[language]}</h4>
                            <p className="text-[10px] text-slate-500 font-medium">
                              {test.role[language]} @ <span className="text-sky-400 font-semibold">{test.company}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* FOUNDERS & CONTACT BRIEF DISCOVERY FORM */}
              <Contact
                language={language}
                prefilledMessage={estimatorPrefill}
              />

              {/* CURATED BLOG landing component (limited to 3 items with category filtering on-the-fly) */}
              <Blog
                language={language}
                selectedBlogId={selectedBlogId}
                onSelectBlog={setSelectedBlogId}
                onContactClick={() => scrollToSection('contact')}
                isArchiveView={false}
                onOpenArchive={() => {
                  setIsBlogArchiveOpen(true);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="dedicated-blog-archive-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-24 min-h-screen"
            >
              <Blog
                language={language}
                selectedBlogId={selectedBlogId}
                onSelectBlog={setSelectedBlogId}
                onContactClick={() => {
                  setIsBlogArchiveOpen(false);
                  setTimeout(() => scrollToSection('contact'), 350);
                }}
                isArchiveView={true}
                onCloseArchive={() => {
                  setIsBlogArchiveOpen(false);
                  setTimeout(() => {
                    const el = document.getElementById('blog');
                    if (el) {
                      el.scrollIntoView({ behavior: 'instant' });
                    }
                  }, 350);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER SECTION */}
      <Footer language={language} />

    </div>
  );
}
