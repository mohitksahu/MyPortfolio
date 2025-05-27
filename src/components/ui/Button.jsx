import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'font-medium transition-colors duration-200 focus:outline-none rounded-md shadow-sm';

  const variants = {
    primary: 'border-2 border-[#c778dd] text-white hover:bg-[#c778dd]/10',
    secondary: 'border-2 border-[#abb2bf] text-[#abb2bf] hover:bg-[#abb2bf]/10',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

export default Button;