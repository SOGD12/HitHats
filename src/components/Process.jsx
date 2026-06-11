import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Creativo',
    desc: 'Cada prenda empieza con una idea. Dibujamos, rompemos esquemas y encontramos la forma de contar una historia a través del streetwear.',
    img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=1000&fit=crop&auto=format',
  },
  {
    num: '02',
    title: 'Diseño',
    desc: 'Transformamos el concepto en patrones y siluetas. Selección de textiles, ajustes de corte y detalles que marcan la diferencia.',
    img: 'https://images.unsplash.com/photo-1558769132-bb1f5ec4ef6f?w=800&h=1000&fit=crop&auto=format',
  },
  {
    num: '03',
    title: 'Resultado',
    desc: 'La pieza final cobra vida. Cada costura revisada, cada acabado pulido. Listo para la calle, listo para el mundo.',
    img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=1000&fit=crop&auto=format',
  },
  {
    num: '04',
    title: 'Fotografía',
    desc: 'Capturamos la esencia. Sesiones que muestran la prenda en su hábitat natural: la calle, el movimiento, la actitud real.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop&auto=format',
  },
]

export default function Process() {
  const stepsRef = useRef([])
  const imgsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepsRef.current.indexOf(entry.target)
            if (index === -1) return

            stepsRef.current.forEach((el, i) => {
              if (el) el.classList.toggle('active', i === index)
            })
            imgsRef.current.forEach((img, i) => {
              if (img) img.classList.toggle('active', i === index)
            })
          }
        })
      },
      { threshold: 0.5 }
    )

    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="process">
      <div className="process-intro">
        <span className="section-label">— CÓMO NACEN</span>
        <h2 className="section-title reveal-title">PROCESO DE<br />CREACIÓN</h2>
      </div>

      <div className="process-sticky-wrap">
        <div className="process-image">
          {steps.map((s, i) => (
            <img
              key={i}
              ref={(el) => (imgsRef.current[i] = el)}
              className={`process-img ${i === 0 ? 'active' : ''}`}
              src={s.img}
              alt={s.title}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              width="800"
              height="1000"
            />
          ))}
          <div className="process-overlay"></div>
        </div>

        <div className="process-steps">
          <div className="process-progress">
            <div className="process-progress-bar"></div>
          </div>
          {steps.map((s, i) => (
            <div
              key={i}
              ref={(el) => (stepsRef.current[i] = el)}
              className={`process-step ${i === 0 ? 'active' : ''}`}
            >
              <span className="process-step-num">{s.num}</span>
              <div className="process-step-content">
                <h3 className="process-step-title">{s.title}</h3>
                <p className="process-step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
