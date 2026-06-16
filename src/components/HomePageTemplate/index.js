import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FaChevronDown, FaPlay, FaTimes } from 'react-icons/fa'

import AboutPageTemplate from '../AboutPageTemplate'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import LatestPosts from '../LatestPosts'
import Reveal from '../Reveal'

// Vimeo ID used for the full-bleed hero showreel + "Watch Showreel" modal.
// Swap for a dedicated reel whenever one is available.
const SHOWREEL_ID = 888900679

const ReelModal = ({ open, onClose, showreel }) => {
  if (!open || typeof document === 'undefined') return null
  return ReactDOM.createPortal(
    <div className='reel-modal' onClick={onClose}>
      <button className='reel-modal__close' onClick={onClose} aria-label='Close showreel'>
        <FaTimes />
      </button>
      <div className='reel-modal__content' onClick={(e) => e.stopPropagation()}>
        {showreel ? (
          <video className='reel-modal__video' src={showreel} controls autoPlay playsInline />
        ) : (
          <div className='video-embed-wrapper'>
            <iframe
              title='Showreel'
              src={`https://player.vimeo.com/video/${SHOWREEL_ID}?autoplay=1&title=0&byline=0&portrait=0`}
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}

const HomePageTemplate = ({
  aboutContent,
  aboutContentComponent,
  title,
  subtitle,
  offerings,
  services,
  showreel,
  heroImages,
  mobileHeroImages,
  testimonials
}) => {
  const [reelOpen, setReelOpen] = useState(false)
  const [image, setImage] = useState(0)
  const [mobileImage, setMobileImage] = useState(0)
  const images = heroImages || []
  const mobileImages = mobileHeroImages || []

  const scrollTo = (id) => {
    if (typeof document === 'undefined') return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const useInterval = (callback, delay) => {
    const savedCallback = useRef()
    useEffect(() => { savedCallback.current = callback })
    useEffect(() => {
      const tick = () => savedCallback.current()
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }, [delay])
  }

  useInterval(() => {
    if (images.length) {
      setImage((prev) => (prev >= images.length - 1 ? 0 : prev + 1))
    }
    if (mobileImages.length) {
      setMobileImage((prev) => (prev >= mobileImages.length - 1 ? 0 : prev + 1))
    }
  }, 6000)

  return (
    <div>
      <section className='reel-hero'>
        {showreel ? (
          <div className='reel-hero__bg reel-hero__bg--video desktop--hero'>
            <video
              src={showreel}
              autoPlay
              muted
              loop
              playsInline
              poster={images[0] && images[0].image}
            />
          </div>
        ) : (
          <div className='reel-hero__bg desktop--hero'>
            {images.map((img, i) => (
              <img
                key={i}
                alt=''
                aria-hidden='true'
                src={img.image}
                className={i === image ? 'is-active' : ''}
              />
            ))}
          </div>
        )}
        <div className='reel-hero__bg reel-hero__bg--mobile mobile--hero'>
          {mobileImages.map((img, i) => (
            <img
              key={i}
              alt=''
              aria-hidden='true'
              src={img.image}
              className={i === mobileImage ? 'is-active' : ''}
            />
          ))}
        </div>
        <div className='reel-hero__overlay' />
        <div className='reel-hero__content'>
          <span className='kicker'>Showreel</span>
          <h1 className='reel-hero__title'>{title}</h1>
          <p className='reel-hero__role'>{subtitle}</p>
          <div className='reel-hero__actions'>
            <button
              className='button is-primary is-large'
              onClick={() => setReelOpen(true)}
            >
              <FaPlay />
              <span>Watch Showreel</span>
            </button>
            <button
              className='button is-ghost is-large'
              onClick={() => scrollTo('work')}
            >
              View Work
            </button>
          </div>
        </div>
        <button
          className='hero--scroll'
          onClick={() => scrollTo('work')}
          aria-label='Scroll to work'
        >
          <FaChevronDown />
        </button>
      </section>

      <ReelModal open={reelOpen} onClose={() => setReelOpen(false)} showreel={showreel} />

      <section id='work' className='section'>
        <div className='container'>
          <Reveal className='section-head'>
            <span className='kicker'>Selected Work</span>
            <h2 className='title is-size-2'>Films &amp; Projects</h2>
          </Reveal>
          <Reveal>
            <Offerings gridItems={offerings.blurbs} />
          </Reveal>
          <Reveal className='section-cta'>
            <a
              className='button is-primary is-large'
              href='https://vimeo.com/user95280234'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='see more'
            >
              See More on Vimeo
            </a>
          </Reveal>
        </div>
      </section>

      <AboutPageTemplate
        content={aboutContent}
        contentComponent={aboutContentComponent}
      />

      <section id='services' className='section section--alt'>
        <div className='container'>
          <Reveal className='section-head'>
            <span className='kicker'>What I Offer</span>
            <h2 className='title is-size-2'>Services</h2>
          </Reveal>
          <Reveal>
            <div className='columns is-multiline services--section'>
              {services.map((service) => (
                <div key={service.text} className='column is-4'>
                  <section className='services--section__item'>
                    <img alt='service' src={service.image} />
                    <p className='is-size-3 is-size-4-mobile'>{service.text}</p>
                  </section>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className='section-cta'>
            <Link className='button is-primary is-large' to='/contact'>
              Get A Service
            </Link>
          </Reveal>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <Reveal className='section-head'>
            <span className='kicker'>Kind Words</span>
            <h2 className='title is-size-2'>Testimonials</h2>
          </Reveal>
          <Reveal>
            <Testimonials testimonials={testimonials} />
          </Reveal>
        </div>
      </section>

      <section className='section section--alt'>
        <div className='container'>
          <Reveal className='section-head'>
            <span className='kicker'>From the Journal</span>
            <h2 className='title is-size-2'>Latest Posts</h2>
          </Reveal>
          <Reveal>
            <LatestPosts count={2} />
          </Reveal>
          <Reveal className='section-cta'>
            <Link className='button is-primary is-large' to='/blog'>
              See More
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

HomePageTemplate.propTypes = {
  aboutContent: PropTypes.string,
  aboutContentComponent: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  summary: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.array,
  showreel: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  heroImages: PropTypes.array,
  testimonials: PropTypes.array,
  mobileHeroImages: PropTypes.array
}

export default HomePageTemplate
