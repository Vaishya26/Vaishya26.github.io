import {
  webxr,
  backend,
  fullstack,
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
  webgl,
  docker,
  ajnalens,
  meta,
  starbucks,
  tesla,
  CSULA,
  remote_tool,
  flask_folium,
  ai_town,
  price_pilot,
  threejs,
} from "../assets";

export const navLinks = [
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

const services = [
  {
    title: "Full-Stack Developer",
    icon: fullstack,
  },
  {
    title: "WebXR Developer",
    icon: webxr,
  },
  {
    title: "Three.JS Developer",
    icon: threejs,
  },
  {
    title: "WebGL Developer",
    icon: webgl,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "WebGL",
    icon: webgl,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Intern",
    company_name: "Ajnalens",
    icon: ajnalens,
    iconBg: "#383E56",
    date: "July 2020 - September 2020",
    points: [
      "Implemented a prototype-based metaverse app for immersive collaborative learning with AjnaX AR glasses.",
      "Enabled visualization of lab experiments in a mixed reality environment, featuring 3D model manipulation, spatial audio, and 3D Annotations.",
      "Pioneered SFU (Selective Forward Unit) research in media Soup, enhancing network performance by 80% for multiple connections in an interactive virtual environment.",
      "Tech-stack: Three.JS, Node.JS, Python, web-XR, web-RTC, socket.io, AWS-EC2, Git, CI/CD.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "AjnaLens",
    icon: ajnalens,
    iconBg: "#383E56",
    date: "Sep 2020 - April 2023",
    points: [
      "Engineered a 3D model scaling algorithm for universal Field of View (FOV) compatibility with an accuracy of 95%.",
      "Developed enterprise support with AR-based Remote Assistance software, reducing response time of on-field assistance by 97% for enterprise clients like Tata-Steel, and Mahindra.",
      "Innovated real-time XR app streaming from Cloud servers to HMD with < 20ms motion-to-photon latency.",
      "Collaboratively worked with Qualcomm to build award-winning software on 5G XR-Streaming at IMC-2022.",
      "Architected cloud-based GPU resource allocation for real-time users using Kubernetes cluster helping the company to optimize cloud resources.",
      "Spearheaded a team of 5 full-stack developers and 2 interns, demonstrating effective leadership in overseeing various projects."
    ],
  },
  {
    title: "Research Assistant",
    company_name: "California State University, Los Angeles",
    icon: CSULA,
    iconBg: "#383E56",
    date: "October 2023 -  Present",
    points: [
      "I am working on project SPACE (Simulation-Based Pedagogical Approach for STEM Education) funded by National Science Foundation (NSF) which aims to solve advanced scientific problems using Computer Graphics, Simulations, and modeling.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Arpit joined our team as an intern and quickly demonstrated his exceptional professionalism through his outstanding agility, which ultimately led to his promotion as the team lead. One aspect of Arpit's work that I deeply appreciate is his openness to embracing novel ideas and approaches. He possesses a sincere enthusiasm for learning and consistently exhibits a keen interest in exploring innovative strategies. Arpit's remarkable agility in quickly grasping new concepts and seamlessly implementing them is truly praiseworthy.",
    name: "Kuldeep Kaur Makhija",
    designation: "Project Manager",
    company: "AjnaLens",
    image: "https://media.licdn.com/dms/image/D4D03AQFY40Y6LsaiJQ/profile-displayphoto-shrink_400_400/0/1684985939522?e=1709769600&v=beta&t=UvIJj6KwkfUw8EKxkacWrg2Oxo3jLVTjUeYpmQNdPso",
  }
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "3D Remote Collaboration",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "WebXR",
        color: "green-text-gradient",
      },
      {
        name: "WebRTC",
        color: "pink-text-gradient",
      },
    ],
    image: remote_tool,
    source_code_link: "https://github.com/Vaishya26/CS-5337/",
  },
  {
    name: "AI Price Pilot",
    description:
      "A tool specially designed for e-commerce companies for staying ahead in the market of competition.Easy viewable historical as well as real time dynamic data without any human intervention. Analyse and helps you to restructure your price strategy based on the competition",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Web Crawlers",
        color: "green-text-gradient",
      },
      {
        name: "CNN-KNN",
        color: "pink-text-gradient",
      },
    ],
    image: price_pilot,
    source_code_link: "https://github.com/Vaishya26/vistul_1",
  },
  {
    name: "Stanford AI Town",
    description:
      "The project aimed to create a miniature RPG-style virtual world where AI-controlled characters, powered by ChatGPT and custom code, simulate realistic behaviors, interactions, and decision-making",
    tags: [
      {
        name: "LLM",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: ai_town,
    source_code_link: "https://github.com/Vaishya26/Stanford-Town-AI-Project",
  },
  {
    name: "Flask-Folium",
    description:
      "An easiest way to plot maps using python(Flask Framework) and Folium without using any Cloud Api's.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Folium",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: flask_folium,
    source_code_link: "https://github.com/Vaishya26/Flask-Folium",
  },
];

export { services, technologies, experiences, testimonials, projects };
