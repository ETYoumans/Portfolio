import "./foot.css";
import GitHubLogo from "./imgs/github_logo.png";
import LinkedInLogo from "./imgs/linkedin_logo.png";
import EmailLogo from "./imgs/email.png";

const Foot = ({

}) => {
    return(
    <div className="foot">
        <div className="contact-buttons">
            <a href="https://github.com/ETYoumans" target="_blank" rel="noopener noreferrer">
                <img src={GitHubLogo} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/ethan-youmans-201409301/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInLogo} alt="LinkedIn" />
            </a>
            <a href="mailto:ethanyoumans@outlook.com">
                <img src={EmailLogo} alt="Email" />
            </a>
        </div>
    </div>
    );
}

export default Foot;