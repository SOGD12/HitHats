import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import Lenis from '@studio-freight/lenis'

import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Products from './components/Products'
import Statement from './components/Statement'
import Philosophy from './components/Philosophy'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Process from './components/Process'
import Cta from './components/Cta'
import Footer from './components/Footer'

import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    const isMobile = window.innerWidth < 768

    // — Page load timeline —
    const tl = gsap.timeline({ delay: 0.2 })
    tl.from('nav', { y: -40, opacity: 0, duration: 0.7, ease: 'power3.out' })
      .from('.hero-badge', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')

    const heroLines = document.querySelectorAll('.hero-line-text')
    if (heroLines.length) {
      heroLines.forEach((el) => {
        const split = new SplitText(el, { type: 'chars' })
        tl.from(split.chars, {
          y: isMobile ? 60 : 100,
          opacity: 0,
          rotateX: isMobile ? 0 : -45,
          stagger: 0.025,
          duration: isMobile ? 0.7 : 1,
          ease: 'power4.out',
          transformOrigin: 'top center',
        }, '-=0.2')
      })
    }

    tl.from('.hero-sub', { y: 20, opacity: 0, duration: 0.6 }, '-=0.5')
      .from('.hero-stats span', { y: 10, opacity: 0, stagger: 0.1, duration: 0.4 }, '-=0.4')

    // — Monolog-style word reveal titles —
    document.querySelectorAll('.reveal-title').forEach((el) => {
      const split = new SplitText(el, { type: 'lines,words' })
      gsap.fromTo(split.words,
        { y: isMobile ? 40 : 80, opacity: 0 },
        {
          y: 0, opacity: 1,
          stagger: 0.04,
          duration: isMobile ? 0.6 : 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: isMobile ? 'top 88%' : 'top 82%', toggleActions: 'play none none none' },
        }
      )
    })

    // — Product cards staggered —
    gsap.fromTo('.product-card',
      { y: isMobile ? 40 : 70, opacity: 0 },
      {
        y: 0, opacity: 1,
        stagger: isMobile ? 0.1 : 0.15,
        duration: isMobile ? 0.5 : 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.products-grid', start: isMobile ? 'top 85%' : 'top 75%', toggleActions: 'play none none none' },
      }
    )

    // — Statement scrub —
    gsap.fromTo('.statement-line',
      { y: isMobile ? 40 : 0, x: isMobile ? 0 : (i) => (i % 2 === 0 ? -100 : 100), opacity: 0 },
      {
        y: 0, x: 0, opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.statement',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    )

    // — Gallery reverse scroll columns —
    const galleryWrap = document.querySelector('.gallery-reverse-wrap')
    const revCols = document.querySelectorAll('.gallery-col--reverse')
    if (galleryWrap && revCols.length) {
      let maxTravel = 0
      const travels = []
      revCols.forEach((col) => {
        const t = col.scrollHeight - window.innerHeight
        travels.push(t)
        if (t > maxTravel) maxTravel = t
      })
      if (maxTravel > 0) {
        ScrollTrigger.create({ trigger: galleryWrap, start: 'top top', end: `+=${maxTravel}`, pin: true })
        revCols.forEach((col, i) => {
          gsap.to(col, {
            y: -travels[i],
            ease: 'none',
            scrollTrigger: { trigger: galleryWrap, start: 'top top', end: `+=${travels[i]}`, scrub: true },
          })
        })
      }
    }

    // — Process scroll-driven steps — (handled by IntersectionObserver in Process.jsx)

    // — CTA kinetic lines —
    gsap.fromTo('.cta-line',
      { y: isMobile ? 40 : 80, opacity: 0 },
      {
        y: 0, opacity: 1,
        stagger: 0.1,
        duration: isMobile ? 0.5 : 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.cta', start: 'top 75%', toggleActions: 'play none none none' },
      }
    )

    // — Hero image parallax —
    gsap.to('.hero-img', {
      scrollTrigger: { trigger: '.hero', scrub: 2 },
      y: isMobile ? -50 : -100,
      ease: 'none',
    })

    // — Product card hover GSAP —
    document.querySelectorAll('.product-card, .gallery-item').forEach((card) => {
      const img = card.querySelector('img')
      card.addEventListener('mouseenter', () =>
        gsap.to(img, { scale: 1.07, duration: 0.5, ease: 'power2.out' })
      )
      card.addEventListener('mouseleave', () =>
        gsap.to(img, { scale: 1, duration: 0.5, ease: 'power2.out' })
      )
    })

    ScrollTrigger.refresh()

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="app">
      <Nav />
      <Hero />
      <Marquee />
      <Products />
      <Statement />
      <Philosophy />
      <Testimonials />
      <Gallery />
      <Process />
      <Cta />
      <Footer />
    </div>
  )
}
