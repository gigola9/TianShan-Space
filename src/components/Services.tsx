import { Globe, Smartphone, Cpu, Paintbrush, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { services, dictionary } from '../data';

interface ServicesProps {
  language: Language;
}

export default function Services({ language }: ServicesProps) {
  // Mapping dynamic string tags to standard Lucide React components with Artistic Flair theme rules
  const renderIcon = (name: string) => {
    const props = { className: 'w-5 h-5 text-artistic-primary group-hover:scale-105 transition-transform duration-500' };
    switch (name) {
      case 'Globe':
        return <Globe {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Figma':
      default:
        return <Paintbrush {...props} />;
    }
  };

  return (
    <section
      id="services"
      className="relative py-28 bg-[#0A0A0A] border-y border-artistic-border scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
          id="services-header-container"
        >
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-artistic-primary font-black block mb-4">
            {dictionary.servicesHeader[language]}
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#F5F5F4] uppercase tracking-wider mb-5">
            {language === 'en' ? 'Core Engineering Frameworks' : 'რას გთავაზობთ?'}
          </h2>
          <div className="h-[2px] w-16 bg-artistic-primary mx-auto mb-6"></div>
          <p className="text-[#F5F5F4]/60 text-sm sm:text-base leading-relaxed">
            {dictionary.servicesSubheader[language]}
          </p>
        </motion.div>

        {/* Services Grid with beautiful sleek, premium cards instead of brutalist shapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid-list">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="group relative bg-[#121212]/85 hover:bg-[#161616] border border-white/[0.06] hover:border-artistic-primary/45 rounded-2xl p-8 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] hover:-translate-y-1 block overflow-hidden"
              id={`service-card-${service.id}`}
            >
              {/* Soft radial glow flare on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(42,82,190,0.08),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />
              
              {/* Linear shine highlight on the top edge */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                {/* Premium circular icon dock with warm ambient color */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-artistic-primary/8 border border-artistic-primary/15 group-hover:border-artistic-primary/40 group-hover:bg-artistic-primary/15 transition-all duration-500 shrink-0 shadow-lg shadow-black/40">
                  {renderIcon(service.iconName)}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-sans font-black text-[#F5F5F4] mb-3 group-hover:text-artistic-primary transition-colors duration-300 uppercase tracking-wider">
                    {service.title[language]}
                  </h3>
                  <p className="text-[#F5F5F4]/60 text-[13.5px] leading-relaxed mb-6 font-normal">
                    {service.description[language]}
                  </p>

                  {/* Bullet Tech List with refined checkmarks */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/[0.04]">
                    {service.features[language].map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-[#F5F5F4]/80">
                        <Check className="w-3.5 h-3.5 text-artistic-primary/70 shrink-0" />
                        <span className="font-mono tracking-wide text-[10px] text-[#F5F5F4]/75 capitalize">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
