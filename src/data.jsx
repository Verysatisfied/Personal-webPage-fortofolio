import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in HTML & CSS, proficiently creating visually captivating and responsive websites to deliver the best possible user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Develop web applications that prioritize smooth user interactions and robust functionality, ensuring an interactive and dynamic user experience",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced in React,adept at crafting efficient and engaging front-end applications, with a keen focus on component-based architecture to enhance interactivity.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    url: "https://glow-shopping.netlify.app",
    github: "https://github.com/Verysatisfied/react-glowshopping",
    title: "Glow Shopping",
    text: "Created a React website that utilized Axios for retrieving mock products from a Dummy API. Successfully integrated CRUD (Create, Read, Update, Delete) operations and OAuth functionality from an OAuth-enabled website.",
  },
  {
    id: nanoid(),
    img: "https://www.thecocktaildb.com/images/media/drink/6ck9yi1589574317.jpg",
    url: "https://react-cocktail-github-c2a4e7.netlify.app",
    github: "https://github.com/Verysatisfied/temporary-react-cocktail",
    title: "Cocktail Search project",
    text: "Built a React website that seamlessly integrates Axios for retrieving and searching cocktails",
  },
  {
    id: nanoid(),
    img: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2216&q=80",
    url: "https://resplendent-cannoli-921f82.netlify.app/",
    github: "https://github.com/john-smilga",
    title: "Github User search",
    text: "Utilized the GitHub API to search for GitHub users and obtain information about their programming languages. FusionCharts was employed to generate visual charts. 0Auth used",
  },
];
