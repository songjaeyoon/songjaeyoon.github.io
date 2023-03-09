import Links from "./Links";

const Publication = ({ pub, projects }) => {

    const project = projects.filter(project => project.id === pub.id);

    return (
        <div className="pub mb-3">
            {/* title */}
            <div className="pub-title mb-1">
                <a href={pub.url ? pub.url : ""}>
                    <b>{pub.title}</b>
                </a>
            </div>

            <div className="text-small">
                {/* authors */}
                {pub.authors.map((author, i) => {
                    const comp = author.includes("Jaeyoon Song") ? <i>{author}</i> : author;
                    return <span key={i}>{comp} {i !== pub.authors.length - 1 ? ", " : ""}</span>
                })}

                <div>
                    {pub.equal_contribution && <small><i>* Equal contribution</i></small>}
                </div>

                {/* venue */}
                {pub.conference && <>
                    {pub.conference.title} {pub.year} {pub.upcoming ? ", to appear" : ""}
                </>}

                {pub.journal && <>
                    {pub.journal.title} vol. {pub.journal.volume}, no. {pub.journal.issue}, pp. {pub.journal.page}, {pub.year} {pub.upcoming ? ", to appear" : ""}
                </>}

                {/* award */}
                {pub.award &&
                    <div className="text-muted">
                        <small>
                            🏆 Won {pub.award} 🏆
                        </small>
                    </div>
                }

                {/* links */}
                {project?.length > 0 && <>
                    <Links project={project[0]} />
                </>}
            </div>
    

        </div>
    );
}

export default Publication;