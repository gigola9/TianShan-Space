import { Service, Project, Testimonial, Metric, Language, BlogPost } from './types';

export const dictionary: Record<string, Record<Language, string>> = {
  // Navigation
  navHome: { en: 'Home', ge: 'მთავარი' },
  navServices: { en: 'Services', ge: 'სერვისები' },
  navPortfolio: { en: 'Portfolio', ge: 'პორტფოლიო' },
  navEstimator: { en: 'Estimator', ge: 'კალკულატორი' },
  navTeam: { en: 'Team', ge: 'გუნდი' },
  navContact: { en: 'Contact', ge: 'კონტაქტი' },
  navBlog: { en: 'Blog', ge: 'ბლოგი' },
  getInTouch: { en: 'Get in Touch', ge: 'უფასო კონსულტაცია' },

  // Blog Section
  blogTitle: { en: 'The Studio Journal', ge: 'სტუდიის ჟურნალი' },
  blogSubtitle: { en: 'Profound architectural insights, design systems, and software engineering write-ups from TianShan Space.', ge: 'პროგრამული ინჟინერიის, დიზაინ სისტემებისა და ბიზნეს ანალიტიკის სიღრმისეული სტატიები.' },
  blogReadMore: { en: 'Read Full Post', ge: 'სრულად წაკითხვა' },
  blogBack: { en: 'Return to Journal', ge: 'უკან დაბრუნება' },
  blogShare: { en: 'Share Article', ge: 'გაზიარება' },
  blogAll: { en: 'All Topics', ge: 'ყველა თემა' },
  blogDesign: { en: 'Design & UX', ge: 'დიზაინი & UX' },
  blogDev: { en: 'Development', ge: 'დეველოპმენტი' },
  blogInsights: { en: 'Insights', ge: 'ანალიტიკა' },
  blogPublished: { en: 'Published', ge: 'გამოქვეყნდა' },
  blogMinutes: { en: 'min read', ge: 'წთ წაკითხვა' },

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

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'the-kinetic-layer-escaping-static-layouts',
    title: {
      en: 'The Kinetic Layer: Escaping Static Layouts in Modern Product Design',
      ge: 'კინეტიკური შრე: როგორ ვიხსნათ პროდუქტის დიზაინი სტატიკურობისგან',
    },
    excerpt: {
      en: 'How subtle acceleration vectors and smooth gesture loops increase digital product retention by up to forty percent.',
      ge: 'როგორი გავლენა აქვს მოძრაობის მიკრო-ინტერაქციებსა და ჟესტებს მომხმარებელთა ჩართულობაზე ციფრულ პროდუქტებში.',
    },
    content: [
      {
        en: "In modern application design, static screens feel incomplete. When a user interacts with a system, they don't merely expect immediate static response; they seek visual continuity. Human sight is biologically wired to track motion, speed, and continuous transitions. When transitions feel jagged or instantaneous, the cognitive load rises, making the interface feel rigid, unstable, or unresponsive.",
        ge: "თანამედროვე აპლიკაციების დიზაინში, სტატიკური გვერდები მოძველებულად გამოიყურება. როდესაც მომხმარებელი ურთიერთქმედებს სისტემასთან, ის ელის არა მხოლოდ უსულო რეაგირებას, არამედ ვიზუალურ უწყვეტობას. ადამიანის მხედველობა ბიოლოგიურად არის მოწყობილი ისე, რომ მიჰყვეს მოძრაობას, სიჩქარესა და გლუვ გადასვლებს. როდესაც გადასვლები უხეში ან მყისიერია, იზრდება კოგნიტური დატვირთვა.",
      },
      {
        en: "To resolve this, we introduce the concept of 'The Kinetic Layer'. By incorporating smooth, vector-based keyframe animations and physical-feeling spring models, we map user inputs to logical motion transitions. For instance, launching a modal is not a binary visible/hidden event. Instead, it scales upwards from the cursor origin point as a subtle spatial event, dampening dynamically as it establishes focus.",
        ge: "ჩვენ შემოგვაქვს 'კინეტიკური შრის' კონცეფცია. გლუვი, ვექტორული და ფიზიკაზე დაფუძნებული ზამბარული (spring) მოდელებით, მომხმარებლის ინტერაქციას ლოგიკურ მოძრაობაში გარდავსახავთ. მაგალითად, მოდალური ფანჯრის გახსნა არ არის ბინარული (ჩანს/არ ჩანს) მოვლენა. ნაცვლად ამისა, იგი იზრდება კურსორის წერტილიდან, რაც სივრცულ აღქმას აუმჯობესებს.",
      },
      {
        en: "Measurements on deployed platforms demonstrate that adding kinetic logic increases overall session durations by up to 40%. Users navigate naturally, discovering complex controls with higher confidence. Our design system, Aura, defines strict acceleration constants and material constants to ensure every motion across our web platforms and hybrid systems feels cohesive and intentionally sculpted.",
        ge: "ჩვენს მიერ გაშვებული პროდუქტების ანალიზით დასტურდება, რომ კინეტიკური ლოგიკის დამატება ზრდის სესიის ხანგრძლივობას 40%-მდე. მომხმარებლები უფრო თავდაჯერებულად აკონტროლებენ რთულ ფუნქციონალს. ჩვენი დიზაინ სისტემა - Aura, მკაცრად განსაზღვრავს აჩქარებისა და მასალების მუდმივებს, რათა ყოველი ვიზუალური მოძრაობა იყოს დახვეწილი და ბუნებრივი.",
      }
    ],
    category: 'design',
    categoryLabel: {
      en: 'Design & UX',
      ge: 'დიზაინი & UX',
    },
    readTime: {
      en: '4 min read',
      ge: '4 წთ წასაკითხი',
    },
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    publishedDate: {
      en: 'June 4, 2026',
      ge: '4 ივნისი, 2026',
    },
    author: {
      name: { en: 'Sandro Kobakhidze', ge: 'სანდრო კობახიძე' },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
      role: { en: 'UI Architect & Lead', ge: 'UI არქიტექტორი' },
    }
  },
  {
    id: 'b2',
    slug: 'architecting-core-architecture-beyond-vite-defaults',
    title: {
      en: 'Architecting a Core Architecture: Moving Beyond Vite Defaults',
      ge: 'პროგრამული არქიტექტურა: როგორ გავცდეთ Vite-ის სტანდარტულ ვარიანტებს',
    },
    excerpt: {
      en: 'A detailed breakdown of custom lazy initialization, responsive canvas scaling, and zero-flicker state systems.',
      ge: 'დეტალური ანალიზი მოდულური დატვირთვის, რეაგირებადი კანვასების ზომების დინამიური მართვისა და მდგომარეობების სწრაფი სინქრონიზაციის შესახებ.',
    },
    content: [
      {
        en: "Out-of-the-box build configurations serve a wide audience but rarely maximize raw execution speed for premium products. Standard setups often compile heavy logic blocks into a monolithic vendor bundle, forcing the client's browser to parse massive scripts before displaying a single pixel of useful content. This delay impacts initial load metrics and search ranking indexing.",
        ge: "სტანდარტული ბილდის კონფიგურაციები ხშირად აერთიანებს რთულ ლოგიკურ ბლოკებს მონოლითურ ერთობლიობაში, რაც აიძულებს მომხმარებლის ბრაუზერს დაამუშაოს დიდი ზომის კოდი პირველი პიქსელის დახატვამდე. ეს შეფერხება პირდაპირ მოქმედებს საძიებო სისტემებში ოპტიმიზაციაზე (SEO) და მომხმარებლის კმაყოფილებაზე.",
      },
      {
        en: "To deliver zero-flicker performance, our structural engineers divide applications into independent operational quadrants. Standard client states are loaded synchronously, while background tools (such as dynamic estimate engines, maps canvas loaders, or heavy math processors) are decoupled using lazy dynamic import chains that only execute on demand.",
        ge: "ჩვენი ინჟინრები აპლიკაციებს ყოფენ დამოუკიდებელ მოდულებად. ძირითადი კლიენტური კომპონენტები იტვირთება სინქრონულად, ხოლო მძიმე ინსტრუმენტები (როგორიცაა პროექტის კალკულატორი, რუკები ან ვიზუალური ანალიტიკის მოდულები) გამოყოფილია და იტვირთება მხოლოდ მაშინ, როცა მომხმარებელი ამას მოითხოვს.",
      },
      {
        en: "By configuring custom Rollup compilation settings inside Vite, resolving type dependencies early, and avoiding expensive re-renders with stabilized dependencies, we achieve first-contentful-paint (FCP) metrics of under 0.3 seconds. This approach establishes the foundational speed necessary for high-end commerce and live tracking systems.",
        ge: "Vite-ის შიდა Rollup-ის პარამეტრების მოდიფიცირებით, ტიპების ადრეული აღწერითა და არასაჭირო ხელახალი რენდერების (re-renders) თავიდან აცილებით, ჩვენ მივაღწიეთ პირველადი ჩატვირთვის 0.3 წამზე ნაკლებ მაჩვენებელს. ეს ქმნის საიმედო საფუძველს სწრაფი ონლაინ მაღაზიებისა და მონაცემთა რეალურ დროში მართვის სისტემებისთვის.",
      }
    ],
    category: 'dev',
    categoryLabel: {
      en: 'Development',
      ge: 'დეველოპმენტი',
    },
    readTime: {
      en: '6 min read',
      ge: '6 წთ წასაკითხი',
    },
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    publishedDate: {
      en: 'May 28, 2026',
      ge: '28 მაისი, 2026',
    },
    author: {
      name: { en: 'TianShan Engineer', ge: 'TianShan ინჟინერი' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      role: { en: 'Full-Stack Systems Architect', ge: 'სისტემური არქიტექტორი' },
    }
  },
  {
    id: 'b3',
    slug: 'the-evolution-of-minimalist-typography',
    title: {
      en: 'The Evolution of Minimalist Typography in Premium Brand Mappings',
      ge: 'მინიმალისტური ტიპოგრაფიის ევოლუცია პრემიუმ ბრენდების ფორმირებაში',
    },
    excerpt: {
      en: 'Why geometric grotesque fonts paired with monospaced metadata form the signature of elite, high-trust engineering products.',
      ge: 'რატომ წარმოადგენს გეომეტრიული შრიფტების კავშირი მონოსპეის მეტამონაცემებთან მაღალი ნდობის მქონე ელიტარული პროდუქტების ხელწერას.',
    },
    content: [
      {
        en: "Typography is not merely text representation; it is the physical tone of voice for digital software. Historically, corporations used highly neutral sans-serifs to look uniform. However, modern high-trust labels have transitioned to carefully paired weights that balance display impact with technical precision.",
        ge: "ტიპოგრაფია მხოლოდ ტექსტი არ არის; ის ციფრული პროდუქტის ხმაა. ისტორიულად, კომპანიები იყენებდნენ ნეიტრალურ შრიფტებს ერთფეროვნებისთვის. თუმცა, მაღალი დონის ბრენდები დღეს იყენებენ გააზრებულ წყვილებს, რომლებიც ტექნიკურ სიზუსტესა და კრეატიულობას შორის ბალანსს ინარჩუნებს.",
      },
      {
        en: "Our design framework pairs geometric display grotesque fonts like Space Grotesk (characterized by sharp corners and structural proportions) with technical monospaced details like JetBrains Mono. This sets up a rhythmic division: bold, expressive headings highlight marketing statements, while fine mono-fonts anchor numbers and parameter specifications, creating a highly organized layout.",
        ge: "ჩვენი დიზაინის ჩარჩო აჯგუფებს გეომეტრიულ სათაურებს (როგორიცაა Space Grotesk) ტექნიკურ მონოსპეის დეტალებთან (Inter-სა და JetBrains Mono-სთან ერთად). ეს უზრუნველყოფს რიტმულ დანაწილებას: მკაფიო, ექსპრესიული სათაურები გამოკვეთს მთავარ სათქმელს, ხოლო ტექნიკური მონო-დახასიათებები ასახავს რიცხვებს და პარამეტრებს.",
      },
      {
        en: "This stylistic choice establishes an aura of operational excellence. It communicates to the user that every coordinate is controlled, every pixel is measured, and the underlying code is written with absolute clarity. Respecting negative space alongside meticulous letter-spacing yields a layout that commands high levels of focus and natural engagement.",
        ge: "ეს სტილისტური არჩევანი ქმნის პროფესიონალიზმის მკაფიო აურას. ის მომხმარებელს აგრძნობინებს, რომ ყოველი პიქსელი გაზომილია, ყოველი კოორდინატი კონტროლდება და ბაზისური კოდი დაწერილია უმაღლესი სიზუსტით. უარყოფითი სივრცის მართვა და ასოებს შორის მანძილების შენარჩუნება ქმნის დიზაინს, რომელიც იპყრობს ყურადღებას სრულიად ბუნებრივად.",
      }
    ],
    category: 'insights',
    categoryLabel: {
      en: 'Insights',
      ge: 'ანალიტიკა',
    },
    readTime: {
      en: '3 min read',
      ge: '3 წთ წასაკითხი',
    },
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
    publishedDate: {
      en: 'April 19, 2026',
      ge: '19 აპრილი, 2026',
    },
    author: {
      name: { en: 'Elene Gegechkori', ge: 'ელენე გეგეჭკორი' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      role: { en: 'Product Strategist', ge: 'პროდუქტის სტრატეგი' },
    }
  },
  {
    id: 'b4',
    slug: 'building-seamless-canvas-systems-webgl',
    title: {
      en: 'Building Seamless Canvas Systems: WebGL and ResizeObserver Tricks',
      ge: 'კანვასის სისტემები: WebGL-ისა და ResizeObserver-ის პრაქტიკული გამოყენება',
    },
    excerpt: {
      en: 'How to avoid coordinate mismatches and costly redraw loops by binding layout nodes dynamically to high-performance graphic overlays.',
      ge: 'როგორ ავიცილოთ თავიდან კოორდინატების შეუსაბამობა და არასაჭირო გადახატვა გრაფიკული ელემენტების დინამიური მართვისას.',
    },
    content: [
      {
        en: 'Rendering interactive nodes or real-time particle structures inside standard browser frames often challenges rendering speeds. Typically, developers bind event listeners directly to the window resize actions, causing repeated layout thrashing as the browser calculates relative dimensions continuously. This causes visual stuttering or broken vectors on mobile and tablet rotations.',
        ge: 'ინტერაქტიული გრაფიკისა და ელემენტების რენდერინგი ბრაუზერში ხშირად მოითხოვს მაღალ წარმადობას. ხშირად, დეველოპერები უშუალოდ window resize მოვლენაზე აბამენ მსმენელებს, რაც იწვევს გვერდის უხეშ გადახატვას ყოველ პიქსელზე. ეს იწვევს ვიზუალურ შეფერხებებს ან დამახინჯებულ ნახატებს მობილური მოწყობილობების შემოტრიალებისას.',
      },
      {
        en: 'By integrating ResizeObserver at the container element level rather than monitoring global window bounds, we can isolate coordinate calculations. When combined with canvas buffer ratio stabilization and low-level WebGL vertex matrices, resizing becomes silky smooth. The canvas scales continuously in the background without dropping frames or triggering full-page paint refreshes.',
        ge: 'ResizeObserver-ის გამოყენებით კონტეინერის დონეზე, გლობალური window ზომების მონიტორინგის ნაცვლად, ჩვენ შეგვიძლია კოორდინატების გამოთვლა იზოლირებულად მოვახდინოთ. WebGL კოორდინატების მატრიცებთან კომბინაციაში, ზომის ცვლილება ხდება სრულიად უწყვეტი. კანვასი იზრდება ფონურ რეჟიმში კადრების დაკარგვისა და გვერდის გადახატვის გარეშე.',
      }
    ],
    category: 'dev',
    categoryLabel: {
      en: 'Development',
      ge: 'დეველოპმენტი',
    },
    readTime: {
      en: '5 min read',
      ge: '5 წთ წაკითხვა',
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    publishedDate: {
      en: 'March 12, 2026',
      ge: '12 მარტი, 2026',
    },
    author: {
      name: { en: 'TianShan Engineer', ge: 'TianShan ინჟინერი' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      role: { en: 'Full-Stack Systems Architect', ge: 'სისტემური არქიტექტორი' },
    }
  },
  {
    id: 'b5',
    slug: 'data-structures-for-rapid-pricing-estimators',
    title: {
      en: 'Optimal Data Structures for Complex Multi-Variant Pricing Estimators',
      ge: 'მონაცემთა სტრუქტურები პროექტის მრავალკვალიფიციური კალკულატორებისთვის',
    },
    excerpt: {
      en: 'How a recursive matrix of features and complexity parameters enables frictionless, instant cost approximations.',
      ge: 'როგორ უზრუნველყოფს ფასის მოდელების მორგება მომენტალურ და ზუსტ გაანგარიშებებს ნებისმიერი ტიპის ციფრული სისტემისთვის.',
    },
    content: [
      {
        en: 'Interactive pricing engines or project scope estimators often suffer under heavy branching conditions. Traditional code templates address this with infinite nested switch-case statements or nested if-conditions, turning the system into a nightmarish web to expand or alter. A single change in pricing logic breaks downstream parameters, and types quickly decay into ambiguity.',
        ge: 'ფასის გამოსათვლელი ინტერაქტიული კალკულატორების სისტემებში მრავალშრიანი პარამეტრები ხშირად ართულებს ადმინისტრირებას. დეველოპერები ხშირად იყენებენ დაუსრულებელ nested if-პირობებს, რაც კოდს გამოუსადეგარს ხდის. ფასის ლოგიკაში ერთი კომპონენტის ცვლილება ხშირად აფუჭებს დანარჩენ პარამეტრებს.',
      },
      {
        en: 'By mapping project aspects, tiers, and add-on factors into a structured recursive feature grid, we transition calculating tasks into straightforward array operations. State management becomes fully predictable and responsive. Adding multilingual support to feature labels or changing baseline parameters can be managed seamlessly directly within the configuration file.',
        ge: 'პროექტის ასპექტებისა და დამატებითი კომპონენტების სტრუქტურირებულ ფუნქციურ მატრიცაში გაერთიანებით, გამოთვლის ლოგიკას ჩვეულებრივ მასივის მანიპულაციად გარდავქმნით. მდგომარეობების მართვა ხდება პროგნოზირებადი და სწრაფი, ხოლო ახალი პარამეტრების ან ენების დამატება მარტივად ხდება უშუალოდ კონფიგურაციის ფაილიდან.',
      }
    ],
    category: 'insights',
    categoryLabel: {
      en: 'Insights',
      ge: 'ანალიტიკა',
    },
    readTime: {
      en: '7 min read',
      ge: '7 წთ წაკითხვა',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    publishedDate: {
      en: 'February 21, 2026',
      ge: '21 თებერვალი, 2026',
    },
    author: {
      name: { en: 'Elene Gegechkori', ge: 'ელენე გეგეჭკორი' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
      role: { en: 'Product Strategist', ge: 'პროდუქტის სტრატეგი' },
    }
  },
  {
    id: 'b6',
    slug: 'user-retention-and-micro-transitions',
    title: {
      en: 'User Retention and Micro-Transitions: The Cognitive Link',
      ge: 'კლიენტების შენარჩუნება და მიკრო-ტრანზიციები: კოგნიტური კავშირი',
    },
    excerpt: {
      en: 'Studying the neurobiology of interface feedback loop speeds and their dramatic impacts on user conversion funnels.',
      ge: 'ინტერფეისის რეაგირების სიჩქარისა და მიკრო-ანიმაციების გავლენა მომხმარებელთა კონვერსიასა და ლოიალობაზე.',
    },
    content: [
      {
        en: 'The human cognitive register operates in short millisecond envelopes. An interface response under 100 milliseconds is perceived as instantaneous. When responses exceed 300 milliseconds, users perceive a delayed interaction delay, and if they approach 1.5 seconds, attention starts to wander, impacting search intent and purchase momentum.',
        ge: 'ადამიანის ტვინი ინტერაქციას აღიქვამს მილიწამების დიაპაზონში. 100 მილიწამზე ნაკლები რეაგირება მყისიერად აღიქმება. როდესაც რეაგირება აჭარბებს 300 მილიწამს, მომხმარებლები გრძნობენ შეფერხებას, ხოლო 1.5 წამის შემთხვევაში, იწყებენ ყურადღების გაფანტვას, რაც აფერხებს კონვერსიას.',
      },
      {
        en: 'By mapping high-frequency visual feedback directly to user interactions - such as custom spring scales on button presses, glowing outline borders, and subtle staggered elements entering views - we create an immersive space. In testing circles, items using micro-transitions see up to a 28% increase in conversion over comparable static competitors.',
        ge: 'მომხმარებელთა ქმედებებზე მყისიერი ვიზუალური პასუხის მორგებით (როგორიცაა მიკრო-ანიმაციები, საზღვრების ნათება და კომპონენტების გლუვი გამოჩენა), ჩვენ ვქმნით საოცარ კავშირს. ტესტირების შედეგად დგინდება, რომ პროდუქტები, რომლებიც იყენებენ ასეთ ინტერაქციებს, 28%-ით მეტ კონვერსიას აჩვენებენ.',
      }
    ],
    category: 'design',
    categoryLabel: {
      en: 'Design & UX',
      ge: 'დიზაინი & UX',
    },
    readTime: {
      en: '5 min read',
      ge: '5 წთ წაკითხვა',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    publishedDate: {
      en: 'January 15, 2026',
      ge: '15 იანვარი, 2026',
    },
    author: {
      name: { en: 'Sandro Kobakhidze', ge: 'სანდრო კობახიძე' },
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
      role: { en: 'UI Architect & Lead', ge: 'UI არქიტექტორი' },
    }
  }
];
