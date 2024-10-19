import React from "react";
import PropTypes from "prop-types";
import "./GenericSelect.css"; // Make sure your CSS file is set up correctly
import { FaChevronDown } from 'react-icons/fa';

const GenericSelect = ({
  options,
  width,
  height,
  placeholder,
  boxShadow,
  onChange,
  value,
  withIcon,
  boxShadowOnFocus
}) => {
  return (
    <div
      className={`custom-select-container ${boxShadow ? "box-shadow" : ""}`} // Add a conditional class for box-shadow
      style={{ width, height }}
    >
      {withIcon && (
        <span className="select-icon">
          <FaChevronDown />
        </span>
      )}
      <select
        className="form-select"
        aria-label={placeholder}
        onChange={onChange}
        value={value}
        style={{ width: "100%", height: "100%", appearance: "none", paddingRight: "30px" }} // Add padding for the icon
      >
        <option value="" disabled>
          {placeholder || "Select an option"}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

// Define prop types
GenericSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  placeholder: PropTypes.string,
  boxShadow: PropTypes.string, // Custom box shadow passed as a string
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  withIcon: PropTypes.bool, // Controls whether the icon shows
};

// Define default props
GenericSelect.defaultProps = {
  width: "100%",
  height: "40px",
  placeholder: "Select an option",
  withIcon: false, // Default is no icon
};

export default GenericSelect;
