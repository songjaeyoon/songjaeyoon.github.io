import React from "react";
import Links from "./Links";

const Project = ({ proj, projImages, handleClick }) => {
    return (
        <div
            className="project col-12 col-md-6 col-lg-4"
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
                            🏆 {proj.prize.name} 🏆
                        </small>
                    )}
                    <Links project={proj} />
                </div>
            </div>
        </div>
    );
};

export default Project;
