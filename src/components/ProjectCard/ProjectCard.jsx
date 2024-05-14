import "./ProjectCard.scss"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectCard({ name, description, frontendLink, backendLink, projectLink, tools, thumbnail }) {
    gsap.registerPlugin(useGSAP);
    const tl = gsap.timeline();

    useGSAP(() => {
        tl.fromTo(".project-card", {
            opacity: 0,
            y: 40,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
        })
        tl.fromTo(".project-card__name", {
            opacity: 0,
            y: 20,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
        }, 0.7)
        tl.fromTo(".project-card__links-wrapper", {
            opacity: 0,
            y: 20,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
        }, 0.7)
        tl.fromTo(".project-card__tool", {
            opacity: 0,
            x: 20
        }, {
            duration: 1,
            opacity: 1,
            x: 0,
            stagger: 0.25,
        }, "-=0.7")
        tl.fromTo(".project-card__description", {
            opacity: 0,
            y: 20,
        }, {
            duration: 1,
            opacity: 1,
            y: 0
        }, 1.3)
        tl.fromTo(".project-card__project-link", {
            opacity: 0,
            x: 20,
        }, {
            duration: 1,
            opacity: 1,
            x: 0
        }, 1.6)
    }, {})

    return (
        <article className="project-card">
            <div className="project-card__content-wrapper">
                <div className="project-card__heading-wrapper">
                    <h2 className="project-card__name">{name}</h2>
                    <div className="project-card__links-wrapper">
                        {frontendLink ? (
                            <a href={frontendLink} className="project-card__link" target="_blank" rel="noreferrer">
                                Frontend
                            </a>
                        ) : null}
                        {backendLink ? (
                            <a href={backendLink} className="project-card__link" target="_blank" rel="noreferrer">
                                Backend
                            </a>
                        ) : null}
                    </div>
                </div>
                <img className="project-card__thumbnail" src={thumbnail} alt={`${name} thumbnail`} />
                <div className="project-card__body-wrapper">
                    <div className="project-card__tools-wrapper">
                        {tools.map((tool) => (
                            <div className="project-card__tool" key={tool}>
                                <p>{tool}</p>
                            </div>
                        ))}
                    </div>
                    <div className="project-card__description-wrapper">
                        <p className="project-card__description">{description}</p>
                        <a href={projectLink} className="project-card__project-link" target="_blank" rel="noreferrer">
                            View Site
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard