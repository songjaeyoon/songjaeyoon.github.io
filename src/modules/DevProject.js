import React from "react";
import Links from "./Links";

const DevProject = ({ proj, projects, devImages }) => {
    const found = projects.filter((project) => project.id === proj.id);
    const project = found.length > 0 ? found[0] : proj;

    return (
        <div className="project col-12 col-md-6 col-lg-4">
            <div className="project-wrapper">
                <div className="project-img">
                    <img src={devImages[proj.id]} alt={proj.title} />
                </div>
                <div className="project-text text-right text-gray text-small">
                    <b>
                        {proj.title} ({proj.year})
                    </b>
                    <br />
                    <i>{proj.collab}</i> &nbsp;| &nbsp;
                    {proj.stack.map((s, i) => (
                        <span key={i}>
                            {s}
                            {i !== proj.stack.length - 1 ? ", " : ""}
                        </span>
                    ))}
                    <br />
                    {/* {proj.link && <span> Live at <a className="border-link" href={proj.link} target="_blank" rel="noreferrer">{proj.link}</a><br/></span>} */}
                    {proj.prize && (
                        <small className="text-black">🏆 {proj.prize} 🏆</small>
                    )}
                    <Links project={project} />
                </div>
            </div>
        </div>
    );
};

export default DevProject;
