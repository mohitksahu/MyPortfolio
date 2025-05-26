import React from 'react';

const AboutSection = () => {
  return (
    <section id="about-me" className="py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium font-fira-code">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">about-me</span>
          </h2>
          <div className="h-px bg-[#c778dd] flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <p className="text-[#abb2bf] font-fira-code mb-3 md:mb-4 text-sm sm:text-base">
              Hello, I'm Mohit Kumar Sahu!
            </p>
            <p className="text-[#abb2bf] font-fira-code mb-3 md:mb-4 text-sm sm:text-base">
              I'm a CS Student based in Odisha, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <p className="text-[#abb2bf] font-fira-code mb-4 md:mb-6 text-sm sm:text-base">
              I'm currently pursuing my Bachelor's degree in Computer Science, with a strong focus on web development, artificial intelligence, and data analysis. Over the past year, I've been actively working as a freelance developer, helping clients build responsive, modern, and user-friendly websites from the ground up. My skill set includes front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end tools such as Node.js, Express, and MongoDB. I also enjoy working with Python for data-driven tasks, including analysis and building basic machine learning models. I thrive in collaborative environments and love turning ideas into practical digital solutions. Whether working solo or with a team, I bring creativity, attention to detail, and a passion for learning the latest tech trends to every project I take on.
            </p>
          </div>

          <div className="relative mt-6 md:mt-0">
            {/* Simple About Image Section */}
            <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] relative border border-[#c778dd] rounded-md overflow-hidden bg-[#282c33] flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-fira-code text-[#c778dd]">{'<developer/>'}</div>
                <div className="text-lg sm:text-xl font-fira-code mt-2 text-white">Mohit Kumar Sahu</div>
              </div>
            </div>

            {/* Dot patterns */}
            <div className="absolute top-1/4 -left-4 hidden md:block">
              <div className="grid grid-cols-5 gap-1">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#abb2bf]"></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-1/4 right-0 hidden md:block">
              <div className="grid grid-cols-5 gap-1">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-[#abb2bf]"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
