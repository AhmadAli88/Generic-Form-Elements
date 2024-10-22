import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Form from 'react-bootstrap/Form';

function GenericToast({
  toastConfig,
  positionOptions = [
    'top-start',
    'top-center',
    'top-end',
    'middle-start',
    'middle-center',
    'middle-end',
    'bottom-start',
    'bottom-center',
    'bottom-end',
  ],
  defaultPosition = 'top-start',
  className = '',
}) {
  const [position, setPosition] = useState(defaultPosition);

  return (
    <>
      <div className="mb-3">
        <Form.Label htmlFor="selectToastPlacement">Toast Position</Form.Label>
        <Form.Select
          id="selectToastPlacement"
          className="mt-2"
          onChange={(e) => setPosition(e.currentTarget.value)}
        >
          {positionOptions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Form.Select>
      </div>

      <div
        aria-live="polite"
        aria-atomic="true"
        className={`bg-dark position-relative ${className}`}
        style={{ minHeight: '100vh' }}
      >
        <ToastContainer className="p-3" position={position} style={{ zIndex: 1 }}>
          {toastConfig.map((toast, index) => (
            <Toast
              key={index}
              show={toast.show}
              onClose={toast.onClose}
              delay={toast.delay}
              // autohide={toast.autohide}
              bg={toast.bg}
            >
              <Toast.Header closeButton={toast.closeButton}>
                {toast.headerImg && (
                  <img src={toast.headerImg} className="rounded me-2" alt="" />
                )}
                <strong className="me-auto">{toast.headerTitle}</strong>
                <small>{toast.headerTime}</small>
              </Toast.Header>
              <Toast.Body>{toast.body}</Toast.Body>
            </Toast>
          ))}
        </ToastContainer>
      </div>
    </>
  );
}

export default GenericToast;
