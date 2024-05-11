import "./ProjectCard.scss"
import arrow from "../../assets/images/arrow.svg"

function ProjectCard({ name, description, frontendLink, backendLink, projectLink, tools, thumbnail }) {
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
                <a href={projectLink} className="project-card__thumbnail-wrapper" target="_blank" rel="noreferrer">
                    <div className="project-card__thumbnail-icon-wrapper">
                        <img src={arrow} alt={`link to ${name} site`} className="project-card__thumbnail-icon" />
                    </div>
                    <img className="project-card__thumbnail" src={thumbnail} alt={`${name} thumbnail`} />
                </a>

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
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard