import "./ProjectsWrapper.scss"
import ProjectCard from "../ProjectCard/ProjectCard"
import { projects } from "../../constants/projects"

function ProjectsWrapper() {
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