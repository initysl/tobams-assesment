/**
 * All page copy, transcribed from the Figma export. Sections map over this data
 * so repeated markup (nav items, bullet lists, footer columns) stays in one place.
 */

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Founder', href: '/about/founder' },
      { label: 'The Team', href: '/about/team' },
      { label: 'Business Model', href: '/about/business-model' },
    ],
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    children: [
      { label: 'Sustainability Services', href: '/what-we-do/sustainability' },
      { label: 'Tech Talent Solutions', href: '/what-we-do/tech-talent' },
      { label: 'Training and Development', href: '/what-we-do/training' },
      { label: 'IT Consulting Services', href: '/what-we-do/it-consulting' },
    ],
  },
  {
    label: 'Jobs',
    href: '/jobs',
    children: [
      { label: 'Open Roles', href: '/jobs/open-roles' },
      { label: 'Internships', href: '/jobs/internships' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'TG Academy', href: '/tg-academy' },
  { label: 'Strategic Partnership', href: '/strategic-partnership' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Book a Consultation', href: '/book-a-consultation' },
];

export const HERO = {
  eyebrow: 'WHAT WE DO',
  title: 'Training and Development',
  body: "Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.",
  cta: { label: 'Book a Consultation', href: '/book-a-consultation' },
};

export const LEARNING_MANAGEMENT_SYSTEM = {
  title: 'Learning Management System',
  body: "TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today's competitive tech landscape.",
  coursesLabel: 'Some of our courses include:',
  courses: [
    'Business Analysis',
    'Design Thinking',
    'Effective Communication',
    'Entrepreneurship',
    'Career Development',
    'Business Model',
  ],
  image: {
    src: '/images/learning-management-system.jpg',
    alt: 'Two Tobams Group consultants standing together in a bright office',
  },
};

export type FeatureSplitContent = {
  id: string;
  title: string;
  body: string;
  bullets: string[];
  image: { src: string; alt: string };
  imageSide: 'left' | 'right';
};

export const FEATURE_SPLITS: FeatureSplitContent[] = [
  {
    id: 'corporate-trainings',
    title: 'Corporate Trainings',
    body: "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    bullets: [
      'Leadership Training',
      'Strategic Planning and Implementation',
      'Project Management',
      'Sustainability Training',
      'Customised Training',
    ],
    image: {
      src: '/images/corporate-trainings.jpg',
      alt: 'Facilitator presenting data dashboards to a corporate team in a meeting room',
    },
    imageSide: 'right',
  },
  {
    id: 'personalised-individual-training',
    title: 'Personalised Individual Training',
    body: "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    bullets: [
      'Leadership Development',
      'Soft Skills Development',
      'Industry Specific Knowledge',
      'Technical Skills Enhancement',
      'Time Management and Productivity',
      'Career Development',
    ],
    image: {
      src: '/images/personalised-individual-training.jpg',
      alt: 'Professional listening attentively during a one-to-one training session',
    },
    imageSide: 'left',
  },
  {
    id: 'capacity-development',
    title: 'Capacity Development',
    body: 'At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:',
    bullets: [
      'Tailored Training Programs',
      'Expert-Led Workshops',
      'Personalized Mentorship',
      'Technical Skills Enhancement',
      'Collaborative Learning Environment',
      'Ongoing Support and Resources',
    ],
    image: {
      src: '/images/capacity-development.jpg',
      alt: 'Trainer using a flip chart of charts to lead a small workshop group',
    },
    imageSide: 'right',
  },
];

export const MANAGEMENT_DEVELOPMENT_PROGRAM = {
  title: 'Management Development Program',
  paragraphs: [
    'Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high - performing leaders they need to thrive.',
    'Our program includes workshops, seminars, coaching sessions, online courses, and experiential learning opportunities designed to improve leadership, strategic thinking, communication, and other essential managerial competencies for corporate organisations.',
  ],
  outcomes: [
    'Enhanced Leadership Skills',
    'Improved Employee Engagement',
    'Stronger Organisational Culture',
    'Sustainable Growth',
  ],
  image: {
    src: '/images/management-development-program.jpg',
    alt: 'Three colleagues reviewing work on a tablet beside an office window',
  },
};

export const TRANSFORMATION_HUB = {
  eyebrow: 'Learning With Our CEO:',
  title: 'Transformation Hub With Jite Newton',
  body: "Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.",
  topics: [
    'Strategic Career Guidance',
    'Leadership Development',
    'CV Development',
    'Sustainability Leadership',
    'Communication Skills',
    'Business Model',
  ],
  cta: { label: 'Learn More', href: '/transformation-hub' },
  image: {
    src: '/images/transformation-hub.jpg',
    alt: 'Webinar attendee reflected against a wall of glowing digital data',
  },
};

export const TRAINING_THE_CONSULTANT = {
  title: 'Training The Consultant',
  subtitle: 'Maximise Your Potential as a Certified Trainer:',
  body: 'With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.',
  benefits: [
    {
      title: 'Expert-Led Learning',
      body: 'Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.',
    },
    {
      title: 'Interactive Workshops',
      body: 'Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.',
    },
    {
      title: 'Comprehensive Curriculum',
      body: 'Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.',
    },
    {
      title: 'Global Recognition',
      body: 'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.',
    },
  ],
  cta: { label: 'Learn More', href: '/training-the-consultant' },
};

export const CONSULTATION_CTA = {
  /* The desktop and mobile Figma frames carry different copy for this band. */
  desktopBody:
    'Want to accelerate professional growth and development at your organisation? See how we can help.',
  mobileBody:
    "Don't just dream it-let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.",
  cta: { label: 'Book a Consultation', href: '/book-a-consultation' },
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Aisha Yusuf',
    role: 'Founder, CraftHub NG',
    quote:
      'Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!',
    avatar: '/images/avatar-aisha-yusuf.png',
  },
  {
    name: 'John Davies',
    role: 'Marketing Manager, E-Commerce Emporium',
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: '/images/avatar-john-davies.png',
  },
  {
    name: 'Chinonso Nwankwo',
    role: 'HR Director, FutureTech Solutions',
    quote:
      'Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.',
    avatar: '/images/avatar-chinonso-nwankwo.png',
  },
  {
    name: 'Sarah Johnson',
    role: 'CEO of Tech Innovations Inc.',
    quote:
      "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights. Their work is top-notch, and the results speak for themselves. I can't recommend them enough!",
    avatar: '/images/avatar-sarah-johnson.png',
  },
];

export const CLOSING_CTA = {
  eyebrow: 'Ready to be a part of something extraordinary?',
  title: "Let's work together to create a difference",
  cta: { label: 'Get In Touch', href: '/contact' },
};

export const FOOTER_TAGLINE =
  'Tobams Group is an innovative consultancy firm reshaping the future of tech talent development in Africa, specializing in talent acquisition, internships, and skill development with a global perspective.';

export const FOOTER_COLUMNS = [
  {
    title: 'What We Do',
    links: [
      { label: 'Sustainability Services', href: '/what-we-do/sustainability' },
      {
        label: 'Strategy Planning and Implementation',
        href: '/what-we-do/strategy-planning',
      },
      { label: 'Tech Talent Solutions', href: '/what-we-do/tech-talent' },
      { label: 'Training and Development', href: '/what-we-do/training' },
      { label: 'IT Consulting Services', href: '/what-we-do/it-consulting' },
      { label: 'Social Impact', href: '/what-we-do/social-impact' },
      { label: 'Talent Recruitment', href: '/what-we-do/talent-recruitment' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Jobs', href: '/jobs' },
      { label: 'Projects', href: '/projects' },
      { label: 'Our Founder', href: '/about/founder' },
      { label: 'Business Model', href: '/about/business-model' },
      { label: 'The Team', href: '/about/team' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQs', href: '/faqs' },
      { label: 'Testimonials', href: '/testimonials' },
    ],
  },
  {
    title: 'Solution',
    links: [
      { label: 'Tobams Group Academy', href: '/tg-academy' },
      { label: 'Help a Tech Talent', href: '/help-a-tech-talent' },
      {
        label: 'Campus Ambassadors Program',
        href: '/campus-ambassadors',
      },
      { label: 'Join Our Platform', href: '/join-our-platform' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Book a Consultation', href: '/book-a-consultation' },
      { label: 'Join Our Slack Community', href: '/slack-community' },
    ],
  },
];

export const REGISTERED_OFFICES = [
  {
    country: 'United Kingdom',
    lines: [
      '07451196 (Registered by Company House)',
      'Vine Cottages, 215 North Street, Romford, Essex, United Kingdom, RM1 4QA',
    ],
  },
  {
    country: 'Nigeria',
    lines: [
      'RC 1048722 (Registered by the Corporate Affairs Commission)',
      '4, Muaz Close, Angwar-Rimi',
    ],
  },
];

export const CONTACT = {
  email: 'theteam@tobamsgroup.com',
  phone: '+447886600748',
};

export const LEGAL_LINKS = [
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Cookies Policy', href: '/cookies' },
];

export const NOT_FOUND = {
  code: '404',
  eyebrow: 'PAGE NOT FOUND',
  title: 'This page is still in development',
  body: "The link you followed doesn't lead anywhere yet. Head back to home, or try one of the routes below.",
  primaryCta: { label: 'Go back ', href: '/' },
  secondaryCta: { label: 'Book a Consultation', href: '/book-a-consultation' },
  linksLabel: 'Popular destinations',
};

/**
 * The 404 shortcuts are looked up from NAV_LINKS rather than retyped, so a
 * change to a nav label or href can't leave this page pointing somewhere stale.
 */
const NOT_FOUND_LINK_LABELS = [
  'What We Do',
  'TG Academy',
  'Jobs',
  'Projects',
  'Pricing',
  'About',
];

export const NOT_FOUND_LINKS: NavLink[] = NOT_FOUND_LINK_LABELS.flatMap(
  (label) => {
    const match = NAV_LINKS.find((link) => link.label === label);
    return match ? [match] : [];
  },
);
