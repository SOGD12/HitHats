import { useState, useEffect } from 'react'

export default function AboutTicker({ words, interval = 2500 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <div className="about-ticker">
      <span className="about-section-label">Nos mueve</span>
      <div className="about-ticker-track">
        <div
          className="about-ticker-slider"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {words.map((w) => (
            <span key={w} className="about-ticker-item">{w}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
