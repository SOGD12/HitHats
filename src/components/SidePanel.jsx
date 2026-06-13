import { useEffect, useRef } from 'react'
import AboutBio from './AboutBio'
import AboutTicker from './AboutTicker'
import AboutClients from './AboutClients'
import AboutAwards from './AboutAwards'
import AboutPrinciples from './AboutPrinciples'

const bio = {
  label: 'EL ESTUDIO',
  paragraphs: [
    'HITHATS nace de una contradicción: la obsesión por el detalle y la urgencia de hacer. Somos un estudio colombiano que crea gorras y sacos con identidad — piezas que no piden permiso para existir.',
    'Detrás de cada puntada hay horas de oficio, materiales que eligieron su propia textura y la convicción de que lo hecho a mano cuenta una historia que lo industrial no puede contar.',
  ],
  est: '2025',
  basedIn: 'COLOMBIA',
}

const tickerWords = ['Crear', 'Diseñar', 'Obsesionar', 'Innovar', 'Expresar']

const clients = {
  title: 'Clientes',
  items: [
    'Estudio Gracia',
    'Casa Lisboa',
    'Taller Objeto',
    'Marca Propia',
    'Galería Central',
  ],
}

const awards = {
  title: 'Premios',
  items: [
    'Lápiz de Acero — Diseño Textil (2025)',
    'Bienal de Diseño — Mención Honorífica',
    'FWA — SOTD Colombia',
    'Awwwards — Selección del Mes',
  ],
}

const principles = {
  title: 'Nuestros Principios',
  items: [
    {
      title: 'Artesanía Sin Prisa',
      desc: 'Cada pieza lleva el tiempo que necesita. No cortamos esquinas, tejemos caminos.',
    },
    {
      title: 'Obsesión por el Detalle',
      desc: 'Si no se ve, se siente. El hilo, el corte, el ajuste. Todo importa.',
    },
    {
      title: 'Identidad Antes que Tendencia',
      desc: 'No seguimos lo que está de moda. Seguimos lo que es cierto.',
    },
    {
      title: 'Hecho en Colombia',
      desc: 'Nuestra tierra, nuestras manos, nuestro sello.',
    },
  ],
}

export default function SidePanel({ isOpen, onClose }) {
  const contentRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  useEffect(() => {
    const el = contentRef.current
    if (!el || !isOpen) return

    const onWheel = (e) => {
      e.stopPropagation()
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [isOpen])

  return (
    <>
      <div className={`side-overlay ${isOpen ? 'side-overlay--show' : ''}`} onClick={onClose} />
      <aside className={`side-panel ${isOpen ? 'side-panel--open' : ''}`}>
        <button className="side-panel-close" onClick={onClose} aria-label="Cerrar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="side-panel-inner">
          <div className="side-panel-col side-panel-col--content" ref={contentRef}>
            <AboutBio
              label={bio.label}
              paragraphs={bio.paragraphs}
              est={bio.est}
              basedIn={bio.basedIn}
            />
            <AboutTicker words={tickerWords} />
            <AboutClients title={clients.title} items={clients.items} />
            <AboutAwards title={awards.title} items={awards.items} />
            <AboutPrinciples title={principles.title} items={principles.items} />
          </div>
        </div>
      </aside>
    </>
  )
}
