import React, { useEffect, useState } from "react";
import { projects } from "../data/projects";
import Project from "../modules/Project";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Research = ({ projImages }) => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    const allKeywords = [
        ...new Set(projects.map((proj) => proj.keywords).flat(1)),
    ];
    const allCategories = [
        ...new Set(projects.map((proj) => proj.topic).flat(1)),
    ];

    useEffect(() => {
        if (location.search) {
            const ids = location.search.split("=");
            if (ids.length >= 2) {
                const newSelectedProject = projects.filter(
                    (proj) => proj.id === ids[1]
                );
                if (newSelectedProject.length > 0) {
                    setSelectedProject(newSelectedProject[0]);
                    setIsOpen(true);
                }
            }
        }
    }, [location]);

    const selectKeyword = (e) => {
        const keyword = e.target.innerText;
        if (selectedKeywords.includes(keyword)) {
            const newSelectedKeywords = selectedKeywords.filter(
                (s) => s !== keyword
            );
            setSelectedKeywords(newSelectedKeywords);
        } else {
            const newSelectedKeywords = [...selectedKeywords, keyword];
            setSelectedKeywords(newSelectedKeywords);
        }
    };
    const selectCategory = (e) => {
        const category = e.target.innerText;
        if (selectedCategories.includes(category)) {
            const newSelectedCategories = selectedCategories.filter(
                (c) => c !== category
            );
            setSelectedCategories(newSelectedCategories);
        } else {
            const newSelectedCategories = [...selectedCategories, category];
            setSelectedCategories(newSelectedCategories);
        }
    };

    const selectProject = (e) => {
        const newSelectedProject = projects.filter(
            (proj) => proj.id === e.currentTarget.id
        );
        if (newSelectedProject.length > 0) {
            setSelectedProject(newSelectedProject[0]);
            setIsOpen(true);
        }
    };

    return (
        <Container fluid>
            <Row className="pt-5 mt-5">
                <Col
                    xs={12}
                    md={{ offset: 1, span: 10 }}
                    lg={{ offset: 2, span: 8 }}
                    className="mb-2 keyword-filter"
                >
                    <strong className="text-muted">Keywords</strong> <br />
                    {allKeywords.map((keyword, i) => (
                        <span
                            key={i}
                            className={`${
                                selectedKeywords.includes(keyword) &&
                                "text-bold"
                            } me-3 pointer filter`}
                            onClick={selectKeyword}
                        >
                            {keyword}
                        </span>
                    ))}
                </Col>
                <Col
                    xs={12}
                    md={{ offset: 1, span: 10 }}
                    lg={{ offset: 2, span: 8 }}
                    className="keyword-filter"
                >
                    <strong className="text-muted">Category</strong> <br />
                    {allCategories.map((category, i) => (
                        <span
                            key={i}
                            className={`${
                                selectedCategories.includes(category) &&
                                "text-bold"
                            } me-3 pointer filter`}
                            onClick={selectCategory}
                        >
                            {category}
                        </span>
                    ))}
                </Col>
            </Row>
            <Row className="pt-4 pb-5 px-2">
                <Col
                    xs={12}
                    md={{ offset: 1, span: 10 }}
                    lg={{ offset: 2, span: 8 }}
                >
                    <Row>
                        {projects.map((proj) => {
                            let show = false;
                            for (let keyword of selectedKeywords) {
                                if (proj.keywords.includes(keyword)) {
                                    show = true;
                                    break;
                                }
                            }
                            for (let category of selectedCategories) {
                                if (proj.topic.includes(category)) {
                                    show = true;
                                    break;
                                }
                            }
                            if (
                                show ||
                                (selectedKeywords.length === 0 &&
                                    selectedCategories.length === 0)
                            ) {
                                return (
                                    <Project
                                        key={proj.id}
                                        proj={proj}
                                        projImages={projImages}
                                        handleClick={selectProject}
                                    />
                                );
                            }
                            return "";
                        })}
                    </Row>
                </Col>
            </Row>
            <Modal
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                onAnimationEnd={() => {
                    if (!isOpen) {
                        setSelectedProject(null);
                    }
                }}
                blockScroll={true}
            >
                <h3 className="mt-3 mb-2">
                    {selectedProject?.title} (
                    {parseInt(selectedProject?.year / 100)})
                </h3>
                <div>{selectedProject?.desc}</div>

                {selectedProject?.prize && (
                    <div>
                        <a
                            className="text-gray"
                            href={selectedProject?.prize.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <small>🏆 {selectedProject?.prize.name} 🏆</small>
                        </a>
                    </div>
                )}

                {selectedProject?.keywords.map((keyword, i) => (
                    <span className="tag" key={i}>
                        {keyword}
                    </span>
                ))}

                <div className="mb-2">
                    <img
                        src={projImages[selectedProject?.id]}
                        alt={selectedProject?.title}
                    />
                </div>

                <p
                    dangerouslySetInnerHTML={{
                        __html: selectedProject?.paragraph,
                    }}
                ></p>
            </Modal>
        </Container>
    );
};

export default Research;
