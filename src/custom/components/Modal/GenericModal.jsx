import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GenericModal = ({
  buttonText = 'Launch Modal',    // Text for the button that triggers the modal
  title = 'Modal Title',          // Modal title
  bodyContent = 'Modal body content goes here...', // Modal body content
  showInitially = false,          // Whether to show the modal initially
  backdrop = 'static',            // Modal backdrop: 'static', true, or false
  keyboard = false,               // If true, modal closes on pressing the escape key
  size = 'md',                    // Modal size: 'sm', 'lg', 'xl' or 'md' (default)
  onModalClose = () => {},        // Callback function when modal is closed
  onModalShow = () => {},         // Callback function when modal is shown
  closeButtonText = 'Close',      // Text for the close button
  primaryButtonText = 'Understood', // Text for the primary action button
  primaryButtonHandler = () => {}, // Function for the primary button
  className = '',                 // Additional custom classes
  modalProps = {},                // Additional props for the Modal component
  buttonProps = {}                // Additional props for the button triggering the modal
}) => {
  const [show, setShow] = useState(showInitially);

  const handleClose = () => {
    setShow(false);
    onModalClose();  // Call the callback for modal close
  };

  const handleShow = () => {
    setShow(true);
    onModalShow();   // Call the callback for modal show
  };

  return (
    <>
      {/* Button to trigger the modal */}
      <Button variant="primary" onClick={handleShow} {...buttonProps}>
        {buttonText}
      </Button>

      {/* Modal component */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop={backdrop}
        keyboard={keyboard}
        size={size}
        className={className}
        {...modalProps} // Spread additional modal props
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {bodyContent}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {closeButtonText}
          </Button>
          <Button variant="primary" onClick={primaryButtonHandler}>
            {primaryButtonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GenericModal;
