import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';
import Tag from '../ui/Tag';

const Card = ({
  image,
  title,
  description,
  technologies = [],
  liveLink = null,
  cachedLink = null
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
    // Otherwise, let the link navigate normally
  }; return (
    <div className="border border-[#abb2bf] flex flex-col h-full">
      <div className="h-[150px] sm:h-[180px] md:h-[200px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-2 border-t border-[#abb2bf]">
        <div className="flex flex-wrap gap-2 mb-2">
          {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div>      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-xl sm:text-2xl font-medium text-white font-fira-code mb-1 sm:mb-2">{title}</h3>
        <p className="text-[#abb2bf] mb-3 sm:mb-4 font-fira-code text-sm sm:text-base">{description}</p>        <div className="mt-auto flex gap-2 sm:gap-4 flex-wrap">
          {liveLink && (
            <Button
              variant="primary"
              className="py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm"
              onClick={(e) => handleLinkClick(e, liveLink)}
            >
              <span className="font-fira-code font-medium">Live &lt;~&gt;</span>
            </Button>
          )}

          {cachedLink && (
            <Button
              variant="secondary"
              className="py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm"
              onClick={(e) => handleLinkClick(e, cachedLink)}
            >
              <span className="font-fira-code font-medium">Cached &gt;=</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
  liveLink: PropTypes.string,
  cachedLink: PropTypes.string,
};

export default Card;