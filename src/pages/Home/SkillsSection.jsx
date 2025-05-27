import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, className = '', index = 0 }) => {
  return (
    <motion.div
      className={`border-2 border-[#abb2bf] rounded-md shadow-md ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px rgba(199, 120, 221, 0.2)",
        borderColor: "#c778dd"
      }}
    >
      <h3 className="text-white font-fira-code font-semibold text-lg sm:text-xl md:text-2xl p-4 sm:p-5">{title}</h3>
      <div className="border-t-2 border-[#abb2bf]"></div>
      <div className="p-4 sm:p-5">
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {skills.map((skill, skillIndex) => (
            <motion.span
              key={skillIndex}
              className="text-[#abb2bf] font-fira-code text-sm sm:text-base md:text-lg py-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + (skillIndex * 0.05) }}
              whileHover={{ color: "#ffffff", scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
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
    <section id="skills" className="py-10 md:py-20 bg-[#282C33]">
      <div className="container mx-auto px-5 sm:px-7 lg:px-10 max-w-7xl">
        <motion.div
          className="flex items-center mb-8 md:mb-14 flex-wrap sm:flex-nowrap"
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
            <span className="text-white">skills</span>
          </h2>
          <motion.div
            className="h-0.5 bg-[#c778dd] flex-grow ml-0 sm:ml-5 w-full sm:w-auto"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 relative">
          {/* Decorative elements */}
          <div className="absolute left-0 top-12 hidden md:block">
            <div className="grid grid-cols-5 gap-1.5">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#abb2bf]"></div>
              ))}
            </div>
          </div>

          <div className="absolute top-2/3 hidden md:block">
            <div className="grid grid-cols-5 gap-1.5">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#abb2bf]"></div>
              ))}
            </div>
          </div>          <div className="absolute left-[10%] top-1/4 hidden md:block">
            <div className="border-2 border-[#abb2bf] w-20 h-20"></div>
          </div>

          <div className="absolute left-[13%] bottom-1/4 hidden md:block">
            <div className="border-2 border-[#abb2bf] w-16 h-16"></div>
          </div>

          <div className="absolute left-16 bottom-16 hidden md:block">
            <div className="w-20 h-20">
              <svg viewBox="0 0 200 100" className="w-full h-full stroke-[#c778dd] fill-none stroke-2">
                <rect x="10" y="10" width="80" height="80" />
                <rect x="30" y="30" width="80" height="80" />
              </svg>
            </div>
          </div>          <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-8 lg:gap-10 justify-center">
            <div className="flex-1 hidden md:block" style={{ minWidth: '140px', maxWidth: '200px' }}>
              {/* Empty space for layout balance */}
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 flex-1">
              <SkillCategory
                title="Languages"
                skills={skillCategories[0].skills}
                className="w-full h-full"
              />
              <SkillCategory
                title="Databases"
                skills={skillCategories[1].skills}
                className="w-full h-full"
              />

              <SkillCategory
                title="Tools"
                skills={skillCategories[2].skills}
                className="w-full h-full"
              />
              <SkillCategory
                title="Other"
                skills={skillCategories[3].skills}
                className="w-full h-full"
              />

              <SkillCategory
                title="Frameworks"
                skills={skillCategories[4].skills}
                className="w-full h-full xs:col-span-2 lg:col-span-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;