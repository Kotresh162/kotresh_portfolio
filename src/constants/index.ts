import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  starbucks,
  threat,
  english,
  jobit,
  tripguide,
  flutter,
  django,
  aws,
} from "../assets/inex";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML-LLM",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Flutter Mobile App Developer",
    companyName: "Rablo.in",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2025 - Jun 2025",
    points: [
      "Developed a high-performance mobile application using the Flutter framework, resulting in a 20% improvement in screen responsiveness and overall user experience. flutter framework.",
 " Designed and implemented 7 out of 20 key modules, focusing on robust UI/UX and seamless API integration to ensure feature completeness and responsiveness.",
 "Managed and guided a team of 4 developers, overseeing the development lifecycle and contributing to the successful and timely product launch",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "English Mastery",
    description:
      "Designed an innovative English language learning mobile app - Video Summary generator(developed an Video-Text model with better results compare to whisper model),recommends personalized content based on the user’s knowledge model, Incorporated dynamic features like real-time translation, interactive assessments, and comprehensive progress tracking, significantly boosting user engagement and accelerating learning.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Firebase,LLM",
        color: "pink-text-gradient",
      },
      {
        name: "LLM",
        color: "pink-text-gradient",
      },
    ],
    image: english,
    sourceCodeLink: "https://github.com/Kotresh162/Engliish_masterty.git",
  },
  {
    name: "Threat Analyzer",
    description:
      "Developed backend for a Threat Intelligence Dashboard that ingests NLP-processed threat data from CSV files and exposes a robust RESTful API for filtering, searching, and visualizing cyber threat information. Built and deployed a regression-based machine learning model to predict cyberattacks with 94 % accuracy, trained on 12 features to classify threats into 4 distinct attack types.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning - Regression Model",
        color: "pink-text-gradient",
      },
    ],
    image: threat,
    sourceCodeLink: "https://github.com/Kotresh162/Home_appliences.git",
  },
  {
    name: "Google Sheet-Assistant",
    description:
      "Developed real-time synchronization between database operations (GET, ADD, DELETE, UPDATE) and Google Sheets, ensuring seamless data updates. Implemented a system that prioritizes Google Sheets updates over database changes based on timing. This solution improved data management for organizations by maintaining consistent user data across both platforms.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Appscript",
        color: "pink-text-gradient",
      }, {
        name: "AWS-EC2",
        color: "blue-text-gradient",
      }
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/Kotresh162/GoogleSheetManager.git",
  },
  {
    name: "Airlines and Hotel-Chatbot",
    description:
      "Helps the user to book flight and hotels through chats.",
    tags: [
      {
        name: "Streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "python-fastapi ",
        color: "green-text-gradient",
      },
      {
        name: "LLM-llama-3b",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/Kotresh162/airlines_chatbot.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
