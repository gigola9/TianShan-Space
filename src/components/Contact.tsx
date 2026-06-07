import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Users, ExternalLink, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { dictionary } from '../data';

interface ContactProps {
  language: Language;
  prefilledMessage: string;
}

export default function Contact({ language, prefilledMessage }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync estimate details into form message
  useEffect(() => {
    if (prefilledMessage) {
      setFormData(prev => ({
        ...prev,
        message: prefilledMessage,
      }));
      // Smoothly focus or scroll to message to indicate success
      const msgArea = document.getElementById('contact-message-input');
      if (msgArea) {
        msgArea.classList.add('ring-2', 'ring-artistic-primary');
        setTimeout(() => msgArea.classList.remove('ring-2', 'ring-artistic-primary'), 2500);
      }
    }
  }, [prefilledMessage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    
    // Simulate high-fidelity network transmit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Auto dismiss success screen after 8s
      setTimeout(() => setIsSuccess(false), 8000);
    }, 1800);
  };

  const teamMembers = [
    {
      name: 'Irakli',
      role: { en: 'Co-Founder & UI/UX Architect', ge: 'თანადამფუძნებელი და UI/UX არქიტექტორი' },
      bio: { en: 'Crafts bespoke interactive interfaces with pixel perfect graphics and fluid animations.', ge: 'ქმნის დახვეწილ ურთიერთქმედების ინტერფეისებს, პიქსელების სიზუსტით გამართულ დიზაინ სისტემებს.' },
    },
    {
      name: 'Saba',
      role: { en: 'Co-Founder & Principal Engineer', ge: 'თანადამფუძნებელი და წამყვანი ინჟინერი' },
      bio: { en: 'Specializes in low-latency systems databases, cloud infrastructures, and high-safety code bases.', ge: 'აქცენტს აკეთებს მაღალსიჩქარიან მონაცემთა ბაზებზე, სერვერულ უსაფრთხოებასა და ოპტიმალურ კოდზე.' },
    }
  ];

  return (
    <section id="team" className="relative py-28 bg-[#0A0A0A] scroll-mt-20">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full font-sans">
        
        {/* Founders / Team Subsection */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16" id="team-header-container">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-artistic-primary font-black block mb-4">
              {dictionary.navTeam[language]}
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#F5F5F4] uppercase tracking-wider mb-4">
              {dictionary.teamHeader[language]}
            </h2>
            <div className="h-[2px] w-16 bg-artistic-primary mx-auto mb-6"></div>
            <p className="text-[#F5F5F4]/65 text-sm sm:text-base leading-relaxed">
              {dictionary.teamSubheader[language]}
            </p>
          </div>

          {/* Team Grid with raw block edges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" id="team-cards-grid">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group relative bg-[#121212] border border-artistic-border p-6 sm:p-8 rounded-none hover:border-artistic-primary transition-all duration-300"
                id={`team-member-${member.name.toLowerCase()}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {/* Monochrome rectangular layout badge */}
                  <div className="w-11 h-11 bg-black border border-artistic-border flex items-center justify-center shrink-0">
                    <span className="font-mono text-xs font-black text-white">{member.name.substring(0, 2).toUpperCase()}</span>
                  </div>
                  <div>
                    <h3 className="text-white text-base font-black uppercase tracking-wide">{member.name}</h3>
                    <p className="text-artistic-primary text-[10px] font-mono tracking-wider uppercase font-black">{member.role[language]}</p>
                  </div>
                </div>
                <p className="text-[#F5F5F4]/60 text-xs sm:text-sm leading-relaxed font-normal">
                  {member.bio[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-artistic-border my-24" id="contact" />

        {/* Contact form and business card section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header-container">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-artistic-primary font-black block mb-4">
              {dictionary.navContact[language]}
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#F5F5F4] uppercase tracking-wider mb-4">
              {dictionary.contactHeader[language]}
            </h2>
            <div className="h-[2px] w-16 bg-artistic-primary mx-auto mb-6"></div>
            <p className="text-[#F5F5F4]/65 text-sm sm:text-base leading-relaxed">
              {dictionary.contactSubheader[language]}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto" id="contact-form-layout">
            
            {/* Real Channels Business Card */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="bg-[#121212] border border-artistic-border p-6 rounded-none relative overflow-hidden" id="contact-details-box">
                <h3 className="text-white text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-artistic-primary"></span>
                  {language === 'en' ? 'Direct Touch' : 'პირდაპირი კონტაქტი'}
                </h3>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-none bg-black border border-artistic-border flex items-center justify-center text-artistic-primary shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono tracking-widest text-[#F5F5F4]/40 font-bold">{dictionary.emailAddress[language]}</p>
                      <a href="mailto:info@tianshanspace.ge" className="text-xs sm:text-sm text-[#F5F5F4] hover:text-artistic-primary font-semibold transition-colors">
                        info@tianshanspace.ge
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-none bg-black border border-artistic-border flex items-center justify-center text-artistic-primary shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono tracking-widest text-[#F5F5F4]/40 font-bold">{dictionary.phoneNumber[language]}</p>
                      <a href="tel:+995599000000" className="text-xs sm:text-sm text-[#F5F5F4] hover:text-artistic-primary font-semibold transition-colors">
                        +995 599 000 000
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-none bg-black border border-artistic-border flex items-center justify-center text-artistic-primary shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-mono tracking-widest text-[#F5F5F4]/40 font-bold">{dictionary.officeLocation[language]}</p>
                      <p className="text-xs sm:text-sm text-[#F5F5F4]/80 font-bold uppercase tracking-wider font-mono">
                        Tbilisi, Georgia
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Instant Messenger buttons */}
              <div className="bg-[#121212] border border-artistic-border p-6 rounded-none" id="social-connectors-box">
                <h3 className="text-white text-[10px] font-black uppercase tracking-widest mb-4">{dictionary.liveChat[language]}</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/995599000000"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 bg-black hover:bg-emerald-500/10 border border-artistic-border hover:border-emerald-500/35 text-emerald-400 rounded-none p-3 text-[10px] uppercase font-mono font-black tracking-wider transition-all text-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                  <a
                    href="mailto:info@tianshanspace.ge"
                    className="flex items-center justify-center gap-2.5 bg-black hover:bg-artistic-primary/10 border border-artistic-border hover:border-artistic-primary text-artistic-primary rounded-none p-3 text-[10px] uppercase font-mono font-black tracking-wider transition-all text-center"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-8 bg-[#121212] border border-artistic-border rounded-none p-6 sm:p-8">
              
              {isSuccess ? (
                <div className="text-center py-12 px-4 animate-in zoom-in-95 duration-500" id="contact-success-screen">
                  <div className="w-12 h-12 bg-black border border-emerald-400/30 rounded-none flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-sans font-black text-white uppercase tracking-wider mb-4">
                    {language === 'en' ? 'Transmission Successful!' : 'მოთხოვნა მიღებულია!'}
                  </h3>
                  <p className="text-[#F5F5F4]/60 text-sm leading-relaxed max-w-md mx-auto font-medium">
                    {dictionary.successMsg[language]}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-2.5 rounded-none bg-black border border-artistic-border hover:border-[#F5F5F4]/40 text-[#F5F5F4]/80 hover:text-white text-[11px] font-bold uppercase tracking-widest transition duration-300 focus:outline-none cursor-pointer"
                  >
                    {language === 'en' ? 'Send another inquiry' : 'ახალი შეტყობინების გაგზავნა'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" id="consultation-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[9px] font-mono font-black uppercase tracking-widest text-[#F5F5F4]/55 mb-2">
                        {dictionary.fullName[language]} <span className="text-artistic-primary">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black border border-artistic-border rounded-none px-4 py-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-artistic-primary transition-all font-semibold"
                        placeholder="e.g. Giorgi Kobakhidze"
                        id="contact-name-input"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-mono font-black uppercase tracking-widest text-[#F5F5F4]/55 mb-2">
                        {dictionary.emailAddress[language]} <span className="text-artistic-primary">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black border border-artistic-border rounded-none px-4 py-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-artistic-primary transition-all font-semibold"
                        placeholder="e.g. giorgi@gmail.com"
                        id="contact-email-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-black uppercase tracking-widest text-[#F5F5F4]/55 mb-2">
                      {dictionary.phoneNumber[language]}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-artistic-border rounded-none px-4 py-3.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-artistic-primary transition-all font-semibold"
                      placeholder="e.g. +995 599 00 00 00"
                      id="contact-phone-input"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono font-black uppercase tracking-widest text-[#F5F5F4]/55 mb-2">
                      {dictionary.projectDetails[language]}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full bg-black border border-artistic-border rounded-none p-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-artistic-primary transition-all font-sans font-medium"
                      placeholder="Describe your ideal web dashboard, mobile system, features, integrations..."
                      id="contact-message-input"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer bg-artistic-primary text-white hover:bg-[#2040A0] font-black text-[11px] uppercase tracking-widest py-4.5 rounded-none transition duration-300 flex items-center justify-center gap-2 focus:outline-none disabled:opacity-50"
                    id="contact-submit-btn"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-bounce' : ''}`} />
                    <span>
                      {isSubmitting ? dictionary.sending[language] : dictionary.submitBtn[language]}
                    </span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
