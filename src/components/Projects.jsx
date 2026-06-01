import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeading
          eyebrow="Current projects"
          title="Active products across AI, creators, opportunity, travel, and developer discovery."
          description="Each project reflects a practical obsession with access, leverage, digital independence, and internet-native product design."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
