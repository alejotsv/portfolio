interface ProjectProps {
  project:{
    title: string;
    thumbnail: string;
    description: string;
    technologies: string[];
    link: string;
  }
}

const Project = ({project}: ProjectProps) => {
  return(
    <div className="projects-grid">
      <div className="project-tile">
      <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-technologies">
        {project.technologies.map((tech: string) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={project.link} className="project-link">Learn More</a>
    </div>   
    </div>
  )
}

export default Project;