// src/components/common/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * A reusable Button component with customizable styles and behavior.
 * @param {Object} props - Props for the Button component.
 * @param {string} props.label - The text displayed on the button.
 * @param {string} props.variant - The style variant of the button ('primary', 'secondary', 'danger').
 * @param {string} props.size - The size of the button ('small', 'medium', 'large').
 * @param {boolean} props.disabled - Whether the button is disabled.
 * @param {Function} props.onClick - The function to handle button clicks.
 * @param {string} props.type - The type of the button ('button', 'submit', 'reset').
 * @param {string} props.className - Additional custom classes for the button.
 */
const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  const buttonClasses = classNames(
    'rounded focus:outline-none focus:ring transition duration-150 ease-in-out',
    {
      'bg-brand-primary text-white hover:bg-opacity-80 focus:ring-brand-primary':
        variant === 'primary',
      'bg-brand-secondary text-white hover:bg-opacity-80 focus:ring-brand-secondary':
        variant === 'secondary',
      'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600': variant === 'danger',
      'px-4 py-2 text-sm': size === 'small',
      'px-6 py-3 text-base': size === 'medium',
      'px-8 py-4 text-lg': size === 'large',
      'opacity-50 cursor-not-allowed': disabled,
    },
    className
  );

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Define PropTypes for better type checking
Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;
