import { education, interests } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Education() {
  return (
    <section className="section profile-section" id="education">
      <div className="container profile-grid">
        <div>
          <SectionHeading
            eyebrow="Education"
            title="Studying the foundations behind technology, business, and growth."
            description="Roniher combines formal learning, self-study, and real-world building across computer science, business, marketing, and deep personal interests."
          />
          <div className="education-list fade-up delay-1">
            {education.map((item) => (
              <article className="education-card" key={item.institution}>
                <p>{item.institution}</p>
                <h3>{item.focus}</h3>
              </article>
            ))}
          </div>
        </div>

        <div className="interest-panel fade-up delay-1">
          <p className="card-label">Areas of interest</p>
          <div className="interest-list">
            {interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
