export default function AboutBio({ label, paragraphs, est, basedIn }) {
  return (
    <div className="about-bio">
      <span className="about-section-label">{label}</span>
      {paragraphs.map((p, i) => (
        <p key={i} className="about-bio-text">{p}</p>
      ))}
      <div className="about-bio-meta">
        <span className="about-bio-meta-line">EST. {est}</span>
        <span className="about-bio-meta-line">BASED IN {basedIn}</span>
      </div>
    </div>
  )
}
