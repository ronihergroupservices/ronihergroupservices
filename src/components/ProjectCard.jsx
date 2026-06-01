function ProjectCard({ project, index }) {
  return (
    <article className="project-card fade-up" style={{ '--delay': `${index * 90}ms` }}>
      <div className="project-body">
        <div>
          <div className="project-topline">
            <p className="project-category">{project.category}</p>
            <span className="status-badge">{project.status}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="project-footer">
          <div className="tag-list" aria-label={`${project.title} tags`}>
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
            Visit Project
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
