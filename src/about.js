import "./css/about.css"
import Info from "./info.json"
const statements = Info.about

function About() {
    return(
        <div className="about">
            {statements.map((text, index) =>
            (
                <h2 key={index}>
                    {text}
                </h2>
            ))}
        </div>
    )
}

export default About