import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const links = ['Gorras', 'Sacos', 'Colección', 'Nosotros', 'Contacto']

export default function Nav({ onSideOpen }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const overlayRef = useRef(null)
  const linkRefs = useRef([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out', pointerEvents: 'all' })
      gsap.fromTo(linkRefs.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.6, ease: 'power3.out', delay: 0.2 }
      )
    } else {
      document.body.style.overflow = ''
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out', pointerEvents: 'none' })
    }
  }, [open])

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            HITHATS<span className="nav-logo-dot"></span>
          </a>

          <div className="nav-links">
            <a href="#" className="nav-link">Gorras</a>
            <a href="#" className="nav-link">Sacos</a>
            <a href="#" className="nav-link">Colección</a>
            <button className="nav-link nav-link--panel" onClick={onSideOpen}>
              Nosotros <span className="nav-link-arrow">*</span>
            </button>
          </div>

          <button className="nav-menu-btn" onClick={() => setOpen(!open)}>
            <span className="nav-menu-circle"></span>
            <span className="nav-menu-text-wrap">
              <span className={`nav-menu-text ${open ? 'nav-menu-text--hide' : ''}`}>Menú</span>
              <span className={`nav-menu-text nav-menu-text--close ${open ? 'nav-menu-text--show' : ''}`}>Cerrar</span>
            </span>
          </button>
        </div>
      </nav>

      <div className="nav-overlay" ref={overlayRef}>
        <div className="nav-overlay-inner">
          <div className="nav-overlay-links">
            {links.map((l, i) => (
              <a
                key={l}
                href={l === 'Nosotros' ? undefined : '#'}
                className="nav-overlay-link"
                ref={(el) => (linkRefs.current[i] = el)}
                onClick={l === 'Nosotros' ? () => { setOpen(false); onSideOpen() } : () => setOpen(false)}
                role={l === 'Nosotros' ? 'button' : undefined}
              >
                <span className="nav-overlay-link-text">{l}</span>
                {l === 'Nosotros' ? (
                  <span className="nav-overlay-link-arrow">↗</span>
                ) : (
                  <span className="nav-overlay-link-arrow">→</span>
                )}
              </a>
            ))}
          </div>
          <div className="nav-overlay-footer">
            <span>© 2025 HITHATS</span>
            <span>『Hecho en Colombia』</span>
          </div>
        </div>
      </div>
    </>
  )
}