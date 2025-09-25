import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { projects } from "../data/projects";
import { pubs } from "../data/publications";
import Links from "../modules/Links";
import Bibtex from "../modules/Bibtex";
import { authors } from "../data/authors";
import { isMobile } from "react-device-detect";

const About = ({ projImages }) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pub, setPub] = useState(null);
    const [proj, setProj] = useState(null);

    useEffect(() => {
        if (!id || id.length === 0) {
            navigate(-1);
            return;
        }
        const newPub = pubs.find((pub) => pub?.id === id);
        const newProj = projects.find((project) => project.id === id);

        if (!newPub) {
            // if no project or publication found, go back
            navigate(-1);
            return;
        }
        setPub(newPub);
        setProj(newProj);
    }, [id]);

    return (
        <Container fluid>
            <Row className="mt-5 pt-3">
                <Col xs={12} md={{ offset: 2, span: 8 }} className="mb-5">
                    <h5 className="mb-2">{pub?.title}</h5>
                    <span>
                        {/* venue */}
                        {pub?.conference && (
                            <>
                                {pub?.conference.short}{" "}
                                {pub?.upcoming ? "  (to appear)" : ""}
                            </>
                        )}

                        {pub?.journal && (
                            <>
                                {pub?.journal.short ? (
                                    pub?.journal.short
                                ) : (
                                    <>
                                        {pub?.journal.title}, pp.{" "}
                                        {pub?.journal.page}, {pub?.year}{" "}
                                    </>
                                )}
                                {pub?.upcoming ? "  (to appear)" : ""}
                            </>
                        )}
                    </span>

                    {proj?.prize && (
                        <div>
                            <a
                                className="text-gray"
                                href={proj?.prize.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <small>🏆 {proj?.prize.name}</small>
                            </a>
                        </div>
                    )}
                    {/* links */}
                    {proj && <Links project={proj} />}

                    {/* authors */}
                    <Row className="about-author mt-5 mb-4">
                        {pub?.authors?.map((author, index) => {
                            const foundAuthor = authors.find(
                                (a) => a.name === author
                            );
                            return (
                                <Col
                                    xs={4}
                                    md={3}
                                    lg={2}
                                    key={index}
                                    className="author-info"
                                    style={
                                        pub?.authors?.length === 4 &&
                                        isMobile &&
                                        index === 0
                                            ? { marginLeft: "0.333333%" }
                                            : {}
                                    }
                                >
                                    {foundAuthor?.website ? (
                                        <a
                                            href={foundAuthor?.website}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <img
                                                src={require(`../images${
                                                    foundAuthor?.image
                                                        ? foundAuthor?.image
                                                        : "/authors/default.jpg"
                                                }`)}
                                                alt={author}
                                            />
                                            <span className="text-bold mt-2">
                                                {author}
                                            </span>
                                            <span>
                                                {foundAuthor?.affiliation}
                                            </span>
                                        </a>
                                    ) : (
                                        <a>
                                            <img
                                                src={require(`../images${
                                                    foundAuthor?.image
                                                        ? foundAuthor?.image
                                                        : "/authors/default.jpg"
                                                }`)}
                                                alt={author}
                                            />
                                            <span className="text-bold mt-2">
                                                {author}
                                            </span>
                                            <span>
                                                {foundAuthor?.affiliation}
                                            </span>
                                        </a>
                                    )}
                                </Col>
                            );
                        })}
                    </Row>

                    <div className="about-img mb-4">
                        <img src={projImages[proj?.id]} alt={proj?.title} />
                    </div>

                    <strong>Abstract</strong>
                    <p className="mb-5 abstract">{proj?.paragraph}</p>

                    {pub?.type !== "WIP" && (
                        <>
                            <strong>BibTeX</strong>
                            <Bibtex pub={pub} />
                        </>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default About;
