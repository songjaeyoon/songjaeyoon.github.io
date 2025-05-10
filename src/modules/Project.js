import React from "react";
import Links from "./Links";
import { Col } from "react-bootstrap";

const Project = ({ proj, projImages, handleClick }) => {
    return (
        <Col
            xs={12}
            md={6}
            lg={4}
            className="project"
            id={proj.id}
            onClick={handleClick}
        >
            <div className="project-wrapper">
                <div className="project-img">
                    <img src={projImages[proj.id]} alt={proj.title} />
                </div>
                <div className="project-text text-right text-gray text-small">
                    <b>
                        {proj.title} ({parseInt(proj.year / 100)})
                    </b>
                    <br />
                    {proj.keywords.map((keyword, i) => (
                        <span key={i}>
                            {keyword}
                            {i !== proj.keywords.length - 1 ? ", " : ""}
                        </span>
                    ))}
                    <br />
                    {/* {proj.link && <span> Live at <a className="border-link" href={proj.link} target="_blank" rel="noreferrer">{proj.link}</a><br/></span>} */}
                    {proj.prize && (
                        <small className="text-black">
                            🏆 {proj.prize.name}
                        </small>
                    )}
                    <Links project={proj} isPubList={false} />
                </div>
            </div>
        </Col>
    );
};

export default Project;
