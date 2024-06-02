import React, { useEffect, useState } from "react";
import { projects } from "../data/projects";
import Project from "../modules/Project";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useLocation } from "react-router-dom";

const Research = () => {
    const location = useLocation();

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
        }
    };

    return (
        <section className="full-height bg-white">
            <div className="row pt-4 px-2">
                <div className="col-12 col-md-10 col-lg-8 mb-2 keyword-filter">
                    <strong className="text-muted">Keywords</strong> <br />
                    {allKeywords.map((keyword, i) => (
                        <span
                            key={i}
                            className={`${
                                selectedKeywords.includes(keyword) &&
                                "text-bold"
                            } mr-1 pointer filter`}
                            onClick={selectKeyword}
                        >
                            {keyword}
                        </span>
                    ))}
                </div>
                <div className="col-12 col-md-10 col-lg-8 keyword-filter">
                    <strong className="text-muted">Category</strong> <br />
                    {allCategories.map((category, i) => (
                        <span
                            key={i}
                            className={`${
                                selectedCategories.includes(category) &&
                                "text-bold"
                            } mr-1 pointer filter`}
                            onClick={selectCategory}
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>
            <div className="row pt-4 pb-5 px-2">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="row">
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
                                        handleClick={selectProject}
                                    />
                                );
                            }
                            return <div key={proj.id}></div>;
                        })}
                    </div>
                </div>
            </div>
            <Modal
                open={selectedProject !== null}
                onClose={() => setSelectedProject(null)}
                blockScroll={true}
            >
                {selectedProject !== null && (
                    <>
                        <h2>
                            {selectedProject.title} (
                            {parseInt(selectedProject.year / 100)})
                        </h2>
                        <div>{selectedProject.desc}</div>

                        {selectedProject.prize && (
                            <div>
                                <a
                                    className="text-gray"
                                    href={selectedProject.prize.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <small>
                                        🏆 {selectedProject.prize.name} 🏆
                                    </small>
                                </a>
                            </div>
                        )}

                        {selectedProject.keywords.map((keyword, i) => (
                            <span className="tag" key={i}>
                                {keyword}
                            </span>
                        ))}

                        <div className="mb-2">
                            <img
                                src={require(`../images/${selectedProject.image}`)}
                                alt={selectedProject.title}
                            />
                        </div>

                        <p
                            dangerouslySetInnerHTML={{
                                __html: selectedProject.paragraph,
                            }}
                        ></p>
                    </>
                )}
            </Modal>
        </section>
    );
};

export default Research;
