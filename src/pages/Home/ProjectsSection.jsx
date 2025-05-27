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
  return (<section id="projects" className="py-10 md:py-20">
    <div className="container mx-auto px-5 sm:px-7 lg:px-10 max-w-7xl">
      <div className="flex items-center mb-8 md:mb-12 flex-wrap sm:flex-nowrap">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-fira-code mb-3 sm:mb-0">
          <span className="text-[#c778dd]">#</span>
          <span className="text-white">projects</span>
        </h2>
        <div className="h-0.5 bg-[#c778dd] flex-grow ml-0 sm:ml-5 w-full sm:w-auto"></div>
        <a href="#" className="text-white text-lg sm:text-xl font-fira-code font-medium mt-3 sm:mt-0 sm:ml-5 hover:text-[#c778dd]" onClick={viewAllProjects}>
          View all ~~&gt;
        </a>
      </div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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