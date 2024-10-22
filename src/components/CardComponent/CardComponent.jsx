import React from "react";
import GenericCard from "../../custom/components/Card/GenericCard";

const CardComponent = () => {
  return (
    <div>
      <h1>Custom Card Example</h1>
      <GenericCard
        title="Custom Card Title"
        text="This is some custom card text that demonstrates the flexibility of this reusable component."
        imageSrc="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MnwzMDg5MDR8MHwxfGFsbHwxfHx8fHx8fHwxNjIwMjg3ODgz&ixlib=rb-1.2.1&w=1000&q=80"
        buttonText="Learn More"
        buttonVariant="success"
        onButtonClick={() => alert("Button clicked!")}
        cardStyle={{ width: "20rem", margin: "20px" }}
        imageVariant="top"
        className="my-custom-card"
        cardBodyProps={{ style: { padding: "20px" } }}
        cardProps={{ id: "custom-card-id", role: "region" }}
        buttonProps={{ size: "lg", disabled: false }}
        height="250px"
        width="auto"
      />
    </div>
  );
};

export default CardComponent;
