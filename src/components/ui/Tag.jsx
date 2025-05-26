import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ children, className = '' }) => {
  return (
    <span className={`inline-block text-[#abb2bf] text-xs sm:text-sm font-fira-code ${className}`}>
      {children}
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Tag;