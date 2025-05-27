import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
import { motion } from 'framer-motion';

const AnimatedCard = ({
    image,
    title,
    description,
    technologies = [],
    repoLink = null
}) => {
    const handleLinkClick = (e, link) => {
        // If it's an anchor to a section within the page, use smooth scrolling
        if (link && link.startsWith('#')) {
            e.preventDefault();
            const targetId = link.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        // If it's an external link (not starting with #), open in new tab
        else if (link) {
            e.preventDefault();
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            className="border-2 border-[#abb2bf] flex flex-col h-full rounded-md shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            whileHover={{
                y: -8,
                boxShadow: "0 10px 25px rgba(199, 120, 221, 0.2)",
                borderColor: "#c778dd"
            }}
        >            <motion.div
            className="h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden bg-[#1e2128] flex items-center justify-center"
            whileHover={{ backgroundColor: "#282c33" }}
            transition={{ duration: 0.3 }}
        >
                {image ? (
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    />
                ) : (
                    <div className="text-center p-4">
                        <div className="text-[#c778dd] text-4xl mb-2">&lt;/&gt;</div>
                        <p className="text-[#abb2bf] text-sm">Project image coming soon</p>
                    </div>
                )}
            </motion.div>

            <div className="p-4 border-t-2 border-[#abb2bf] overflow-x-auto">
                <div className="flex flex-wrap gap-2 xs:gap-3 mb-3">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                            <Tag>{tech}</Tag>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="p-3 xs:p-4 sm:p-5 flex flex-col flex-grow">
                <motion.h3
                    className="text-xl xs:text-2xl sm:text-3xl font-medium text-white font-fira-code mb-2 sm:mb-3 line-clamp-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    {title}
                </motion.h3>

                <p className="text-[#abb2bf] mb-3 xs:mb-4 sm:mb-5 font-fira-code text-sm xs:text-base sm:text-lg line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto flex gap-2 xs:gap-3 sm:gap-4 flex-wrap">
                    {repoLink && (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                variant="primary"
                                className="py-2 px-3 xs:px-4 sm:py-3 sm:px-6 text-xs xs:text-sm sm:text-base"
                                onClick={(e) => handleLinkClick(e, repoLink)}
                            >
                                <span className="font-fira-code font-medium">GitHub &lt;/&gt;</span>
                            </Button>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

AnimatedCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    repoLink: PropTypes.string,
};

export default AnimatedCard;
