import { stats } from '../data/portfolio'

function Stats() {
  return (
    <section className="stats-section" aria-label="Portfolio stats">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card fade-up" style={{ '--delay': `${index * 70}ms` }} key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
