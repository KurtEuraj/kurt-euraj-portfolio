import "./ProjectsWrapper.scss"
import ProjectCard from "../ProjectCard/ProjectCard"
import { projects } from "../../constants/projects"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function ProjectsWrapper() {
    gsap.registerPlugin(useGSAP);
    const tl = gsap.timeline();

    useGSAP(() => {
        tl.fromTo(".projects__heading", {
            opacity: 0,
            y: 20,
        }, {
            duration: 1,
            opacity: 1,
            y: 0,
        })
    }, {})

    return (
        <div className="projects">
            <h1 className="projects__heading">Projects</h1>
            <div className="projects-wrapper">
                {projects.map((project) => (
                    <ProjectCard key={project.name} thumbnail={project.thumbnail} name={project.name} tools={project.tools} description={project.description} frontendLink={project.repoLinks?.frontend} backendLink={project.repoLinks?.backend} projectLink={project.projectLink} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsWrapper