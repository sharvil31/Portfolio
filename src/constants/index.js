
import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import projects4 from "../assets/projects4.webp";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";


export const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  // { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m SHARVIL AMBURLE, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "My goal is to master the art of front end development, constantly honing my skills in front-end technologies & frameworks",
  resumeLinkText: "Download Resume",
  resumeLink: "/Sharvil Resume.pdf",
};


export const PROJECTS = [
  {
    name: "Tic Tac Toe Game",
    description: "Play against other player or against computer",
    image: projects1,
    githubLink: "https://github.com/sharvil31/Tic-Tac-Toe-Game",
    liveLink: "https://tic-tac-toe-game-by-sharvil31.netlify.app"
  }, 
  {
    name: "Task Manager App",
    description: "Perform CRUD, search & sort operations on new or existing tasks",
    image: projects2,
    githubLink: "https://github.com/sharvil31/Task-Manager",
    liveLink: "https://task-manager-app-by-sharvil31.netlify.app/"
  }, 
  {
    name: "Personal Portfolio Website",
    description: "Portfolio with interactive animations and a responsive design.",
    image: projects3,
    githubLink: "https://github.com/sharvil31/Portfolio",
    liveLink: "https://sharvil-portfolio.netlify.app/"
  }, 
  {
    name: "REST Countries API",
    description: "Fetch and display country data dynamically.",
    image: projects4,
    githubLink: "https://github.com/sharvil31/Rest-countries",
    liveLink: "https://rest-countries-api-by-sharvil.netlify.app/"
  }, 
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. As a fresher, i have created numerous projects, always ensuring high performance and seamless user experiences.",
    "I specialize in using Languages like HTML5, CSS3, JavaScript with Libraries & Frameworks such as ReactJS, Tailwind CSS and Framer Motion to create visually stunning, responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "November 2024 — October 2024",
    title: "Web Developer Intern at Prodigy Infotech",
    location: "Remote",
    description: [
      "Completed web development tasks ranging from low to high level.",
      "Gained hands-on experience & develop valuable skills",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
]


export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "amburlesarvil@gmail.com",
  socialLinks: [
    {
      platform: "Email",
      url: `mailto: ${"amburlesarvil@gmail.com"}`,
      ariaLabel: "Follow me on Twitter",
      icon: "RiMailFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/sharvil31",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/sharvil-amburle/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Sharvil Amburle. All rights reserved.`,
};
