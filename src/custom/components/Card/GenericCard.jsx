import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const GenericCard = ({
  title = 'Card Title',              // Title of the card
  text = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', // Text content of the card
  imageSrc = '',   // Image source URL
  buttonText = 'Go somewhere',       // Button text
  buttonVariant = 'primary',         // Button variant: 'primary', 'secondary', etc.
  onButtonClick = () => {},          // Button click handler
  cardStyle = { width: '18rem' },    // Style object for the card
  imageVariant = 'top',              // Image variant: 'top', 'bottom'
  className = '',                    // Additional custom class for the card
  cardBodyProps = {},                // Additional props for Card.Body component
  cardProps = {},                    // Additional props for the Card component
  buttonProps = {} ,                 // Additional props for the Button component
  height,
  width
}) => {
  return (
    <Card style={cardStyle} className={className} {...cardProps}>
      {imageSrc && <Card.Img variant={imageVariant} src={imageSrc} height={height} width={width} />}
      <Card.Body {...cardBodyProps}>
        {title && <Card.Title>{title}</Card.Title>}
        {text && <Card.Text>{text}</Card.Text>}
        <Button variant={buttonVariant} onClick={onButtonClick} {...buttonProps}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default GenericCard;
