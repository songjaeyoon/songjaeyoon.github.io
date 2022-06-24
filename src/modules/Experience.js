const Experience = ({ exp }) => {
    return (
        <div className="exp mb-3">
            <div>
                <a target="_blank" href={`${exp.url}`}>
                    <b>{exp.institute}</b>
                </a>
            </div>

            <div>
                Adivsed by 
                <a target="_blank" className="black" href={`${exp.advisorurl}`}>
                    {" " + exp.advisor}
                </a>
            </div>

            <div className="date">
                <small>{exp.time}</small>
            </div>
        </div>
    )
}

export default Experience;