import React from 'react';
import PropTypes from 'prop-types';
import './Radio.css'; // Create a CSS file to customize colors

const GenericRadioButton = ({
  label,
  name,
  id,
  defaultChecked,
  disabled,
  color,
  size,
  onChange,
  boxShadow
}) => {
  // Dynamically build class names for size
  const radioClass = `form-check-input ${size ? `radio-${size}` : ''}`;
console.log("radioClass", radioClass)
  // Inline style to dynamically set the radio button's color when checked
  const radioStyle = {
    '--radio-color': color, // This will set the color variable in CSS
    boxShadow: boxShadow
  };

  return (
    <div className="form-check">
      <input
        className={radioClass}
        type="radio"
        name={name}
        id={id}
        defaultChecked={defaultChecked}
        disabled={disabled}
        style={radioStyle} // Apply color via CSS variable
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

// Define prop types
GenericRadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string, // Custom color for radio button
  size: PropTypes.oneOf(['sm', 'md', 'lg']), // Size prop: small, medium, large
  onChange: PropTypes.func, // onChange handler for events
};

// Define default props
GenericRadioButton.defaultProps = {
  defaultChecked: false,
  disabled: false,
  color: '#0d6efd', // Default to Bootstrap primary color
  size: 'md', // Default size is medium
  onChange: () => {}, // Default no-op function for onChange
};

export default GenericRadioButton;
