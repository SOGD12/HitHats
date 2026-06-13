export default function AboutClients({ title, items }) {
  return (
    <div className="about-clients">
      <span className="about-section-label">{title}</span>
      <div className="about-list">
        {items.map((item, i) => (
          <div key={i} className="about-list-item">{item}</div>
        ))}
      </div>
    </div>
  )
}
