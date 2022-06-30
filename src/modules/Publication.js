const Publication = ({ pub, projects }) => {

    const project = projects.filter(project => project.id === pub.id);

    return (
        <div class="pub mb-3">
            {/* title */}
            <div class="pub-title">
                <a href={pub.url ? pub.url : ""}>
                    <b>{pub.title}</b>
                </a>
            </div>

            {/* authors */}
            {pub.authors.map((author, i) => {
                const comp = author.includes("Jaeyoon Song") ? <i>{author}</i> : author;
                return <>{comp} {i !== pub.authors.length - 1 ? ", " : ""}</>
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
                <div class="text-muted">
                    <small>
                        🏆 Won {pub.award} 🏆
                    </small>
                </div>
            }

            {/* links */}
            {project?.length > 0 && <>
            </>}
    

        </div>
    );
}

export default Publication;