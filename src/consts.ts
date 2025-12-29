import type { Header, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";

import ladder from "./assets/projects/ladder.png";
import stethoscope from "./assets/projects/stethoscope.png"
import mapping from "./assets/projects/mapping.png"

export const SITE_URL = "https://D4MV.github.io/portfolio/";

export const meta = {
  about: {

    title: "Diego Moraga",
    description:
      "Hola! Soy Diego Moraga, un Analista Programador y Desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras.",
  },
  projects: {
    title: "Projects | Diego Moraga",
    description:
      "Aquí están algunos de mis proyectos — cosas que he construido, experimentado y disfrutado crear.",
  },

};

export const header: Header = { logoTitle: "DM" };


export const about: About = {

  headLine: "Hola, soy <span class='fancy-highlight'>Diego Moraga</span>",
  tagLine: "Analista Programador / Desarrollador Full Stack",
  profilePic: ProfilePic,

  description:
    "Soy un titulado de <u>Analista Programador</u> graduado de Inacap y egresado de <u>Ingeniería en Informatica</u> interesado en buscar nuevos problemas que resolver. Actualmente, me enfoco en el desarrollo de soluciones con <u>React y NestJs</u>. Además, me encuentro reliazando cursos para certificaciones de AWS y Azure, buscando ser un mejor profesional. ",
  links: [

    { icon: "Github", href: "https://github.com/D4MV" },
    { icon: "Linkedin", href: "https://www.linkedin.com/in/diego-moraga-valdes-44a962295" },
  ],
  resumeHref: "/portafolio/cv.pdf",
  workExperience: [
    {
      title: "Soporte TI ",
      timeline: "Abril 2025 - Actual 2025",
      company: "INACAP ",
      description:
        "Soporte TI a usuarios internos, resolución de incidentes.",
    },
  ],
  education: [
    {
      title: "Analista Programador",
      timeline: "Marzo 2021 - Diciembre 2023",
      institution: "INACAP",
      description:
        "Estudié los fundamentos básicos de la informática, incluidos lenguajes de programación, estructuras de datos, algoritmos, sistemas operativos y redes, con experiencia práctica en python, TypeScript y Linux.",
    },
    {
      title: "Ingeniería en Informática (En curso)",
      timeline: "Enero 2024 - Presente",
      institution: "INACAP",
      description:
        "Actualmente cursando la carrera de Ingeniería en Informática en INACAP, profundizando en diversas áreas, cómo ciencia de datos, tecnologías cloud y desarrollo de software.",
    }
  ],
  getInTouch:
    "Puedes contactarme al correo <a href='mailto:diego.moragavaldes2002@gmail.com'>diego.moragavaldes2002@gmail.com</a> o conectarte conmigo en alguna de mis redes sociales.",
};

export const projects: Project[] = [
  {
    logoImage: ladder,
    title: "Landing Page Tricahue",
    techs: ["Astro", "TailwindCSS", "Cloudflare Pages", "git-hub"],
    description:
      "Landing page para Tricahue, una empresa dedicada al arriendo de escaleras en Chile.",
      liveHref:"https://tricahue.com/",
  },
  {
    logoImage: stethoscope,
    title: "MediApp",
    techs: ["React+vite", "Nestjs", "Prisma", "AWS", "PostgreSQL"],
    description:
      "Sitema de reserva de horas médicas con enfoque SaaS, permitiendo a clinicas y doctores independientes gestionar sus agendas y citas médicas de manera eficiente.",
    sourceHref: "https://github.com/D4MV/proyectoIntegracion-Front",
    liveHref: "",
  },
  {
    logoImage: mapping,
    title: "Terratrack",
    techs: ["React+vite", "Nestjs", "Prisma", "AZURE", "PostgreSQL", "Google Maps API"],
    description:
      "Sistema de diseño de huertos y Gestión agrícola para optimizar el uso de terrenos y las tareas administrativas.",
    sourceHref: "https://github.com/D4MV/front-end_terratrack",
    liveHref: "",
  },
];

