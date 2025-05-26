import React from 'react';

const SkillCategory = ({ title, skills, className = '' }) => {
  return (
    <div className={`border border-[#abb2bf] ${className}`}>
      <h3 className="text-white font-fira-code font-semibold text-sm sm:text-base p-1.5 sm:p-2">{title}</h3>
      <div className="border-t border-[#abb2bf]"></div>
      <div className="p-1.5 sm:p-2">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="text-[#abb2bf] font-fira-code text-xs sm:text-sm">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C++", "Python", "JavaScript"]
    },
    {
      title: "Databases",
      skills: ["Oracle", "MYSQL", "MongoDB"]
    },
    {
      title: "Tools",
      skills: ["VSCode", "Git", "Postman", "AWS", "OpenCV", "Github", "Vercel"]
    },
    {
      title: "Other",
      skills: ["HTML", "CSS", "EJS", "SCSS", "REST", "FastAPI"]
    },
    {
      title: "Frameworks",
      skills: ["React", "Tensorflow", "Pytorch", "DJango", "Node.js", "Express.js"]
    }
  ];
  return (
    <section id="skills" className="py-8 md:py-16 bg-[#282C33]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium font-fira-code">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">skills</span>
          </h2>
          <div className="h-px bg-[#c778dd] flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 gap-6 relative">
          {/* Decorative elements */}
          <div className="absolute left-0 top-12 hidden md:block">
            <div className="grid grid-cols-5 gap-1">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#abb2bf]"></div>
              ))}
            </div>
          </div>

          <div className="absolute top-2/3 hidden md:block">
            <div className="grid grid-cols-5 gap-1">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#abb2bf]"></div>
              ))}
            </div>
          </div>          <div className="absolute left-[10%] top-1/4 hidden md:block">
            <div className="border border-[#abb2bf] w-16 h-16"></div>
          </div>

          <div className="absolute left-[13%] bottom-1/4 hidden md:block">
            <div className="border border-[#abb2bf] w-12 h-12"></div>
          </div>

          <div className="absolute left-16 bottom-16 hidden md:block">
            <div className="w-16 h-16">
              <svg viewBox="0 0 200 100" className="w-full h-full stroke-[#c778dd] fill-none stroke-2">
                <rect x="10" y="10" width="80" height="80" />
                <rect x="30" y="30" width="80" height="80" />
              </svg>
            </div>
          </div>          <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 justify-center">
            <div className="flex-1 hidden md:block" style={{ minWidth: '120px', maxWidth: '180px' }}>
              {/* Empty space for layout balance */}
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center md:justify-end flex-1">
              <SkillCategory
                title="Languages"
                skills={skillCategories[0].skills}
                className="min-w-[140px] sm:min-w-[170px] w-full md:w-auto"
              />
              <SkillCategory
                title="Databases"
                skills={skillCategories[1].skills}
                className="min-w-[140px] sm:min-w-[170px] w-full md:w-auto"
              />

              <SkillCategory
                title="Tools"
                skills={skillCategories[2].skills}
                className="min-w-[140px] sm:min-w-[170px] w-full md:w-auto"
              />
              <SkillCategory
                title="Other"
                skills={skillCategories[3].skills}
                className="min-w-[140px] sm:min-w-[170px] w-full md:w-auto"
              />

              <SkillCategory
                title="Frameworks"
                skills={skillCategories[4].skills}
                className="min-w-[140px] sm:min-w-[170px] w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;