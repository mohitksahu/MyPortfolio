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
    <div className="border-2 border-[#abb2bf] flex flex-col h-full rounded-md shadow-md hover:shadow-lg hover:shadow-[#c778dd]/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] overflow-hidden">
        <img
          src={image || 'https://via.placeholder.com/400x200?text=Project+Image'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x200?text=Project+Image';
          }}
        />
      </div>

      <div className="p-4 border-t-2 border-[#abb2bf] overflow-x-auto">
        <div className="flex flex-wrap gap-2 xs:gap-3 mb-3">
          {technologies.map((tech, index) => (
            <Tag key={index}>{tech}</Tag>
          ))}
        </div>
      </div><div className="p-3 xs:p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-xl xs:text-2xl sm:text-3xl font-medium text-white font-fira-code mb-2 sm:mb-3 line-clamp-2">{title}</h3>
        <p className="text-[#abb2bf] mb-3 xs:mb-4 sm:mb-5 font-fira-code text-sm xs:text-base sm:text-lg line-clamp-3">{description}</p>
        <div className="mt-auto flex gap-2 xs:gap-3 sm:gap-4 flex-wrap">
          {liveLink && (
            <Button
              variant="primary"
              className="py-2 px-3 xs:px-4 sm:py-3 sm:px-6 text-xs xs:text-sm sm:text-base"
              onClick={(e) => handleLinkClick(e, liveLink)}
            >
              <span className="font-fira-code font-medium">Live &lt;~&gt;</span>
            </Button>
          )}

          {cachedLink && (
            <Button
              variant="secondary"
              className="py-2 px-3 xs:px-4 sm:py-3 sm:px-6 text-xs xs:text-sm sm:text-base"
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