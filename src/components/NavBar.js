// src/components/NavBar.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

import "../styles/NavBar.css";
const NavBar = () => {
  return (
    <Navbar fixed="top" className="navbar navbar-light bg-navy">
      <Container>
        <Navbar.Brand className="navbar brand" href="#">
          | alockhat |
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#intro">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav className="ms-auto social-icons">
            <Nav.Link href="mailto:ayazzlockhat@gmail.com">
              <EmailIcon fontSize="medium" />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/ayazlockhat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="medium" />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/ayazlockhat/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="medium" />
            </Nav.Link>
            <Nav.Link
              href="resources/AyazLockhat_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DescriptionIcon fontSize="medium" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
