import { Link } from "react-router-dom";

const Links = ({ project, isPubList }) => {
    return (
        <div className="extra-links">
            {project.paper && (
                <a href={project.paper} target="_blank" rel="noreferrer">
                    <i className="far fa-sticky-note" aria-hidden="true"></i>{" "}
                    Paper
                </a>
            )}
            {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                    <i className="fas fa-link" aria-hidden="true"></i> Link
                </a>
            )}
            {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                    <i className="fas fa-laptop-code" aria-hidden="true"></i>{" "}
                    Demo
                </a>
            )}
            {project.video && (
                <a href={project.video} target="_blank" rel="noreferrer">
                    <i className="fas fa-play" aria-hidden="true"></i> Video
                </a>
            )}
            {project.slides && (
                <a href={project.slides} target="_blank" rel="noreferrer">
                    <i
                        className="far fa-window-maximize"
                        aria-hidden="true"
                    ></i>{" "}
                    Slides
                </a>
            )}
            {project.poster && (
                <a href={project.poster} target="_blank" rel="noreferrer">
                    <i
                        className="far fa-window-maximize"
                        aria-hidden="true"
                    ></i>{" "}
                    Poster
                </a>
            )}
            {project.code && (
                <a href={project.code} target="_blank" rel="noreferrer">
                    <i className="fab fa-github" aria-hidden="true"></i> Code
                </a>
            )}
            {project.id && isPubList === true && (
                <Link to={`/projects?key=${project.id}`} rel="noreferrer">
                    <i className="fas fa-info-circle" aria-hidden="true"></i>{" "}
                    Info
                </Link>
            )}
        </div>
    );
};

export default Links;
