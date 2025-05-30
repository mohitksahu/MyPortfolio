import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Hero image animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    },
    hover: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Logo rotation animation
  const rotateAnimation = {
    rotate: 360,
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }
  };

  // Badge animation
  const badgeAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  // Dot animation
  const dotVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const singleDotVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring"
      }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacts');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="py-10 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-7 lg:px-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white font-fira-code mb-6 leading-snug"
              variants={textVariants}
            >
              Mohit is a <span className="text-[#c778dd]">web developer</span> and
              <span className="text-[#c778dd]"> AI Enthusiast</span>
            </motion.h1>

            <motion.p
              className="text-[#abb2bf] mb-8 md:mb-10 font-fira-code text-base sm:text-lg md:text-xl"
              variants={textVariants}
            >
              He crafts responsive websites integrated with ML where technologies meet creativity
            </motion.p>

            <motion.div
              variants={textVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" className="py-3 px-6 text-base sm:text-lg" onClick={scrollToContact}>
                <span className="font-fira-code font-medium">Contact me!!</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-8 md:mt-0 order-1 md:order-2"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            whileHover="hover"
          >
            <motion.img
              src="/images/img_image_386x457.png"
              alt="Mohit"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto object-contain"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />

            {/* Logo overlay */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block">
              <motion.img
                src="/images/img_logo.svg"
                alt="Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36"
                animate={rotateAnimation}
              />
            </div>

            {/* Dot pattern */}
            <motion.div
              className="absolute right-0 bottom-0 hidden sm:block"
              variants={dotVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="grid grid-cols-5 gap-1.5">
                {[...Array(25)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#abb2bf]"
                    variants={singleDotVariant}
                    whileHover={{ scale: 1.5, backgroundColor: "#c778dd" }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Currently working on badge */}
            <motion.div
              className="absolute bottom-0 left-0 border border-[#abb2bf] bg-[#282c33] py-2 px-3 md:py-3 md:px-4 flex items-center text-sm md:text-base max-w-[180px] sm:max-w-[240px] md:max-w-none"
              animate={badgeAnimation}
              whileHover={{
                scale: 1.05,
                borderColor: "#c778dd",
                boxShadow: "0px 0px 8px rgba(199, 120, 221, 0.5)"
              }}
            >
              <motion.div
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-[#c778dd] border border-[#c778dd] mr-2 sm:mr-3 flex-shrink-0"
                animate={{
                  scale: [1, 1.2, 1],
                  borderRadius: ["0%", "50%", "0%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <p className="text-[#abb2bf] font-fira-code text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">
                Currently working on <span className="text-white font-semibold">Portfolio</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
