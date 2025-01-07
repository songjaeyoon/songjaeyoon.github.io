import React from "react";
import { pubs } from "../data/publications";
import { projects } from "../data/projects";
import Publication from "../modules/Publication";
import { Col, Container, Row } from "react-bootstrap";

const publications = pubs.sort((a, b) => b.year - a.year);
const papers = publications.filter((pub) => pub.attrs.includes("paper"));
const posters = publications.filter((pub) => pub.attrs.includes("poster"));
const wips = publications.filter((pub) => pub.attrs.includes("wip"));

const Publications = () => {
    return (
        <Container fluid>
            <Row className="mt-5 pt-5 pb-5">
                <Col xs={12} md={{ offset: 2, span: 8 }} className="pb-5">
                    <Row className="pb-5">
                        <Col xs={12} md={3} className="section-title mb-1">
                            <strong className="text-mono">
                                Working Papers
                            </strong>
                        </Col>

                        <Col xs={12} md={9} className="indent mb-2">
                            {wips.map((wip, i) => (
                                <Publication
                                    pub={wip}
                                    projects={projects}
                                    key={i}
                                />
                            ))}
                        </Col>

                        <Col xs={12} md={3} className="section-title mb-1">
                            <strong className="text-mono">
                                Journal {"&"} Conference Papers
                            </strong>
                        </Col>

                        <Col xs={12} md={9} className="indent mb-2">
                            {papers.map((paper, i) => (
                                <Publication
                                    pub={paper}
                                    projects={projects}
                                    key={i}
                                />
                            ))}
                        </Col>

                        <Col xs={12} md={3} className="section-title mb-1">
                            <strong className="text-mono">Posters</strong>
                        </Col>

                        <Col xs={12} md={9} className="indent mb-2">
                            {posters.map((poster, i) => (
                                <Publication
                                    pub={poster}
                                    projects={projects}
                                    key={i}
                                />
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Publications;
