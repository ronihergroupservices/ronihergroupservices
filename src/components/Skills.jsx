import { skills } from '../data/portfolio'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

function Skills() {
  return (
    <section className="section soft-section" id="expertise">
      <div className="container">
        <SectionHeading
          eyebrow="Skills & expertise"
          title="Services built around software, AI, startups, and digital execution."
          description="A focused service stack for building products, automating workflows, and turning ambitious ideas into usable technology."
        />
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article
              className="skill-card fade-up"
              style={{ '--delay': `${index * 80}ms` }}
              key={skill.title}
            >
              <div className="card-icon">
                <Icon name={skill.icon} />
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
