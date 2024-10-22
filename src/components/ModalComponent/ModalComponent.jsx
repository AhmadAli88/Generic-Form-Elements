import React from "react";
import GenericModal from "../../custom/components/Modal/GenericModal";

const ModalComponent = () => {
  return (
    <div>
      <h1>Custom Modal Example</h1>
      <GenericModal
        buttonText="Show My Modal"
        title="Custom Modal Title"
        bodyContent={
          <p>
            This is some <strong>custom</strong> modal content!
          </p>
        }
        showInitially={false}
        backdrop="true" // Click outside will close the modal
        keyboard={true} // Pressing 'Esc' will close the modal
        size="lg" // Large modal size
        onModalClose={() => alert("Modal has been closed!")}
        onModalShow={() => alert("Modal is now open!")}
        closeButtonText="Cancel"
        primaryButtonText="Confirm"
        primaryButtonHandler={() => alert("Confirmed!")}
        className="custom-modal-class"
        modalProps={{ "aria-labelledby": "custom-modal-id" }} // Additional Modal props
        buttonProps={{ variant: "danger", size: "lg" }} // Additional Button props
      />
       <GenericModal />
    </div>
  );
};

export default ModalComponent;
