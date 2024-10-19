import React from 'react';
import PropTypes from 'prop-types';
import './GenericCheckbox.css'; // Create a CSS file for styles

const GenericCheckbox = ({
  label,
  name,
  id,
  defaultChecked,
  disabled,
  checkColor,
  focusColor,
  size,
  onChange,
}) => {
  // Dynamically build class names for size
  const checkboxClass = `form-check-input ${size ? `checkbox-${size}` : ''}`;

  // Inline styles for checked and focus colors
  const checkboxStyle = {
    '--checkbox-check-color': checkColor,
    '--checkbox-focus-color': focusColor,
  };

  return (
    <div className="form-check">
      <input
        className={checkboxClass}
        type="checkbox"
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        disabled={disabled}
        style={checkboxStyle} // Apply colors using CSS variables
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

// Define prop types
GenericCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  checkColor: PropTypes.string, // Color for the checkbox when checked
  focusColor: PropTypes.string, // Color when the checkbox is focused
  size: PropTypes.oneOf(['sm', 'md', 'lg']), // Size prop: small, medium, large
  onChange: PropTypes.func, // onChange handler for events
};

// Define default props
GenericCheckbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  checkColor: '#0d6efd', // Default to Bootstrap primary color
  focusColor: '#80bdff', // Default Bootstrap focus color
  size: 'md', // Default size is medium
  onChange: () => {}, // Default no-op function for onChange
};

export default GenericCheckbox;
