import Project1 from './assets/project1.jpeg';
import Project2 from './assets/project2.jpg';
import Project3 from './assets/project3.jpeg';
import Project4 from './assets/project4.jpeg';
import Project5 from './assets/project5.jpg';
import Project6 from './assets/project6.jpg';
import p1 from './assets/p1.jpg'
import Testimonial1 from './assets/testimonial1.jpg';
import Testimonial2 from './assets/testimonial2.jpg';
import Testimonial3 from './assets/testimonial3.jpg';
import Testimonial4 from './assets/testimonial4.jpg';
import Testimonial5 from './assets/testimonial5.jpg';

import p2 from './assets/p2.jpg'
import p7 from './assets/p7.jpg'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.jpg'
import p5 from './assets/p5.jpg'
import p6 from './assets/p6.jpg'

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Services',
    path: 'services',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Testimonials',
    path: 'testimonial',
  },
  {
    name: 'Pricing',
    path: 'pricing',
  },
  {
    name: 'Blog',
    path: 'blog',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const services = [
  {
    id: 1,
    name: 'Web Development',
    title: 'Web Design & Logo',
    description:
      'Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.',
  },
  {
    id: 2,
    name: ' Apps Development ',
    title: ' iOS & Android ',
    description:
      'Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.',
  },
  {
    id: 3,
    name: ' Game Development ',
    title: ' Unity & Unreal Engine ',
    description:
      ' Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ',
  },
  {
    id: 4,
    name: ' Advertising ',
    title: ' Google Ads ',
    description:
      ' Advertising services include: Google search result pages, gmails, YouTube and other websites participated in Google Ads program. ',
  },
  {
    id: 5,
    name: ' Music Writing ',
    title: ' Sound Track ',
    description:
      'Music copying, writing, creating, transcription and composition services.',
  },
];

export const skills = [
  {
    id: 1,
    name: 'PHP',
    percentage: 85,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 2,
    name: 'JavaScript',
    percentage: 75,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 3,
    name: 'WordPress',
    percentage: 90,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 4,
    name: 'Python',
    percentage: 75,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 5,
    name: 'React',
    percentage: 70,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    id: 6,
    name: 'Adobe XD',
    percentage: 80,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export const projects = [
  {
    id: 1,
    img: p7,
    category: 'UI UX DESIGN',
    title: 'Rocket Air',
    link: 'https://tarunroy500.github.io/RocketAir-desgin-/',
    description:
      "Rocket Air's responsive website is built using HTML, CSS, and JavaScript. It features a sleek design with intuitive navigation, dynamic animations, and optimized performance for a seamless user experience on any device.",
  },
  {
    id: 2,
    img: p2,
    category: 'UI UX Design',
    title: 'Francesco Gioia',
    link: 'https://tarunroy500.github.io/Francesco-Gioia/',
    description:
      "Francesco Gioia's website is created using HTML and CSS. It showcases his portfolio and highlights his skills as a web developer with a clean and modern design.",
  },
  {
    id: 3,
    img: p3,
    category: 'UI UX DESIGN',
    title: 'Serenity',
    link: 'https://tarunroy500.github.io/Serenity-desgin/',
    description:
      "Serenity's website is developed using HTML and CSS. It has a minimalist design with soothing color schemes and a focus on user experience, promoting relaxation and wellness.",
  },
  {
    id: 4,
    img: p4,
    category: 'UI UX DESIGN',
    title: 'Atelier Regime',
    link: 'https://tarunroy500.github.io/Atelier-New-Regime-design-/',
    description:
      "Atelier Regime's website is crafted using HTML and CSS. It showcases their fashion brand with a sleek and modern design, featuring high-quality images and an easy-to-navigate interface.",
  },
  {
    id: 5,
    img: p5,
    category: 'UI UX DESIGN',
    title: 'Craig Reynolds',
    link: 'https://tarunroy500.github.io/CRAIG-REYNOLDS-desgin/',
    description:
      "Craig Reynolds' website is constructed using HTML and CSS. It showcases his work as a computer graphics researcher with a simple and elegant design, providing easy access to his publications and projects.",
  },
  {
    id: 6,
    img: p6,
    category: 'UI UX DESIGN',
    title: 'Swrits',
    link: 'https://tarunroy500.github.io/Swrits/',
    description:
      "Swrits' website is built using HTML and CSS. It features a creative design with vibrant colors and animations, showcasing their digital marketing services and portfolio with a user-friendly layout.",
  },
];

export const cv = [
  {
    id: 1,
    title: 'Oriental College of Technology, Bhopal',
    subtitle: 'Computer Science, Data Science Engineering',
    date: '2020 - 2024',
    description:
      'I am pursuing Computer Science with Data Science at Oriental College of Technology. This course is equipping me with skills in programming, data analysis, and machine learning.',
    category: 'education',
  },

  {
    id: 2,
    title: 'Jawaharlal Nehru School, Bhopal',
    subtitle: 'High School',
    date: '2019 - 2020',
    description:
      'I completed 12th class with physics, chemistry, maths, and information practice. My strong STEM background has honed my problem-solving and critical thinking skills.',
    category: 'education',
  },

  {
    id: 3,
    title: '',
    subtitle: '',
    date: '',
    description:
      '',
    category: '',
  },

  {
    id: 4,
    title: 'Data Structure and Algorithm',
    subtitle: 'Coding Ninjas',
    date: '2021 - 2022',
    description:
      'I completed Data Structure and Algorithm from Coding Ninjas course, which taught me how to implement efficient algorithms and data structures in C++ language to solve complex problems in programming.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Full Stack Developer',
    subtitle: 'Sheriyans Coding School',
    date: '2022 - PRESENT',
    description:
      "I completed HTML, CSS, JavaScript, Node.js, and Express.js in Sheriyan's Coding School course. This has given me a strong foundation in full-stack web development.",
    category: 'experience',
  },

  {
    id: 6,
    title: '',
    subtitle: '',
    date: '',
    description:
      '',
    category: '',
  },
];

export const testimonials = [
  {
    id: 1,
    img: Testimonial1,
    name: 'Barbara Wilson',
    author: 'CEO Company',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    img: Testimonial2,
    name: 'Charlie Smith',
    author: 'Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    img: Testimonial3,
    name: 'Roy Wang',
    author: 'Manager GYM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    img: Testimonial4,
    name: 'Jennifer Smith',
    author: 'CEO & Founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    img: Testimonial5,
    name: 'Paul Freeman',
    author: 'Photographer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
