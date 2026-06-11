import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

const items = [
  { num: '01', title: 'Sin filtro', text: 'Lo que ves es lo que hay. Sin postureo, sin imagen forzada.' },
  { num: '02', title: 'Hecho para durar', text: 'Materiales que aguantan la calle tanto como tú.' },
  { num: '03', title: 'Edición limitada', text: 'No producimos de más. Cada pieza tiene su momento.' },
  { num: '04', title: 'De Colombia para el mundo', text: 'Orgullo de dónde venimos, sin límites de hacia dónde vamos.' },
]

function AccordionItem({ item, isOpen, onClick }) {
  const textRef = useRef(null)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      if (isOpen && textRef.current) {
        gsap.set(textRef.current, { height: textRef.current.scrollHeight, overflow: 'hidden' })
      } else if (textRef.current) {
        gsap.set(textRef.current, { height: 0, overflow: 'hidden' })
      }
      return
    }
    if (textRef.current) {
      if (isOpen) {
        gsap.to(textRef.current, { height: textRef.current.scrollHeight, duration: 0.4, ease: 'power2.inOut' })
      } else {
        gsap.to(textRef.current, { height: 0, duration: 0.4, ease: 'power2.inOut' })
      }
    }
  }, [isOpen])

  return (
    <div className={`philo-item ${isOpen ? 'philo-item-open' : ''}`} onClick={onClick}>
      <div className="philo-num">{item.num}</div>
      <div className="philo-content">
        <div className="philo-header">
          <h3 className="philo-title">{item.title}</h3>
          <span className="philo-icon">{isOpen ? '−' : '+'}</span>
        </div>
        <div className="philo-text-wrapper" ref={textRef}>
          <p className="philo-text">{item.text}</p>
        </div>
      </div>
    </div>
  )
}

export default function Philosophy() {
  const [active, setActive] = useState(0)

  return (
    <section className="philosophy">
      <span className="section-label">— LO QUE SOMOS</span>
      <h2 className="section-title reveal-title">ACTITUD<br />ANTES QUE TODO</h2>

      <div className="philosophy-accordion">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={active === i}
            onClick={() => setActive(active === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}
