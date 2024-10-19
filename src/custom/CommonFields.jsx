import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

// Generic form input component
const CommonFields = ({ fields, formClassName, formGroupClassName }) => {
  return (
    <div>
      <Form className={formClassName}>
        <div className="form-main">
          {fields.map((field, index) => (
            <Form.Group className={formGroupClassName} controlId={field.controlId} key={index}>
              <Form.Label>{field.label}</Form.Label>
              {field.type === "textarea" ? (
                <Form.Control as="textarea" rows={field.rows || 3} placeholder={field.placeholder} />
              ) : (
                <Form.Control type={field.type} placeholder={field.placeholder} />
              )}
            </Form.Group>
          ))}
        </div>
      </Form>
    </div>
  );
};

// Prop types for type safety
CommonFields.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.string,
      placeholder: PropTypes.string,
      controlId: PropTypes.string.isRequired,
      rows: PropTypes.number, // Only for textareas
    })
  ).isRequired,
  formClassName: PropTypes.string,
  formGroupClassName: PropTypes.string,
};

// Default props
CommonFields.defaultProps = {
  formClassName: "",
  formGroupClassName: "mb-3",
};

export default CommonFields;
