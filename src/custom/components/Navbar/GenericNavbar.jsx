import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const GenericNavbar = ({
  brandName = 'Brand',                    // The name of the brand displayed in the navbar
  brandHref = '#home',                    // The URL for the brand link
  navLinks = [],                           // Array of nav link objects
  dropdowns = [],                          // Array of dropdown objects
  expand = 'lg',                           // Control navbar expand breakpoint
  bg = 'light',                            // Background color of the navbar
  className = '',  
  color,                        // Additional custom classes for the navbar
  navbarProps = {},                        // Additional props for the Navbar component
}) => {
  return (
    <Navbar expand={expand} className={`bg-${bg}  ${className}`} {...navbarProps}>
      <Container>
        <Navbar.Brand href={brandHref}>{brandName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link, index) => (
              <Nav.Link key={index} href={link.href} className={`text-${color}`}>
                {link.label}
              </Nav.Link>
            ))}
            {dropdowns.map((dropdown, index) => (
              <NavDropdown key={index} title={dropdown.title} id={`navbar-dropdown-${index}`}>
                {dropdown.items.map((item, itemIndex) => (
                  <NavDropdown.Item key={itemIndex} href={item.href}>
                    {item.label}
                  </NavDropdown.Item>
                ))}
                {dropdown.divider && <NavDropdown.Divider />}
              </NavDropdown>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GenericNavbar;
