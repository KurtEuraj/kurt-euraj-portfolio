import { Link } from "react-router-dom"
import githubSVG from "../../assets/images/Github.svg"
import linkedInSVG from "../../assets/images/linkedIN.svg"
import "./Hero.scss"

function Hero() {
    return (
        <div className="hero">
            <p className="hero__subhead">Full Stack Developer</p>
            <h1 className="hero__heading">Kurt Euraj</h1>
            <div className="hero__buttons-wrapper">
                <Link to="/projects" className="hero__button">My Projects</Link>
                <Link to="/resume" className="hero__button hero__button--black">View Resume</Link>
            </div>
            <div className="hero__social-links-wrapper">
                <a href="https://www.linkedin.com/in/kurt-euraj/" className="hero__social-link" target="_blank">
                    <img src={linkedInSVG} alt="LinkedIn Logo" className="hero__social-link-logo" />
                </a>
                <a href="https://github.com/KurtEuraj" className="hero__social-link" target="_blank">
                    <img src={githubSVG} alt="Github Logo" className="hero__social-link-logo" />
                </a>
            </div>
        </div>
    )
}

export default Hero