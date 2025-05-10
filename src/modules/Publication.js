import { Link } from "react-router-dom";
import Links from "./Links";

const Publication = ({ pub, projects }) => {
    const project = projects.filter((project) => project.id === pub.id);

    return (
        <div className="pub">
            {/* title */}
            <div className="pub-title mb-1">
                {pub.url ? (
                    <a href={pub.url} target="_blank" rel="noreferrer">
                        <b>{pub.title}</b>
                    </a>
                ) : (
                    <>
                        {pub.link ? (
                            <Link to={pub.link} rel="noreferrer">
                                <b>{pub.title}</b>
                            </Link>
                        ) : (
                            <a>
                                <b>{pub.title}</b>
                            </a>
                        )}
                    </>
                )}
            </div>

            <div className="text-small">
                {/* authors */}
                {pub.authors.map((author, i) => {
                    const comp = author.includes("Jaeyoon Song") ? (
                        <i>{author}</i>
                    ) : (
                        author
                    );
                    return (
                        <span key={i}>
                            {comp}
                            {i !== pub.authors.length - 1 ? ", " : ""}
                        </span>
                    );
                })}

                <div>
                    {pub.equal_contribution && (
                        <small>
                            <i>* Equal contribution</i>
                        </small>
                    )}
                </div>

                {/* venue */}
                {pub.conference && (
                    <>
                        {pub.conference.title} {pub.year}{" "}
                        {pub.upcoming ? "(to appear)" : ""}
                    </>
                )}

                {pub.journal && (
                    <>
                        {pub.journal.title}, pp. {pub.journal.page}, {pub.year}{" "}
                        {pub.upcoming ? "(to appear)" : ""}
                    </>
                )}

                {/* award */}
                {pub.award && (
                    <div className="text-muted">
                        <small>🏆 Won {pub.award} 🏆</small>
                    </div>
                )}

                {/* links */}
                {project?.length > 0 && (
                    <>
                        <Links project={project[0]} isPubList={true} />
                    </>
                )}
            </div>
        </div>
    );
};

export default Publication;
