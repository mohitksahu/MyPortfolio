import React from 'react';
import AnimatedCard from '../../components/common/AnimatedCard';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const viewAllProjects = (e) => {
    // Don't prevent default - allow the link to work
    // Also open the link in a new tab
    window.open(e.currentTarget.getAttribute('href'), '_blank');

    // Still scroll to projects section for users who stay on the page
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }; const projects = [
    {
      id: 1,
      image: null, // Image to be added in the future
      title: "ZoroChat",
      description: "A chatting website with friends from all over the world",
      technologies: ["HTML", "CSS", "JS", "Socket.io", "Node.js", "Express"],
      Repo: "#",

    },
    {
      id: 2,
      image: null, // Image to be added in the future
      title: "SoundAttendance System",
      description: "Marks attendace according to the sound",
      technologies: ["TeachableMachine", "HTML", "CSS", "Flask", "Oracle"],
      Repo: "#"
    },
    {
      id: 3,
      image: null, // Image to be added in the future
      title: "CowBehavior Analysis",
      description: "Detects the behavior & position of cow using ML",
      technologies: ["Flask", "Python", "OpenCV", "TensorFlow", "YoloV8n"],
      Repo: "#"
    }
  ];

  return (
    <section id="projects" className="py-10 md:py-20">
      <div className="container mx-auto px-5 sm:px-7 lg:px-10 max-w-7xl">
        <motion.div
          className="flex items-center mb-8 md:mb-12 flex-wrap sm:flex-nowrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-fira-code mb-3 sm:mb-0">
            <motion.span
              className="text-[#c778dd]"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              #
            </motion.span>
            <span className="text-white">projects</span>
          </h2>
          <motion.div
            className="h-0.5 bg-[#c778dd] flex-grow ml-0 sm:ml-5 w-full sm:w-auto"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />          <motion.a
            href="https://github.com/mohitksahu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg sm:text-xl font-fira-code font-medium mt-3 sm:mt-0 sm:ml-5 hover:text-[#c778dd]"
            onClick={viewAllProjects}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View all ~~&gt;
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">          {projects.map((project, index) => (
          <AnimatedCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            repoLink={project.Repo}
          />
        ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;