import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import "./GenericInputField.css"
const GenericInputField = ({
  label,
  type,
  placeholder,
  controlId,
  labelColor,
  width,
  height,
  padding,
  margin,
  fontFamily,
  boxShadow,
  autoFocus,
  cursorBlink,
  customPlaceholderClass,
  backgroundColor,
  border
}) => {
  const labelStyle = {
    color: labelColor,
    fontFamily: fontFamily,
    padding: padding,
    margin: margin,
  };

  const inputStyle = {
    width: width,
    height: height,
    boxShadow: boxShadow,
    backgroundColor:backgroundColor,
    margin: margin,
    border: border,
    // "::placeholder": {
    //   color: placeholderColor,
    //   fontSize: placeholderFontSize,
    // },
    caretColor: cursorBlink === "false" ? "transparent" : "auto", // Disable cursor blink if set to "false"
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId={controlId}>
          <Form.Label style={labelStyle}>{label}</Form.Label>
          <Form.Control
            type={type}
            placeholder={placeholder}
            style={inputStyle}
            autoFocus={autoFocus === "true"}
            className={customPlaceholderClass}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

// Define prop types
GenericInputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  // placeholderColor: PropTypes.string,
  // placeholderFontSize: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  fontFamily: PropTypes.string,
  boxShadow: PropTypes.string,
  autoFocus: PropTypes.string,
  cursorBlink: PropTypes.string,
  customPlaceholderClass: PropTypes.string,
  backgroundColor: PropTypes.string,
};

// Define default props
GenericInputField.defaultProps = {
  type: "text",
  placeholder: "",
  labelColor: "black",
  width: "100%",
  height: "auto",
  placeholderColor: "#6c757d",
  placeholderFontSize: "1rem",
  padding: "0px",
  margin: "0px",
  fontFamily: "Arial",
  boxShadow: "none",
  autoFocus: "false",
  cursorBlink: "true",
  customPlaceholderClass: "", 
  backgroundColor: ""
};

export default GenericInputField;
