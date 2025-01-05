import React from "react";
import Publication from "../modules/Publication";

import { pubs } from "../data/publications";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const publications = pubs.sort((a, b) => b.year - a.year);
const papers = publications.filter((pub) => pub.attrs.includes("paper"));
const wips = publications.filter((pub) => pub.attrs.includes("wip"));

const Home = () => {
    return (
        <Container fluid className="intro">
            <Row>
                <Col xs={12} md={{ offset: 3, span: 6 }} className="mb-5 pt-5">
                    <div className="pyramid">
                        <div className="side left"></div>
                        <div className="side front"></div>
                        <div className="side right"></div>
                        <div className="side back"></div>
                    </div>
                    <h1 className="mb-1 intro-name">Jaeyoon Song</h1>
                    <p>
                        <span className="text-weight-normal">
                            PhD Student @ MIT
                        </span>{" "}
                        <br />
                        Human-AI Interaction, Collaboration, Generative AI,
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
                        general research area is{" "}
                        <b>computational social science</b> and{" "}
                        <b>social computing</b> at the intersection of computer
                        science, data science, and social science. I employ
                        data-driven computational thinking and methods to
                        explore social science questions. Specifically, I am
                        interested in human-AI interaction, collaboration, and
                        the transformative impact of generative AI on work and
                        organizations.
                        <br />
                        <br />
                        Currently, I'm investigating behavioral shifts within
                        online communities, seeking insights into the future of
                        work by identifying which contributors adapt and thrive
                        in the evolving landscape of generative AI and which
                        gradually disengage.
                        <br />
                        <br />
                        <span className="d-none d-md-inline-block">
                            <a
                                href="https://www.linkedin.com/in/jyoonsong/"
                                target="_blank"
                            >
                                Linkedin
                            </a>{" "}
                            &nbsp;| &nbsp;{" "}
                        </span>
                        <a href="https://github.com/jyoonsong" target="_blank">
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
                </Col>

                <Col xs={12} className="divider my-5">
                    <div></div>
                </Col>

                <Col xs={12} md={{ offset: 3, span: 6 }} className="px-2 my-5">
                    <div className="intro-title text-mono">
                        Selected Publications
                    </div>

                    <Publication
                        pub={wips.find((wip) => wip.id === "test")}
                        projects={projects}
                    />
                    <Publication
                        pub={wips.find((paper) => paper.id === "badge")}
                        projects={projects}
                    />
                    <Publication
                        pub={papers.find((paper) => paper.id === "minglr")}
                        projects={projects}
                    />
                    <div className="view-all">
                        <Link to="/publications">View All Publications →</Link>
                    </div>
                </Col>

                <Col xs={12} className="divider my-5">
                    <div></div>
                </Col>

                <Col
                    xs={12}
                    md={{ offset: 3, span: 6 }}
                    className="px-2 my-5 py-5"
                >
                    <div className="intro-title text-mono">
                        Miscellaneous Facts
                    </div>
                    <div className="fun-fact">
                        I enjoy{" "}
                        <Link className="link-underline" to="/developer">
                            programming
                        </Link>{" "}
                        and{" "}
                        <Link className="link-underline" to="/designer">
                            design
                        </Link>{" "}
                        in my work and free time. Please contact me for more
                        information about my current projects. I'm open to
                        coffee chats on various topics like generative AI,
                        startups, accessibility, and the future of work.
                    </div>
                </Col>

                <Col xs={12} className="divider my-5 opacity-0">
                    <div></div>
                </Col>
            </Row>
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
        </Container>
    );
};

export default Home;
