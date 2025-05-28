/**
 * Button Component
 * 
 * A reusable button component with different style variants.
 * Used throughout the application for consistent button styling.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button component with configurable variants
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler function
 * @param {string} props.variant - Style variant ('primary' or 'secondary')
 * @param {string} props.className - Additional CSS classes
 * @returns {React.ReactElement} Button component
 */
const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  // Base styling applied to all buttons
  const baseClasses = 'font-medium transition-colors duration-200 focus:outline-none rounded-md shadow-sm';

  // Style variations based on the variant prop
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