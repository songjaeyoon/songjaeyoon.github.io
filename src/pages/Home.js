import React from "react";
import Publication from "../modules/Publication";

import { pubs } from "../data/publications";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const publications = pubs.sort((a, b) => b.year - a.year);
const papers = publications.filter((pub) => pub.attrs.includes("paper"));
const wips = publications.filter((pub) => pub.attrs.includes("wip"));

const Home = () => {
    return (
        <div className="container intro">
            <div className="wrapper">
                <section className="initial-section mb-5">
                    <div className="col-12">
                        <div className="pyramid">
                            <div className="side left"></div>
                            <div className="side front"></div>
                            <div className="side right"></div>
                            <div className="side back"></div>
                        </div>
                        <h1 className="mb-1">Jaeyoon Song</h1>
                        <p>
                            <span className="text-weight-normal">
                                PhD Student @ MIT
                            </span>{" "}
                            <br />
                            Human-AI Collaboration, Generative AI for Business,
                            Computational Social Science
                        </p>
                        <p className="text-muted text-small">
                            Hello, I am a PhD student at MIT Sloan School of
                            Management in the{" "}
                            <a
                                className="link-underline"
                                href="https://mitsloan.mit.edu/phd/program-overview/it"
                                target="_blank"
                            >
                                Information Technology (IT) group
                            </a>
                            - a subgroup of the Management Science program. My
                            general research area is <b>social computing</b> and{" "}
                            <b>computational social science</b> at the
                            intersection of computer science, data science, and
                            social science. I employ data-driven computational
                            thinking and methods to explore social science
                            questions. Specifically, I am interested in human-AI
                            collaboration in various contexts such as creative
                            writing, customer support, and online meetings.
                            <br />
                            <br />
                            <a
                                href="https://www.linkedin.com/in/jyoonsong/"
                                target="_blank"
                            >
                                Linkedin
                            </a>{" "}
                            &nbsp;|&nbsp;{" "}
                            <a
                                href="https://github.com/jyoonsong"
                                target="_blank"
                            >
                                GitHub
                            </a>{" "}
                            &nbsp;|&nbsp;{" "}
                            <a
                                href="https://scholar.google.com/citations?user=Im7uFVIAAAAJ"
                                target="_blank"
                            >
                                Google Scholar
                            </a>{" "}
                            &nbsp;|&nbsp;{" "}
                            <a href={require(`../pdf/CV.pdf`)} target="_blank">
                                CV
                            </a>{" "}
                            &nbsp;|&nbsp; jaeyoons@mit.edu
                        </p>
                    </div>
                </section>

                <aside className="divider mb-5">
                    <div></div>
                </aside>

                <section className="px-2 mb-5">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="intro-title text-mono">
                                Recent Publications
                            </div>

                            <Publication
                                pub={wips.find((wip) => wip.id === "test")}
                                projects={projects}
                            />
                            <Publication
                                pub={papers.find(
                                    (paper) => paper.id === "minglr"
                                )}
                                projects={projects}
                            />
                            <Publication
                                pub={papers.find(
                                    (paper) => paper.id === "who2chat"
                                )}
                                projects={projects}
                            />
                            <div className="view-all">
                                <Link to="/publications">
                                    View All Publications →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <aside className="divider mb-5">
                    <div></div>
                </aside>

                <section className="px-2 mb-5 pb-5">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="intro-title text-mono">
                                Miscellaneous Facts
                            </div>
                            <div className="fun-fact">
                                I enjoy{" "}
                                <Link
                                    className="link-underline"
                                    to="/developer"
                                >
                                    programming
                                </Link>{" "}
                                and{" "}
                                <Link className="link-underline" to="/designer">
                                    design
                                </Link>{" "}
                                in my work and free time. I also love dogs and
                                animals. Please contact me for more information
                                about my current projects.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <section className="full-height initial-section">
        <div className="col-11 col-md-6">
          <p className="initial-text">
            <strong className="mobile-small">Jaeyoon Song</strong> <br />
            <span className="text-weight-normal">
              PhD Student @ MIT Sloan
            </span>{" "}
            <br />
            Human-centered AI, Social Computing, Computational Social Science
          </p>

          <Parallax
            speed={isMobile ? -5 : -15}
            className="text-muted text-small"
          >
            Hello, I am a PhD student at MIT Sloan in the Information
            Technology (IT) group - a subgroup of the Management Science
            program. My general research area is <b>social computing</b> and{" "}
            <b>computational social science</b> at the intersection of computer
            science, data science, and social science. I employ data-driven
            computational thinking and methods to explore social science
            questions. Specifically, I am interested in human-AI collaboration
            and online discussions/meetings.
            <br />
            <br />
            jaeyoons [at] mit [dot] edu
          </Parallax>
        </div>
      </section> */}
        </div>
    );
};

export default Home;
