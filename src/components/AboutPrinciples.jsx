export default function AboutPrinciples({ title, items }) {
  return (
    <div className="about-principles">
      <span className="about-section-label">{title}</span>
      {items.map((item, i) => (
        <div key={i} className="about-principle">
          <h3 className="about-principle-title">{item.title}</h3>
          <p className="about-principle-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}
