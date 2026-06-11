import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const testimonials = [
  { quote: 'Me llegó en 3 días y la calidad es una locura. Ya pedí la segunda.', user: '@jadonjohnson', img: 'https://images.unsplash.com/photo-1774413769417-29fde33e368b?w=60&h=60&fit=crop&auto=format' },
  { quote: 'Finalmente una marca que no le copia a nadie. HitHats tiene identidad propia.', user: '@1hundredimages', img: 'https://images.unsplash.com/photo-1710182240446-8ae8c223e135?w=60&h=60&fit=crop&auto=format' },
  { quote: 'El saco oversize es lo mejor que he comprado este año, 100% recomendado.', user: '@msmith0912', img: 'https://images.unsplash.com/photo-1770686307114-d343925f512e?w=60&h=60&fit=crop&auto=format' },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const elRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => {
      if (elRef.current) {
        gsap.to(elRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.4,
          onComplete: () => {
            setIndex((i) => (i + 1) % testimonials.length)
          },
        })
      }
    }, 4000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (elRef.current) {
      gsap.fromTo(elRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 })
    }
  }, [index])

  const t = testimonials[index]

  return (
    <section className="testimonials">
      <span className="section-label">— LO QUE DICEN</span>

      <div className="testimonials-carousel">
        <div className="testimonial active" ref={elRef}>
          <p className="testimonial-quote">{'\u201C'}{t.quote}{'\u201D'}</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar">
              <img src={t.img} alt={t.user} />
            </div>
            <span className="testimonial-user">{t.user}</span>
          </div>
        </div>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, i) => (
          <span key={i} className={`testimonial-dot ${i === index ? 'dot-active' : ''}`} />
        ))}
      </div>
    </section>
  )
}
