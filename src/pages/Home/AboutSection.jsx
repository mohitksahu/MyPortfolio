import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  // Text animation variants for paragraphs
  const paragraphContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    },
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="about-me" className="py-10 md:py-20">
      <div className="container mx-auto px-5 sm:px-7 lg:px-10 max-w-7xl">
        <div className="flex items-center mb-8 md:mb-14 flex-wrap sm:flex-nowrap">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-medium font-fira-code mb-3 sm:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="text-[#c778dd]"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              #
            </motion.span>
            <span className="text-white">about-me</span>
          </motion.h2>
          <motion.div
            className="h-0.5 bg-[#c778dd] flex-grow ml-0 sm:ml-5 w-full sm:w-auto"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <motion.div
            variants={paragraphContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.p
              className="text-[#abb2bf] font-fira-code mb-4 md:mb-5 text-base sm:text-lg md:text-xl"
              variants={paragraphVariants}
              whileHover="hover"
            >
              Hello, I'm Mohit Kumar Sahu!
            </motion.p>

            <motion.p
              className="text-[#abb2bf] font-fira-code mb-4 md:mb-5 text-base sm:text-lg"
              variants={paragraphVariants}
              whileHover="hover"
            >
              I'm a CS Student based in Odisha, India. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
            </motion.p>

            <motion.p
              className="text-[#abb2bf] font-fira-code mb-5 md:mb-7 text-base sm:text-lg"
              variants={paragraphVariants}
              whileHover="hover"
            >
              I'm currently pursuing my Bachelor's degree in Computer Science, with a strong focus on web development, artificial intelligence, and data analysis. My skill set includes front-end technologies like HTML, CSS, JavaScript, and React, as well as back-end tools such as Node.js, Express, and MongoDB.
            </motion.p>

            <motion.p
              className="text-[#abb2bf] font-fira-code mb-5 md:mb-7 text-base sm:text-lg"
              variants={paragraphVariants}
              whileHover="hover"
            >
              I also enjoy working with Python for data-driven tasks, including analysis and building basic machine learning models. Whether working solo or with a team, I bring creativity, attention to detail, and a passion for learning the latest tech trends to every project I take on.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Simple About Image Section */}
            <div className="w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[450px] relative border-2 border-[#c778dd] rounded-md overflow-hidden bg-[#282c33] flex items-center justify-center">
              <motion.div
                className="text-center px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.div
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-fira-code text-[#c778dd]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {'<developer/>'}
                </motion.div>
                <div className="text-lg xs:text-xl sm:text-2xl font-fira-code mt-3 text-white"></div>
              </motion.div>
            </div>

            {/* Dot patterns */}
            <motion.div
              className="absolute top-1/4 -left-4 hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="grid grid-cols-5 gap-1.5">
                {[...Array(25)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#abb2bf]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.7 + (i * 0.01), duration: 0.3 }}
                    whileHover={{ scale: 1.5, backgroundColor: "#c778dd" }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 right-0 hidden md:block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="grid grid-cols-5 gap-1.5">
                {[...Array(25)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#abb2bf]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.9 + (i * 0.01), duration: 0.3 }}
                    whileHover={{ scale: 1.5, backgroundColor: "#c778dd" }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;