import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { isMobile } from "react-device-detect";

const Navigation = () => {
    const [toggleActive, setToggleActive] = useState(false);

    return (
        <Navbar expand="lg">
            <Container className="nav-container">
                <button
                    aria-controls="basic-navbar-nav"
                    type="button"
                    aria-label="Toggle navigation"
                    className={`navbar-toggler ${
                        toggleActive ? "" : "collapsed"
                    }`}
                    onClick={() => setToggleActive(!toggleActive)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className={`justify-content-end ${
                        toggleActive ? "show" : ""
                    }`}
                >
                    <Nav>
                        <Nav.Link
                            as={NavLink}
                            onClick={() => setToggleActive(false)}
                            className={(navData) =>
                                navData.isActive ? "active" : ""
                            }
                            to="/"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            onClick={() => setToggleActive(false)}
                            className={(navData) =>
                                navData.isActive ? "active" : ""
                            }
                            to="/publications"
                        >
                            Publications
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            onClick={() => setToggleActive(false)}
                            className={(navData) =>
                                navData.isActive ? "active" : ""
                            }
                            to="/projects"
                        >
                            Projects
                        </Nav.Link>

                        <Nav.Link
                            onClick={() => setToggleActive(false)}
                            className={(navData) =>
                                navData.isActive ? "active" : ""
                            }
                            href={require(`../pdf/CV.pdf`)}
                        >
                            Resume
                        </Nav.Link>

                        <NavDropdown title="Fun" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                as={NavLink}
                                onClick={() => setToggleActive(false)}
                                className={(navData) =>
                                    navData.isActive ? "active" : ""
                                }
                                to="/developer"
                            >
                                Dev
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={NavLink}
                                onClick={() => setToggleActive(false)}
                                className={(navData) =>
                                    navData.isActive ? "active" : ""
                                }
                                to="/designer"
                            >
                                Design
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
