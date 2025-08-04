import React, { useEffect, useState } from "react";
import { projects } from "../data/projects";
import Project from "../modules/Project";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Research = ({ projImages, history }) => {
    const location = useLocation();

    const [selectedKeywords, setSelectedKeywords] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const allKeywords = [
        ...new Set(projects.map((proj) => proj.keywords).flat(1)),
    ];
    const allCategories = [
        ...new Set(projects.map((proj) => proj.topic).flat(1)),
    ];

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
                {/* <Col
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
                </Col> */}
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
    );
};

export default Research;
