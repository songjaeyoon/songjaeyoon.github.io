const Education = ({ edu }) => {
    return (
        <div className="exp mb-3">
            <div>
                <a target="_blank" rel="noreferrer"  href={edu.url}>
                    <b>{edu.institute}</b>
                </a>
            </div>

            <div>
               {edu.degree}, {edu.desc}
            </div>

            <div className="date">
                <small>{edu.time}</small>
            </div>
        </div>
    )
}

export default Education;