import SectionHeading from './SectionHeading'

function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <SectionHeading
          eyebrow="About me"
          title="A Panamanian polymath shaped by adversity, discipline, and global ambition."
          description="Roniher Cabrera is a Panamanian polymath, founder, software engineer, digital nomad, and lifelong learner whose journey has taken him from an orphanage in Panama to more than 120 countries across six continents."
        />
        <div className="about-content fade-up delay-1">
          <p>
            Raised in an orphanage in Panama from an early age, Roniher learned
            to rely on discipline, self-education, and resilience long before he
            discovered technology and entrepreneurship. From those challenging
            circumstances, he developed a passion for learning, science,
            strategy, and self-improvement.
          </p>
          <p>
            Through relentless self-study and discipline, he became a highly
            competitive chess player, representing Panama internationally and
            competing at the Chess Olympiad level. Alongside chess, he pursued
            competitive swimming and rose through the national ranks to become a
            high-performance athlete, training among Panama&apos;s top swimmers
            while pursuing Olympic-level performance.
          </p>
          <p>
            His journey also includes military training experience, which
            strengthened his discipline, leadership, adaptability, and ability
            to perform under pressure.
          </p>
          <p>
            Driven by a deep fascination with science, he aspired to study
            Physics and later expanded his interests into software engineering,
            artificial intelligence, entrepreneurship, business, and technology.
          </p>
          <p>
            Today he studies Computer Science through MIT Open Learning and
            Business Administration & Marketing through UDIMA while building
            startups and technology products.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
