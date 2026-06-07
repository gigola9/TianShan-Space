import { Globe, Smartphone, Cpu, Paintbrush, Check } from 'lucide-react';
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
        <div className="text-center max-w-3xl mx-auto mb-20" id="services-header-container">
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
        </div>

        {/* Services Grid with beautiful sharp borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid-list">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#121212] border border-artistic-border rounded-none p-8 hover:border-artistic-primary transition-all duration-500 hover:shadow-2xl hover:shadow-black block"
              id={`service-card-${service.id}`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                {/* Minimalist icon enclosure with strict coordinates */}
                <div className="flex items-center justify-center w-12 h-12 rounded-none bg-black border border-artistic-border group-hover:border-artistic-primary transition-all duration-500 shrink-0">
                  {renderIcon(service.iconName)}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-sans font-extrabold text-[#F5F5F4] mb-3 group-hover:text-artistic-primary transition-colors duration-300 uppercase tracking-wide">
                    {service.title[language]}
                  </h3>
                  <p className="text-[#F5F5F4]/60 text-sm leading-relaxed mb-6 font-normal">
                    {service.description[language]}
                  </p>

                  {/* Bullet Tech List */}
                  <ul className="grid grid-cols-1 gap-2">
                    {service.features[language].map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-[#F5F5F4]/80">
                        <div className="w-1.5 h-1.5 bg-artistic-primary shrink-0"></div>
                        <span className="font-semibold uppercase tracking-wider text-[10px] text-[#F5F5F4]/70">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
