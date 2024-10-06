"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "At first, I thought it was just a dream",
    description: "Just a dream (Nelly - Youtube)",
    image: "/images/projects/us.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.youtube.com/watch?v=BFgQk2syvTA",
  },
  {
    id: 2,
    title: "Then I complimented you, but you blushed, coz it's just the way you are",
    description: "Just the way you are (Bruno Mars)",
    image: "/images/projects/you.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.youtube.com/watch?v=u7XjPmN-tHw",
  },
  {
    id: 3,
    title: "And now I want to Just sail away with you",
    description: "Just go (Lionel Richie)",
    image: "/images/projects/menyou.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.youtube.com/watch?v=gjZ8fYeLbTE",
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
        My Picks for you
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Allow me to express it via these Songs"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
