import React from 'react';
import PropTypes from 'prop-types';
import './GenericRange.css'; // Optional CSS for custom styling

const GenericRange = ({
  label,
  id,
  min,
  max,
  step,
  value,
  onChange,
  disabled,
  width,
  height,
  labelColor,
  rangeColor,
  trackColor,
  thumbColor,
}) => {
  // Inline style for custom slider appearance
  const rangeStyles = {
    width,
    height,
    background: trackColor,
    '--range-thumb-color': thumbColor,
    '--range-fill-color': rangeColor,
  };

  return (
    <div className="generic-range-container">
      {label && (
        <label htmlFor={id} className="form-label" style={{ color: labelColor }}>
          {label}
        </label>
      )}
      <input
        type="range"
        className="form-range"
        id={id}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={rangeStyles}
      />
    </div>
  );
};

// Define prop types
GenericRange.propTypes = {
  label: PropTypes.string, // Label for the slider
  id: PropTypes.string.isRequired, // Unique ID for input and label
  min: PropTypes.number, // Minimum range value
  max: PropTypes.number, // Maximum range value
  step: PropTypes.number, // Step value between range
  value: PropTypes.number.isRequired, // Current value of the range
  onChange: PropTypes.func.isRequired, // onChange handler for input events
  disabled: PropTypes.bool, // Disabled state
  width: PropTypes.string, // Width of the range slider
  height: PropTypes.string, // Height of the range slider
  labelColor: PropTypes.string, // Custom color for the label
  rangeColor: PropTypes.string, // Custom color for the range fill
  trackColor: PropTypes.string, // Custom color for the range track
  thumbColor: PropTypes.string, // Custom color for the range thumb
};

// Define default props
GenericRange.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  width: '100%',
  height: '4px',
  labelColor: '#000', // Default label color
  rangeColor: '#0d6efd', // Default Bootstrap primary color
  trackColor: '#ddd', // Default track color
  thumbColor: '#0d6efd', // Default thumb color
};

export default GenericRange;
