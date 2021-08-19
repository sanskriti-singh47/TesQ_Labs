import React from "react";
import "../assets/css/header.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="#home" className="brand" data-letters="T">
                        TESQ Labs
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav "
                        className="justify-content-end"
                    >
                        <Nav activeKey="/home" className="nav">
                            <Nav.Item className="nav-item">
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/product">Recrut-R</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item className="nav-item">
                                <Nav.Link eventKey="link-2" href="/about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link eventKey="link-3" href="/contact">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
