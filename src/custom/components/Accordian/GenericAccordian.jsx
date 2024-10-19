import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './GenericAccordion.css'; // Optional: You can use a custom CSS file to add styles

const GenericAccordion = ({
  items,
  alwaysOpen,
  defaultOpenIndex,
  onToggle,
  icon, // Optional icon to be added before or after the header
  headerColor,
  bodyColor,
  borderColor,
}) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const handleToggle = (index) => {
    if (alwaysOpen) {
      setOpenIndex(index === openIndex ? null : index);
    } else {
      setOpenIndex(index);
    }
    if (onToggle) {
      onToggle(index);
    }
  };

  return (
    <div className="accordion" id="accordionExample">
      {items.map((item, index) => (
        <div className="accordion-item" key={index} style={{ borderColor }}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
              type="button"
              onClick={() => handleToggle(index)}
              style={{ color: headerColor }}
              aria-expanded={openIndex === index}
              aria-controls={`collapse${index}`}
            >
              {icon && <span className="accordion-icon">{icon}</span>} {/* Optional icon */}
              {item.header}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent={alwaysOpen ? '' : '#accordionExample'}
          >
            <div className="accordion-body" style={{ backgroundColor: bodyColor }}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Define prop types
GenericAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired, // List of accordion items (header and content)
  alwaysOpen: PropTypes.bool, // Allow multiple panels to stay open
  defaultOpenIndex: PropTypes.number, // Index of the panel that should be open by default
  onToggle: PropTypes.func, // Function to call when a panel is toggled
  icon: PropTypes.node, // Optional icon for headers
  headerColor: PropTypes.string, // Header text color
  bodyColor: PropTypes.string, // Background color of the accordion body
  borderColor: PropTypes.string, // Border color of the accordion item
};

// Define default props
GenericAccordion.defaultProps = {
  alwaysOpen: false,
  defaultOpenIndex: null,
  headerColor: '#000',
  bodyColor: '#fff',
  borderColor: '#dee2e6', // Bootstrap default border color
};

export default GenericAccordion;
