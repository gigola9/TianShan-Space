import { Service, Project, Testimonial, Metric, Language } from './types';

export const dictionary: Record<string, Record<Language, string>> = {
  // Navigation
  navHome: { en: 'Home', ge: 'მთავარი' },
  navServices: { en: 'Services', ge: 'სერვისები' },
  navPortfolio: { en: 'Portfolio', ge: 'პორტფოლიო' },
  navEstimator: { en: 'Estimator', ge: 'კალკულატორი' },
  navTeam: { en: 'Team', ge: 'გუნდი' },
  navContact: { en: 'Contact', ge: 'კონტაქტი' },
  getInTouch: { en: 'Get in Touch', ge: 'უფასო კონსულტაცია' },

  // Hero Section
  heroTitleTop: { en: 'Turning Ideas Into', ge: 'იდეებს ვაქცევთ' },
  heroTitleHighlight: { en: 'Digital Reality', ge: 'ციფრულ რეალობად' },
  heroSubtitle: { en: 'We design and engineer bespoke web platforms, high-octane mobile apps, and enterprise systems that elevate brands and optimize operations with 100% custom-tailored solutions.', ge: '7+ წლის ერთობლივი გამოცდილებით ვქმნით ინოვაციურ ვებ აპლიკაციებს, კორპორაციულ სისტემებსა და თანამედროვე მობილურ პროდუქტებს სხვდასხვა ინდუსტრიისთვის.' },
  heroCTAEstimate: { en: 'Try Space Estimator', ge: 'პროექტის კალკულატორი' },
  heroCTAContact: { en: 'Let\'s Chat', ge: 'უფასო კონსულტაცია' },

  // Services Section
  servicesHeader: { en: 'Our Capabilities', ge: 'ჩვენი შესაძლებლობები' },
  servicesSubheader: { en: 'We do not build templates. We sculpt bespoke software engineered for maximum performance, clean code, and stellar aesthetics.', ge: 'ჩვენ არ ვიყენებთ შაბლონებს. ჩვენ ვქმნით უნიკალურ პროგრამულ უზრუნველყოფას, რომელიც ორიენტირებულია მაქსიმალურ სიჩქარეზე, სუფთა კოდსა და თანამედროვე დიზაინზე.' },

  // Portfolio Section
  portfolioHeader: { en: 'Featured Creations', ge: 'გამორჩეული პროექტები' },
  portfolioSubheader: { en: 'A curated selection of web apps, mobile apps, and digital experiences we engineered from concept to launch.', ge: 'ჩვენს მიერ შექმნილი ვებ, მობილური და კორპორატიული პროდუქტების კრებული, იდეიდან სრულ გაშვებამდე.' },
  portfolioAll: { en: 'All Systems', ge: 'ყველა' },
  portfolioWeb: { en: 'Web Apps', ge: 'ვებ' },
  portfolioMobile: { en: 'Mobile', ge: 'მობილური' },
  portfolioEnterprise: { en: 'Enterprise', ge: 'სისტემები' },
  portfolioUXUI: { en: 'UI/UX Design', ge: 'დიზაინი' },
  viewProject: { en: 'Launch Preview', ge: 'პროექტის ნახვა' },
  techStackLabel: { en: 'Technologies Used', ge: 'ტექნოლოგიები' },

  // Project Estimator Section
  estimatorHeader: { en: 'Space Estimator 🚀', ge: 'პროექტის კალკულატორი 🚀' },
  estimatorSubheader: { en: 'Select your criteria and receive an instant, high-fidelity estimation of your project budget and development timeline.', ge: 'მიუთითეთ პროექტის პარამეტრები და მომენტალურად მიიღეთ ბიუჯეტისა და განვითარების ვადების წინასწარი შეფასება.' },
  estProjectType: { en: 'Project Type', ge: 'პროექტის ტიპი' },
  estScope: { en: 'Aesthetic / Depth Scale', ge: 'დიზაინისა და ფუნქციონალის მასშტაბი' },
  estFeatures: { en: 'Integrated Features (Select Multiple)', ge: 'დამატებითი ფუნქციები (აირჩიეთ რამდენიმე)' },
  estResultTime: { en: 'Estimated Development Time', ge: 'სამუშაო დროის ხანგრძლივობა' },
  estResultCost: { en: 'Estimated Project Cost', ge: 'პროექტის სავარაუდო ღირებულება' },
  estDisclaimer: { en: 'Note: This represents a high-fidelity estimation. Exact pricing depends on details of specifications and logic difficulty.', ge: 'შენიშვნა: ეს არის მიახლოებითი საორიენტაციო შეფასება. ზუსტი ფასი დამოკიდებულია ტექნიკური დავალებისა და ლოგიკის სირთულეზე.' },
  estCTA: { en: 'Submit for Direct Offer', ge: 'მიიღეთ ოფიციალური შეთავაზება' },
  estSuccess: { en: 'Your selection has been locked in! Submit the form below to receive a custom formal commercial contract.', ge: 'თქვენი პარამეტრები შენახულია! შეავსეთ საკონტაქტო ფორმა გვერდის ბოლოში და მიიღეთ ოფიციალური კომერციული წინადადება.' },

  // Team Section
  teamHeader: { en: 'The Minds at TianShan Space', ge: 'TianShan Space-ის გუნდი' },
  teamSubheader: { en: 'We keep our core team small and elite to guarantee pristine quality, zero communication lag, and absolute dedication to your project.', ge: 'ჩვენი გუნდი შედგება ელიტარული დეველოპერებისა და დიზაინერებისგან, რაც გარანტირებულს ხდის სრულყოფილ ხარისხს, სწრაფ კომუნიკაციასა და პროექტისადმი მაქსიმალურ ერთგულებას.' },

  // Contact Section
  contactHeader: { en: 'Let\'s Forge Something Great', ge: 'შევქმნათ ერთად რაიმე საოცარი' },
  contactSubheader: { en: 'Have an idea? Or want a free consultation and project scope mapping? Fill in the parameters and let\'s start tomorrow.', ge: 'გაქვთ საინტერესო იდეა? გსურთ უფასო კონსულტაცია და პროექტის სტრუქტურის გაწერა? შეავსეთ ფორმა და ჩვენ დღესვე დაგიკავშირდებით.' },
  fullName: { en: 'Full Name', ge: 'სახელი და გვარი' },
  emailAddress: { en: 'Email Address', ge: 'ელ-ფოსტა' },
  phoneNumber: { en: 'Phone Number (Optional)', ge: 'ტელეფონის ნომერი (არასავალდებულო)' },
  projectDetails: { en: 'Project Brief / Message', ge: 'პროექტის მოკლე აღწერა / შეტყობინება' },
  submitBtn: { en: 'Engage Project Discovery', ge: 'გაგზავნეთ მოთხოვნა' },
  sending: { en: 'Launching Request...', ge: 'იგზავნება...' },
  successMsg: { en: 'Request received! Transmission successful. Our architects will contact you in under 4 hours.', ge: 'შეტყობინება წარმატებით გაიგზავნა! ჩვენი არქიტექტორები მაქსიმუმ 4 საათში დაგიკავშირდებიან.' },
  officeLocation: { en: 'Headquarters', ge: 'ოფისი' },
  liveChat: { en: 'Instant Channels', ge: 'სწრაფი არხები' },

  // General Status
  activeBadge: { en: 'Deploy Ready', ge: 'მზადაა გასაშვებად' },
};

export const services: Service[] = [
  {
    id: 'web-dev',
    iconName: 'Globe',
    title: {
      en: 'High-Performance Web Platforms',
      ge: 'მაღალი წარმადობის ვებ აპლიკაციები',
    },
    description: {
      en: 'Bespoke, blazingly fast SPAs, SSR portals, and interactive dashboards. Engineered with React, Next.js, and lightweight state managers, loaded with micro-interactions.',
      ge: 'უნიკალური, უსწრაფესი ვებ აპლიკაციები, პორტალები და მართვის პანელები. შექმნილია React-ის, Next.js-ის და უახლესი ვებ ტექნოლოგიების გამოყენებით.',
    },
    features: {
      en: ['Vite & React Server Components', 'SEO & Speed Optimization', 'Interactive Tailwind UI Visuals'],
      ge: ['Vite და რეაქტის ეკოსისტემა', 'SEO და სიჩქარის ოპტიმიზაცია', 'ინტერაქტიული და მორგებული ინტერფეისი'],
    },
  },
  {
    id: 'mobile-dev',
    iconName: 'Smartphone',
    title: {
      en: 'Native & Cross-Platform Mobile Apps',
      ge: 'მობილური აპლიკაციები',
    },
    description: {
      en: 'iOS and Android applications designed with smooth 120Hz gesture-based loops. Packaged beautifully to hit Apple App Store and Google Play Store with zero lag.',
      ge: 'სტაბილური, სწრაფი და მულტიპლატფორმული მობილური აპლიკაციები iOS და Android სისტემებზე. დახვეწილი ინტერფეისითა და მყისიერი რეაგირებით.',
    },
    features: {
      en: ['React Native & Flutter', 'Interactive Gesture Animation', 'Offline-First Synchronization'],
      ge: ['React Native & Flutter', 'ჟესტურებზე ორიენტირებული ანიმაცია', 'ოფლაინ მუშაობის მხარდაჭერა'],
    },
  },
  {
    id: 'enterprise',
    iconName: 'Cpu',
    title: {
      en: 'Enterprise Corporate Management Systems',
      ge: 'კორპორაციული მართვის სისტემები',
    },
    description: {
      en: 'Intelligent, multi-tenant administrative software, customer management panels, internal CRM/ERP integrations, and advanced data visualization tooling.',
      ge: 'ადმინისტრაციული პანელები, შიდა CRM და ERP სისტემები, ავტომატიზაციები და ანალიტიკური დაფები რთული პროცესების გასამარტივებლად.',
    },
    features: {
      en: ['Relational Cloud Pipelines', 'Granular Role-Based Access Control', 'Advanced Statistical Dashboards'],
      ge: ['ღრუბლოვანი მონაცემთა ბაზები', 'წვდომის უფლებების მართვა', 'დიაგრამები და ბიზნეს ანალიტიკა'],
    },
  },
  {
    id: 'ux-ui',
    iconName: 'Figma',
    title: {
      en: 'Premium UX/UI Strategy & Prototyping',
      ge: 'პრემიუმ UX/UI დიზაინი და კვლევა',
    },
    description: {
      en: 'Meticulous wireframes, high-fidelity prototypes, design system builds, and user journey optimization mappings that translate ideas into interactive visual poetry.',
      ge: 'ვებ აპლიკაციებისა და მობილური პროდუქტების დეტალური UX კვლევა, მომხმარებლის გზის რუკა, FIGMA პროტოტიპები და თანამედროვე დიზაინ სისტემები.',
    },
    features: {
      en: ['Interactive Figma Mockups', 'Human-Centric Component Systems', 'Atomic Design Frameworks'],
      ge: ['FIGMA ინტერაქტიული პროტოტიპები', 'მომხმარებელზე ორიენტირებული დიზაინი', 'ატომური დიზაინის პრინციპები'],
    },
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Nexus Logistics Hub',
    category: 'enterprise',
    categoryLabel: { en: 'Enterprise System', ge: 'კორპორაციული სისტემა' },
    description: {
      en: 'A high-perf dashboard engineered for real-time fleet operations, route optimization mapping, telemetry, and automated invoice dispatching.',
      ge: 'უახლესი მართვის პანელი ლოჯისტიკური კომპანიისთვის, რომელიც ახდენს მარშრუტების ოპტიმიზაციას, მანქანების მონიტორინგსა და ავტომატურ ანგარიშფაქტურებს.',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'D3.js', 'PostgreSQL', 'Tailwind CSS'],
    metrics: { en: '+42% Routing Speed', ge: '+42% სწრაფი მარშრუტიზაცია' },
  },
  {
    id: '2',
    title: 'Kera Real Estate Platform',
    category: 'web',
    categoryLabel: { en: 'Web Application', ge: 'ვებ აპლიკაცია' },
    description: {
      en: 'Premium platform for residential and commercial estate transactions with instant map lookups, granular filter metrics, and interactive 3D floor virtual tours.',
      ge: 'პრემიუმ უძრავი ქონების პორტალი ინტერაქტიული რუკებით, დეტალური ფილტრებითა და ბინების 3D ვირტუალური ტურების მხარდაჭერით.',
    },
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    technologies: ['Vite', 'NodeJS', 'Google Maps API', 'Tailwind'],
    metrics: { en: '150k+ Monthly Users', ge: '150K+ აქტიური მომხმარებელი' },
  },
  {
    id: '3',
    title: 'SpaceCart Neo-commerce',
    category: 'web',
    categoryLabel: { en: 'Web Application', ge: 'ვებ აპლიკაცია' },
    description: {
      en: 'A headless, keyboard-navigable storefront tailored for high-end digital lifestyle hardware. Smooth fluid list animations and automated stripe integrations.',
      ge: 'სწრაფი ონლაინ მაღაზია განსაკუთრებული დიზაინით, კინეტიკური სენსორული ანიმაციებითა და გადახდების ავტომატური ინტეგრაციით.',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Stripe API', 'Motion/react', 'Tailwind'],
    metrics: { en: '0.2s Checkout Latency', ge: '0.2წმ შეკვეთის სისწრაფე' },
  },
  {
    id: '4',
    title: 'VibeFit Interactive Coach',
    category: 'mobile',
    categoryLabel: { en: 'Mobile App', ge: 'მობილური აპლიკაცია' },
    description: {
      en: 'Dynamic fitness helper app with offline workout patterns, live push motivations, device health stats charts, and community challenge feeds.',
      ge: 'მობილური ფიტნეს ასისტენტი, რომელიც მუშაობს ინტერნეტის გარეშეც, აკონტროლებს ჯანმრთელობის პარამეტრებს და აგენერირებს გრაფიკებს.',
    },
    image: 'https://images.unsplash.com/photo-1510051646317-5b68a0a3a2f3?auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'ChartJS', 'SQLite', 'Tailwind CSS'],
    metrics: { en: '4.9 App Store Score', ge: '4.9/5 რეიტინგი მაღაზიაში' },
  },
  {
    id: '5',
    title: 'Aura UI Design System',
    category: 'ux-ui',
    categoryLabel: { en: 'UI/UX Design', ge: 'UX/UI დიზაინი' },
    description: {
      en: 'A bespoke high-end wellness application design system inspired by minimalist Eastern philosophies, created for pixel-perfect coding handoffs.',
      ge: 'ჯანმრთელობისა და მედიტაციის აპლიკაციის სრული დიზაინ სისტემა, შექმნილი FIGMA-ში პიქსელების სიზუსტითა და სრული კომპონენტური ბიბლიოთეკით.',
    },
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    technologies: ['Figma', 'Interactive Prototyping', 'User Research'],
    metrics: { en: '300+ Modular Tokens', ge: '300+ მოდულარული ტოკენი' },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: { en: 'Sandro Kobakhidze', ge: 'სანდრო კობახიძე' },
    role: { en: 'Founder & CEO', ge: 'დამფუძნებელი და დირექტორი' },
    company: 'Kera Estates',
    text: {
      en: 'The execution by TianShan Space was flawless. Our web portal saw record-high load times, and custom filter queries run with absolute zero delay. Highly recommend!',
      ge: 'TianShan Space-მა წარმოუდგენლად კარგად შეასრულა სამუშაო. ჩვენი პორტალი იხსნება მყისიერად და ფილტრები მუშაობს ყოველგვარი შეფერხების გარეშე. დიდი რეკომენდაცია მათ!',
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 't2',
    name: { en: 'Elene Gegechkori', ge: 'ელენე გეგეჭკორი' },
    role: { en: 'Head of Operations', ge: 'ოპერაციების ხელმძღვანელი' },
    company: 'Nexus Logistics',
    text: {
      en: 'Our enterprise dashboard has streamlined over 10,000 deliveries. They simplified our logistics workflows into a gorgeous, readable high-performance interface.',
      ge: 'ამ მართვის სისტემამ 10,000-ზე მეტი ტვირთის გადაზიდვა გაგვიმარტივა. მათ ჩვენი რთული ლოჯისტიკური პროცესები ერთ საოცრად დახვეწილ და სწრაფ ინტერფეისში მოაქციეს.',
    },
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  },
];

export const metrics: Metric[] = [
  {
    value: '7+',
    label: { en: 'Years Combined Action', ge: 'წლის ერთობლივი გამოცდილება' },
    description: { en: 'Vast software design and deployment expertise across industries.', ge: 'პროგრამული უზრუნველყოფის დეველოპმენტისა და დიზაინის გამოცდილება.' },
  },
  {
    value: '25+',
    label: { en: 'Products Delivered', ge: 'ჩაბარებული პროექტი' },
    description: { en: 'Highly custom corporate solutions and mobile platforms launched.', ge: 'წარმატებულად გაშვებული მორგებული აპლიკაციები და სისტემები.' },
  },
  {
    value: '99%',
    label: { en: 'Client Retention Rate', ge: 'კმაყოფილი პარტნიორი' },
    description: { en: 'Long-term product care and expansion partnerships with businesses.', ge: 'გრძელვადიანი თანამშრომლობა და მხარდაჭერა ბიზნესებთან.' },
  },
  {
    value: '< 4h',
    label: { en: 'Average Inquiry Reply', ge: 'პასუხის საშუალო დრო' },
    description: { en: 'Extreme speed and low latency in all customer technical support.', ge: 'უსწრაფესი რეაგირება და ტექნიკური მხარდაჭერა ნებისმიერ შეკითხვაზე.' },
  },
];

// Technical Estimator System Definitions
export interface OptionItem {
  id: string;
  name: Record<Language, string>;
  baseCost: number;
  multiplier: number;
}

export const estimateProjectTypes: OptionItem[] = [
  { id: 'web', name: { en: 'High-Performance Web App', ge: 'მაღალი წარმადობის ვებ აპლიკაცია' }, baseCost: 1800, multiplier: 1.0 },
  { id: 'mobile', name: { en: 'iOS & Android Mobile App', ge: 'მობილური აპლიკაცია (iOS/Android)' }, baseCost: 2800, multiplier: 1.2 },
  { id: 'enterprise', name: { en: 'Enterprise ERP / Admin System', ge: 'საწარმოო მართვის ERP/CRM სისტემა' }, baseCost: 3500, multiplier: 1.4 },
  { id: 'design', name: { en: 'Bespoke UX/UI Design & System', ge: 'უნიკალური UX/UI დიზაინი და პროტოტიპი' }, baseCost: 1200, multiplier: 0.8 },
];

export const estimateScopes: OptionItem[] = [
  { id: 'small', name: { en: 'Startup Focus (Single View / Clean MVP)', ge: 'სტარტაპ ფოკუსი (ერთი გვერდი / სუფთა MVP)' }, baseCost: 0, multiplier: 1.0 },
  { id: 'medium', name: { en: 'Medium Core (4-10 Rich Screens & Integrations)', ge: 'საშუალო მოცულობა (4-10 დეტალური გვერდი და კავშირები)' }, baseCost: 800, multiplier: 1.25 },
  { id: 'large', name: { en: 'Immersive Product (Full Scalability & Heavy UI Animation)', ge: 'სრული პროდუქტი (დიდი მასშტაბი, სრული ადმინი და ანიმაციები)' }, baseCost: 2200, multiplier: 1.6 },
];

export interface FeatureItem {
  id: string;
  name: Record<Language, string>;
  cost: number;
  addedWeeks: number;
}

export const estimateFeatures: FeatureItem[] = [
  { id: 'auth', name: { en: 'Secure Multi-role Authentication', ge: 'უსაფრთხო ავტორიზაციის სისტემა' }, cost: 350, addedWeeks: 1 },
  { id: 'stripe', name: { en: 'Payment Integration (Stripe, TBC, BOG etc.)', ge: 'გადახდის სისტემების ინტეგრაცია (Stripe, TBC, BOG)' }, cost: 450, addedWeeks: 1 },
  { id: 'multilingual', name: { en: 'Multilingual Support Engine', ge: 'მრავალენოვანი სისტემა' }, cost: 250, addedWeeks: 0.5 },
  { id: 'dashboard', name: { en: 'Analytics & Statistical Plots', ge: 'ანალიტიკის და დეტალური სტატისტიკის დაფა' }, cost: 500, addedWeeks: 1.5 },
  { id: 'cms', name: { en: 'CMS Core (Admin capability to edit news/content)', ge: 'მონაცემების მართვის პანელი (ბლოგი/პროდუქტები)' }, cost: 400, addedWeeks: 1 },
];
