import React from "react";
import { designProjects } from "../data/designProjects";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Designer = ({ designImage, video0, video1, video2, video3 }) => {
    return (
        <Container fluid>
            <Row className="mb-5 mt-5 pt-5 pb-5">
                <Col
                    xs={12}
                    md={{ offset: 1, span: 10 }}
                    lg={{ offset: 2, span: 8 }}
                    className="py-4"
                >
                    <div className="text-black">
                        <strong>Graphic Design</strong>
                    </div>
                    <div className="text-muted">
                        Sketch App, Adobe Illustrator
                    </div>
                </Col>
                <Col
                    xs={12}
                    md={{ offset: 1, span: 10 }}
                    lg={{ offset: 2, span: 8 }}
                >
                    <div className="row mb-3">
                        <img
                            src={designImage}
                            alt="4 illustration of magic spells"
                        />
                    </div>
                    <div className="text-right text-muted text-small">
                        <b>Magic Spells All Muggles are Jealous of</b>
                        <br />
                        Twelve variations of magic spells in the Harry Potter
                        series.
                        <br />
                        More information is available at{" "}
                        <a
                            className="border-link"
                            href="https://jaeyoon.io/dt4c"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://jaeyoon.io/dt4c
                        </a>
                    </div>
                </Col>
            </Row>

            <Row className="mb-5 pb-5">
                <Col
                    xs={12}
                    md={{ offset: 1, span: 10 }}
                    lg={{ offset: 2, span: 8 }}
                    className="py-4"
                >
                    <div className="text-black">
                        <strong>Creative Coding</strong>
                    </div>
                    <div className="text-muted">JavaScript, SASS/SCSS</div>
                </Col>
                <Col
                    xs={12}
                    md={{ offset: 1, span: 10 }}
                    lg={{ offset: 2, span: 8 }}
                >
                    <div className="row mb-2">
                        <div className="col-12 col-md-6">
                            <img src={require("../images/videos/gif0.gif")} />
                            <div className="text-right text-muted  text-small mt-3 mb-4">
                                <b>Vanilla JavaScript</b>
                                <br />
                                <span>
                                    All work is mine. More information{" "}
                                    <Link to="/projects?project=cube">
                                        here
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={require("../images/videos/gif1.gif")} />
                            <div className="text-right text-muted  text-small mt-3 mb-4">
                                <b>React.js</b>
                                <br />
                                <span>
                                    Inspired by{" "}
                                    <a
                                        href="https://www.awwwards.com/inspiration/listeners-playlist"
                                        target="_blank"
                                    >
                                        Listeners' Playlist
                                    </a>{" "}
                                    and react libraries
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={require("../images/videos/gif2.gif")} />
                            <div className="text-right text-muted  text-small mt-3 mb-4">
                                <b>GSAP, Three.js, React.js</b>
                                <br />
                                <span>
                                    All work is mine. Toy project for learning
                                    Three.js
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={require("../images/videos/gif3.gif")} />
                            <div className="text-right text-muted  text-small mt-3 mb-4">
                                <b>React.js, D3.js</b>
                                <br />
                                <span>
                                    The illustrations in the background are by
                                    Julia Miocene
                                </span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="pb-5">
                <Col
                    xs={12}
                    md={{ offset: 1, span: 10 }}
                    lg={{ offset: 2, span: 8 }}
                    className="py-4"
                >
                    <div className="text-black">
                        <strong>Web & App Design</strong>
                    </div>
                    <div className="text-muted">Figma, Sketch App</div>
                </Col>
                <Col
                    xs={12}
                    md={{ offset: 1, span: 10 }}
                    lg={{ offset: 2, span: 8 }}
                    className="pt-4 pb-5"
                >
                    <div className="row mb-2">
                        {designProjects.map((proj) => (
                            <div className="col-12 col-md-6" key={proj.id}>
                                <img
                                    src={require(`../images/${proj.image}`)}
                                    alt={proj.title}
                                />
                                <div className="text-right text-muted text-small mt-3 mb-4">
                                    <b>{proj.title}</b>
                                    <br />
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: proj.description,
                                        }}
                                    ></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Designer;
