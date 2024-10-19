import React from 'react';
import PropTypes from 'prop-types';
import './GenericTextarea.css'; // Optional for additional styling

const GenericTextarea = ({
  label,
  id,
  rows,
  value,
  onChange,
  placeholder,
  disabled,
  width,
  height,
  backgroundColor,
  fontSize,
  labelColor,
  borderRadius,
  border
}) => {
  // Inline styles for the textarea based on props
  const textareaStyles = {
    width,
    height,
    backgroundColor,
    fontSize,
    borderRadius,
    border
  };

  return (
    <div className="generic-textarea-container">
      {label && (
        <label htmlFor={id} className="form-label" style={{ color: labelColor }}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className="form-control"
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={textareaStyles}
      />
    </div>
  );
};

// Define prop types
GenericTextarea.propTypes = {
  label: PropTypes.string, // Label for the textarea
  id: PropTypes.string.isRequired, // Unique ID for the textarea
  rows: PropTypes.number, // Number of rows in the textarea
  value: PropTypes.string.isRequired, // Current value of the textarea
  onChange: PropTypes.func.isRequired, // onChange handler for input events
  placeholder: PropTypes.string, // Placeholder text
  disabled: PropTypes.bool, // Disabled state
  width: PropTypes.string, // Width of the textarea
  height: PropTypes.string, // Height of the textarea
  backgroundColor: PropTypes.string, // Background color of the textarea
  fontSize: PropTypes.string, // Font size for the textarea content
  labelColor: PropTypes.string, // Label text color
  borderRadius: PropTypes.string, // Border radius for the textarea
};

// Define default props
GenericTextarea.defaultProps = {
  rows: 3,
  placeholder: '',
  disabled: false,
  width: '100%',
  height: 'auto',
  backgroundColor: '#fff', // Default background color
  fontSize: '16px', // Default font size
  labelColor: '#000', // Default label color
  borderRadius: '4px', // Default border radius
};

export default GenericTextarea;
