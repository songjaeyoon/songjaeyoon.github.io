import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    // let listenerAttached = false;

    // useEffect(() => {
    //     const trigger = document.querySelector(".menu-toggle");
    //     const mobileItems = document.querySelectorAll(".mobile-item");

    //     for (let mobileItem of mobileItems) {
    //         mobileItem.addEventListener("click", (e) => {
    //             const mobileNav = document.querySelector(".mobile-menu");
    //             mobileNav.classList.remove("mobile-menu-toggled");
    //         });
    //     }

    //     if (!listenerAttached) {
    //         listenerAttached = true;
    //         trigger.addEventListener("click", (e) => {
    //             const mobileNav = document.querySelector(".mobile-menu");

    //             if (mobileNav.classList.contains("mobile-menu-toggled")) {
    //                 console.log("untoggled");
    //                 mobileNav.classList.remove("mobile-menu-toggled");
    //             } else {
    //                 console.log("toggled");
    //                 mobileNav.classList.add("mobile-menu-toggled");
    //             }
    //         });
    //     }
    // }, []);

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav>
                        <Nav.Link
                            as={NavLink}
                            className={(navData) =>
                                navData.isActive ? "active" : ""
                            }
                            to="/"
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            className={(navData) =>
                                navData.isActive ? "active" : ""
                            }
                            to="/publications"
                        >
                            Publications
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            className={(navData) =>
                                navData.isActive ? "active" : ""
                            }
                            to="/projects"
                        >
                            Projects
                        </Nav.Link>

                        <Nav.Link
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
                                className={(navData) =>
                                    navData.isActive ? "active" : ""
                                }
                                to="/developer"
                            >
                                Dev
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={NavLink}
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
