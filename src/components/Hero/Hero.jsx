import { Link } from "react-router-dom"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import githubSVG from "../../assets/images/Github.svg"
import linkedInSVG from "../../assets/images/linkedIN.svg"
import resume from "../../assets/Kurt-Euraj-Resume.pdf"
import "./Hero.scss"

function Hero() {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const tl = gsap.timeline();

    useGSAP(() => {
        tl.fromTo(".hero__heading", {
            opacity: 0,
            y: -10
        }, {
            duration: 1,
            opacity: 1,
            y: 0
        })
        tl.fromTo(".hero__subhead", {
            opacity: 0,
            y: 10
        }, {
            duration: 1,
            opacity: 1,
            y: 0
        }, 0.25)
        tl.fromTo(".hero__button", {
            opacity: 0,
            x: 10
        }, {
            duration: 0.75,
            stagger: 0.25, 
            opacity: 1,
            x: 0
        }, 0.5)
        tl.fromTo(".hero__social-link", {
            opacity: 0,
            y: 20
        }, {
            duration: 1,
            stagger: 0.25, 
            opacity: 1,
            y: 0
        }, 0.6)
    }, {})

    const openResume = () => {
        const isClient = typeof window !== 'undefined';

        if (isClient) {
            window.open(resume, '_blank');
        }
    }
    
    return (
        <div className="hero">
            <p className="hero__subhead">Full Stack Developer</p>
            <h1 className="hero__heading">Kurt Euraj</h1>
            <div className="hero__buttons-wrapper">
                <Link to="/projects" className="hero__button">My Projects</Link>
                <button onClick={openResume} className="hero__button hero__button--black">View Resume</button>
            </div>
            <div className="hero__social-links-wrapper">
                <a href="https://www.linkedin.com/in/kurt-euraj/" className="hero__social-link" target="_blank" rel="noreferrer">
                    <img src={linkedInSVG} alt="LinkedIn Logo" className="hero__social-link-logo" />
                </a>
                <a href="https://github.com/KurtEuraj" className="hero__social-link" target="_blank" rel="noreferrer">
                    <img src={githubSVG} alt="Github Logo" className="hero__social-link-logo" />
                </a>
            </div>
        </div>
    )
}

export default Hero