import React from "react";
import { designProjects } from "../data/designProjects";
import { Link } from "react-router-dom";

const Designer = ({ designImage, video0, video1, video2, video3 }) => {
    return (
        <section className="full-height bg-white">
            <div className="row mb-3 px-2">
                <div className="col-12 col-md-10 col-lg-8 pt-4 pb-4">
                    <div className="text-black">
                        <strong>Graphic Design</strong>
                    </div>
                    <div className="text-muted">
                        Sketch App, Adobe Illustrator
                    </div>
                </div>
                <div className="col-12 col-md-10 col-lg-8 ">
                    <div className="row mb-2">
                        <img
                            src={designImage}
                            alt="4 illustration of magic spells"
                        />
                    </div>
                    <div className="text-right text-muted text-small ">
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
                </div>
            </div>

            <div className="row px-2">
                <div className="col-12 col-md-10 col-lg-8 pt-4 pb-4">
                    <div className="text-black">
                        <strong>Creative Coding</strong>
                    </div>
                    <div className="text-muted">JavaScript, SASS/SCSS</div>
                </div>
                <div className="col-12 col-md-10 col-lg-8 ">
                    <div className="row mb-2">
                        <div className="col-12 col-md-6">
                            <video width="100%" controls loop muted playsinline>
                                <source src={video0} type="video/mp4" />
                                <img
                                    src={require("../images/videos/preview0.png")}
                                    width="100%"
                                />
                            </video>
                            <div className="text-right text-muted  text-small mt-1 mb-3">
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
                            <video width="100%" controls loop muted playsinline>
                                <source src={video1} type="video/mp4" />
                                <img
                                    src={require("../images/videos/preview1.png")}
                                    width="100%"
                                />
                            </video>
                            <div className="text-right text-muted  text-small mt-1 mb-3">
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
                            <video width="100%" controls loop muted playsinline>
                                <source src={video2} type="video/mp4" />
                                <img
                                    src={require("../images/videos/preview2.png")}
                                    width="100%"
                                />
                            </video>
                            <div className="text-right text-muted  text-small mt-1 mb-3">
                                <b>GSAP, Three.js, React.js</b>
                                <br />
                                <span>
                                    All work is mine. Toy project for learning
                                    Three.js
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <video width="100%" controls loop muted playsinline>
                                <source src={video3} type="video/mp4" />
                                <img
                                    src={require("../images/videos/preview3.png")}
                                    width="100%"
                                />
                            </video>
                            <div className="text-right text-muted  text-small mt-1 mb-3">
                                <b>React.js, D3.js</b>
                                <br />
                                <span>
                                    The illustrations in the background are by
                                    Julia Miocene
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row px-2">
                <div className="col-12 col-md-10 col-lg-8 pt-4 pb-4">
                    <div className="text-black">
                        <strong>Web & App Design</strong>
                    </div>
                    <div className="text-muted">Figma, Sketch App</div>
                </div>
                <div className="col-12 col-md-10 col-lg-8 ">
                    <div className="row mb-2">
                        {designProjects.map((proj) => (
                            <div className="col-12 col-md-6" key={proj.id}>
                                <img
                                    src={require(`../images/${proj.image}`)}
                                    alt={proj.title}
                                />
                                <div className="text-right text-muted  text-small mt-1 mb-3">
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
                </div>
            </div>
        </section>
    );
};

export default Designer;
