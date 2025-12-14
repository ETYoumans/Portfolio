import "./css/foot.css";
import GitHubLogo from "./imgs/github_logo.png";
import LinkedInLogo from "./imgs/linkedin_logo.png";
import EmailLogo from "./imgs/email.png";
import ResumeLogo from "./imgs/resume_icon.png";
import Info from "./info.json"

function Foot() {
    return(
    <div className="foot">
        <div className="contact-buttons">
            <a href={Info.basics.github} target="_blank" rel="noopener noreferrer">
                <img src={GitHubLogo} alt="GitHub" />
            </a>
            <a href={Info.basics.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
            <a href={Info.basics.email}>
                <img src={EmailLogo} alt="Email" />
            </a>
            <a href={Info.basics.resume} download="YoumansEthanResume.pdf">
                <img src={ResumeLogo} alt="Resume" />
            </a>
        </div>
    </div>
    );
}

export default Foot