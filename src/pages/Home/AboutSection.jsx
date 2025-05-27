import React from 'react';

const AboutSection = () => {
  return (
    <section id="about-me" className="py-10 md:py-20">
      <div className="container mx-auto px-5 sm:px-7 lg:px-10 max-w-7xl">
        <div className="flex items-center mb-8 md:mb-14 flex-wrap sm:flex-nowrap">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-fira-code mb-3 sm:mb-0">
            <span className="text-[#c778dd]">#</span>
            <span className="text-white">about-me</span>
          </h2>
          <div className="h-0.5 bg-[#c778dd] flex-grow ml-0 sm:ml-5 w-full sm:w-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div>
            <p className="text-[#abb2bf] font-fira-code mb-4 md:mb-5 text-base sm:text-lg md:text-xl">
              Hello, I'm Mohit Kumar Sahu!
            </p>
            <p className="text-[#abb2bf] font-fira-code mb-4 md:mb-5 text-base sm:text-lg">
              I'm a CS Student based in Odisha, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </p>
            <p className="text-[#abb2bf] font-fira-code mb-5 md:mb-7 text-base sm:text-lg">
              I'm currently pursuing my Bachelor's degree in Computer Science, with a strong focus on web development, artificial intelligence, and data analysis. Over the past year, I've been actively working as a freelance developer, helping clients build responsive, modern, and user-friendly websites from the ground up. My skill set includes front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end tools such as Node.js, Express, and MongoDB. I also enjoy working with Python for data-driven tasks, including analysis and building basic machine learning models. I thrive in collaborative environments and love turning ideas into practical digital solutions. Whether working solo or with a team, I bring creativity, attention to detail, and a passion for learning the latest tech trends to every project I take on.
            </p>
          </div>

          <div className="relative mt-8 md:mt-0">
            {/* Simple About Image Section */}
            <div className="w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[450px] relative border-2 border-[#c778dd] rounded-md overflow-hidden bg-[#282c33] flex items-center justify-center">
              <div className="text-center px-4">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-fira-code text-[#c778dd]">{'<developer/>'}</div>
                <div className="text-lg xs:text-xl sm:text-2xl font-fira-code mt-3 text-white">Mohit Kumar Sahu</div>
              </div>
            </div>

            {/* Dot patterns */}
            <div className="absolute top-1/4 -left-4 hidden md:block">
              <div className="grid grid-cols-5 gap-1.5">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#abb2bf]"></div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-1/4 right-0 hidden md:block">
              <div className="grid grid-cols-5 gap-1.5">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#abb2bf]"></div>
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