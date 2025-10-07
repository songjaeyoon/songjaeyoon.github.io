import React, { useEffect, useState } from "react";
import { devProjects } from "../data/devProjects";
import { projects } from "../data/projects";
import DevProject from "../modules/DevProject";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Links from "../modules/Links";

const Developer = ({ devImages }) => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedStack, setSelectedStack] = useState([]);
    const [selectedCollab, setSelectedCollab] = useState("");
    const [selectedProject, setSelectedProject] = useState(null);
    const allStack = [
        ...new Set(devProjects.map((proj) => proj.stack).flat(1)),
    ];

    useEffect(() => {
        if (location.search) {
            const ids = location.search.split("=");
            if (ids.length >= 2) {
                const newSelectedProject = devProjects.filter(
                    (proj) => proj.id === ids[1]
                );
                if (newSelectedProject.length > 0) {
                    setSelectedProject(newSelectedProject[0]);
                    setIsOpen(true);
                }
            }
        }
    }, [location]);

    const selectStack = (e) => {
        const stack = e.target.innerText;
        if (selectedStack.includes(stack)) {
            const newSelectedStack = selectedStack.filter((s) => s !== stack);
            setSelectedStack(newSelectedStack);
        } else {
            const newSelectedStack = [...selectedStack, stack];
            setSelectedStack(newSelectedStack);
        }
    };
    const selectCollab = (e) => {
        const collab = e.target.innerText;
        if (selectedCollab === collab) {
            setSelectedCollab("");
        } else {
            setSelectedCollab(collab);
        }
    };

    const selectProject = (e) => {
        const newSelectedProject = devProjects.filter(
            (proj) => proj.id === e.currentTarget.id
        );
        if (newSelectedProject.length > 0) {
            setSelectedProject(newSelectedProject[0]);
            setIsOpen(true);
        }
    };

    return (
        <>
            <Container fluid>
                <Row className="pt-5 mt-5">
                    <Col
                        xs={12}
                        md={{ offset: 1, span: 10 }}
                        lg={{ offset: 2, span: 8 }}
                        className="mb-2 keyword-filter"
                    >
                        <strong className="text-muted">Stack</strong> <br />
                        {allStack.map((stack) => (
                            <span
                                key={stack}
                                className={`${
                                    selectedStack.includes(stack) && "text-bold"
                                } me-3 pointer filter`}
                                onClick={selectStack}
                            >
                                {stack}
                            </span>
                        ))}
                    </Col>
                    <Col
                        xs={12}
                        md={{ offset: 1, span: 10 }}
                        lg={{ offset: 2, span: 8 }}
                        className="keyword-filter"
                    >
                        <strong className="text-muted">Work by</strong> <br />
                        <span
                            className={`${
                                selectedCollab === "Solo" && "text-bold"
                            } me-3 pointer filter`}
                            onClick={selectCollab}
                        >
                            Individual
                        </span>
                        <span
                            className={`${
                                selectedCollab === "Team" && "text-bold"
                            } mr-1 pointer filter`}
                            onClick={selectCollab}
                        >
                            Team
                        </span>
                    </Col>
                </Row>
                <Row className="pt-4 pb-5 px-2">
                    <Col
                        xs={12}
                        md={{ offset: 1, span: 10 }}
                        lg={{ offset: 2, span: 8 }}
                    >
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{ 360: 1, 768: 2, 992: 3 }}
                            gutterBreakPoints={{
                                360: "12px",
                                768: "16px",
                                992: "24px",
                            }}
                        >
                            <Masonry>
                                {devProjects.map((proj) => {
                                    let show = false;
                                    for (let stack of selectedStack) {
                                        if (proj.stack.includes(stack)) {
                                            show = true;
                                            break;
                                        }
                                    }
                                    if (
                                        selectedCollab !== "" &&
                                        proj.collab.includes(selectedCollab)
                                    ) {
                                        show = true;
                                    }
                                    if (
                                        show ||
                                        (selectedStack.length === 0 &&
                                            selectedCollab === "")
                                    ) {
                                        return (
                                            <DevProject
                                                key={proj.id}
                                                proj={proj}
                                                projects={projects}
                                                devImages={devImages}
                                                handleClick={selectProject}
                                            />
                                        );
                                    }
                                    return "";
                                })}
                            </Masonry>
                        </ResponsiveMasonry>
                    </Col>
                </Row>
            </Container>
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
                    {selectedProject?.title} ({selectedProject?.year})
                </h3>
                <div>{selectedProject?.desc}</div>

                {selectedProject?.prize && (
                    <div className="text-gray">
                        <small>🏆 {selectedProject?.prize}</small>
                    </div>
                )}
                <div className="mb-2">
                    <Links project={selectedProject} isPubList={false} />
                </div>
                <div className="mb-2">
                    <img
                        src={devImages[selectedProject?.id]}
                        alt={selectedProject?.title}
                    />
                </div>

                <p
                    dangerouslySetInnerHTML={{
                        __html: selectedProject?.explanation,
                    }}
                ></p>
            </Modal>
        </>
    );
};

export default Developer;
