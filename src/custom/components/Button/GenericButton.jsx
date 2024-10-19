import React from 'react';
import PropTypes from 'prop-types';
import './GenericButton.css'; // Optional CSS file for additional custom styles

const GenericButton = ({
  buttonType,
  size,
  label,
  onClick,
  disabled,
  block,
  withIcon,
  icon,
  variant,
}) => {
  // Dynamically create the class names for Bootstrap button and any additional props
  const buttonClass = `btn btn-${buttonType} ${size ? `btn-${size}` : ''} ${block ? 'btn-block' : ''}`;

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={variant ? { variant } : null}
    >
      {withIcon && icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
};

// Define prop types
GenericButton.propTypes = {
  buttonType: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'link',
  ]).isRequired, // Bootstrap button types
  size: PropTypes.oneOf(['sm', 'md', 'lg']), // Size prop: small, medium, large
  label: PropTypes.string.isRequired, // Button label text
  onClick: PropTypes.func, // onClick handler for button
  disabled: PropTypes.bool, // Whether the button is disabled
  block: PropTypes.bool, // Full-width button
  withIcon: PropTypes.bool, // Show icon alongside label
  icon: PropTypes.node, // Icon element for the button
  variant: PropTypes.string, // Custom style like background, text, etc.
};

// Define default props
GenericButton.defaultProps = {
  size: 'md', // Default size is medium
  onClick: () => {}, // Default onClick handler does nothing
  disabled: false, // By default, the button is not disabled
  block: false, // Default not block level
  withIcon: false, // Icon is optional
  icon: null, // No default icon
  variant: null, // No default variant
};

export default GenericButton;
