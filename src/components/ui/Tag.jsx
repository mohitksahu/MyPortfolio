import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ children, className = '' }) => {
  return (
    <span className={`inline-block text-[#abb2bf] px-3 py-1.5 border-2 border-[#abb2bf] rounded-md text-xs sm:text-sm md:text-base font-fira-code hover:border-[#c778dd] hover:text-white transition-colors duration-200 ${className}`}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Tag;