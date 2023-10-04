"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description:
      "This is my portfolio website made with ReactJS and Sanity studio. It is deployed live using Netlify.",
    image: "/images/projects/Shiv-Portfolio.png",
    skills: ["React.js", "Sanity.IO Studio"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shiv-git1/sanity-portfolio",
    previewUrl: "https://shivshakti-portfolio.netlify.app/",
  },
  {
    id: 2,
    title: "Discord Clone",
    description:
      "This is a discord-clone made with React, Redux and Firebase for database storage and to handle google login.",
    image: "/images/projects/discord-logo.png",
    skills: ["React.js", "Redux", "Firebase"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shiv-git1/discord-clone",
    previewUrl: "https://discord-clone-84c74.web.app/",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "This is a spotify-clone web app made with React and is deployed in firebase.This app uses Spotify API for login.",
    image: "/images/projects/spotify-logo.png",
    skills: ["React.js", "Firebase"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shiv-git1/spotify-clone",
    previewUrl: "https://spotify-clone-341de.web.app/",
  },
  {
    id: 4,
    title: "Twitter Clone",
    description:
      "This is a very basic twitter-clone project made with ReactJS and Firebase as database. The web app is also hosted on firebase.",
    image: "/images/projects/twitter-logo.png",
    skills: ["React.js", "Firebase"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shiv-git1/twitter-clone",
    previewUrl: "https://twitter-clone-480aa.web.app/",
  },
  {
    id: 5,
    title: "Modal Gallery",
    description:
      "This is a simple responsive image gallery, that is made with ReactJS, which shows modal pop-up on clicking the image and closes only on clicking the close button.",
    image: "/images/projects/modal-gallery.png",
    skills: ["React.js", "Netlify"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shiv-git1/modal-gallery",
    previewUrl: "https://dazzling-golick-33922f.netlify.app/",
  },
  {
    id: 6,
    title: "Amazon Clone",
    description:
      "This is a e-commerece website similar to Amazon. This is made using MERN Stack and Redux.",
    image: "/images/projects/amazon-logo.png",
    skills: ["React.js", "MongoDB", "ExpressJS", "NodeJS", "Redux"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shiv-git1/arazonareact",
    previewUrl: "https://github.com/Shiv-git1/arazonareact",
  },
  {
    id: 7,
    title: "RTK Query with Typescript",
    description:
      "This is a CRUD app made with ReactJS using RTK Query and Typescript.",
    image: "/images/projects/redux-logo.png",
    skills: ["React.js", "Redux", "Typescript"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shiv-git1/rtkQuery-ts",
    previewUrl: "https://github.com/Shiv-git1/rtkQuery-ts",
  },
  {
    id: 8,
    title: "NodeJS Task Manager",
    description:
      "This is a CRUD app made with NodeJS using ExpressJS and MongoDB.",
    image: "/images/projects/nodejs-logo.png",
    skills: ["Node.js", "Express.js", "MongoDB"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shiv-git1/task-manager-nodejs",
    previewUrl: "https://github.com/Shiv-git1/task-manager-nodejs",
  },
  {
    id: 9,
    title: "NextJS Prompt Generator",
    description:
      "This is a CRUD app made with NodeJS using ExpressJS and MongoDB.",
    image: "/images/projects/nextjs-logo.png",
    skills: ["Next.js", "MongoDB", "Tailwind"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shiv-git1/nextjs-share-prompts",
    previewUrl: "https://github.com/Shiv-git1/nextjs-share-prompts",
  },
  {
    id: 10,
    title: "React Native Mobile App",
    description:
      "This is a mobile app made using React Native showing all kinds of screen navigations.",
    image: "/images/projects/react-native.png",
    skills: ["React Native"],
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Shiv-git1/native-screen-navigations",
    previewUrl: "https://github.com/Shiv-git1/native-screen-navigations",
  },
  {
    id: 11,
    title: "MERN Multi-step Login",
    description:
      "This is React app showing multi-step login, made using MERN Stack.",
    image: "/images/projects/multi-step.png",
    skills: ["React.js", "MongoDB", "ExpressJS", "NodeJS"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shiv-git1/multi-step-login",
    previewUrl: "https://github.com/Shiv-git1/multi-step-login",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        />

        <ProjectTag
          onClick={handleTagChange}
          tag="Web"
          isSelected={tag === "Web"}
        />

        <ProjectTag
          onClick={handleTagChange}
          tag="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              skills={project.skills}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
