import React from 'react';
import Card from '../../components/common/Card';

const ProjectsSection = () => {
  const viewAllProjects = (e) => {
    e.preventDefault();
    // For now, this will just ensure the user stays in the projects section
    // but you can modify it to show more projects or go to a different section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const projects = [
    {
      id: 1,
      image: "",
      title: "ZoroChat",
      description: "A chatting website with friends from all over the world",
      technologies: ["HTML", "CSS", "JS", "Socket.io", "Node.js", "Express"],
      liveLink: "#",
      cachedLink: "#"
    },
    {
      id: 2,
      image: "",
      title: "SoundAttendance System",
      description: "Marks attendace according to the sound",
      technologies: ["Teachable Machine", "Node.js", "HTML", "SCSS", "Python", "Flask", "Oracle"],
      liveLink: "#"
    },
    {
      id: 3,
      image: "",
      title: "CowBehavior Analysis",
      description: "Detects the behavior & position of cow using ML",
      technologies: ["Flask", "Python", "OpenCV", "TensorFlow", "YoloV8n"],
      liveLink: "#"
    }
  ];
  return (<section id="projects" className="py-8 md:py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="flex items-center mb-6 md:mb-8 flex-wrap sm:flex-nowrap">
        <h2 className="text-2xl sm:text-3xl font-medium font-fira-code mb-2 sm:mb-0">
          <span className="text-[#c778dd]">#</span>
          <span className="text-white">projects</span>
        </h2>
        <div className="h-px bg-[#c778dd] flex-grow ml-0 sm:ml-4 w-full sm:w-auto"></div>
        <a href="#" className="text-white font-fira-code font-medium mt-2 sm:mt-0 sm:ml-4 hover:text-[#c778dd]" onClick={viewAllProjects}>
          View all ~~&gt;
        </a>
      </div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {projects.map(project => (
          <Card
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            liveLink={project.liveLink}
            cachedLink={project.cachedLink}
          />
        ))}
      </div>
    </div>
  </section>
  );
};

export default ProjectsSection;