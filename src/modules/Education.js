const Education = ({ edu }) => {
    return (
        <div class="exp mb-3">
            <div>
                <a target="_blank" href={edu.url}>
                    <b>{edu.institute}</b>
                </a>
            </div>

            <div>
               {edu.degree}, {edu.desc}
            </div>

            <div class="date">
                <small>{edu.time}</small>
            </div>
        </div>
    )
}

export default Education;