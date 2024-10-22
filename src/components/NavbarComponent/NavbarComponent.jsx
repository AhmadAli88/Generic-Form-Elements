import React from "react";
import GenericNavbar from "../../custom/components/Navbar/GenericNavbar";

const NavbarComponent = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Link", href: "#link" },
  ];

  const dropdowns = [
    {
      title: "Dropdown",
      items: [
        { label: "Action", href: "#action/3.1" },
        { label: "Another action", href: "#action/3.2" },
        { label: "Something", href: "#action/3.3" },
        { label: "Separated link", href: "#action/3.4" },
      ],
      divider: true,
    },
  ];

  const navLinksTwo = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const dropdownsTwo = [
    {
      title: "Services",
      items: [
        { label: "Web Development", href: "#web-development" },
        { label: "SEO", href: "#seo" },
        { label: "Marketing", href: "#marketing" },
      ],
      divider: true,
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "#blog" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ];
  return (
    <div>
      {" "}
      {/* <GenericNavbar
        brandName="React-Bootstrap"
        brandHref="#home"
        navLinks={navLinks}
        dropdowns={dropdowns}
      /> */}
      <GenericNavbar
        brandName="My Company"
        brandHref="#home"
        navLinks={navLinksTwo}
        dropdowns={dropdownsTwo}
        expand="lg"
        bg="dark"
        color="white"
        className="my-custom-navbar"
        navbarProps={{ fixed: "top" }} // Additional props for the Navbar
      />
    </div>
  );
};

export default NavbarComponent;
