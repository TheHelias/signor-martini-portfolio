import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import { FaChevronDown } from 'react-icons/fa'

import AboutPageTemplate from '../AboutPageTemplate'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import LatestPosts from '../LatestPosts'
import Reveal from '../Reveal'

const HomePageTemplate = ({
  aboutContent,
  aboutContentComponent,
  title,
  subtitle,
  summary,
  offerings,
  services,
  heroImages,
  mobileHeroImages,
  testimonials
}) => {
  const aboutLink = () => {
    navigate('/#about')
  }

  const [image, setImage] = useState(0)
  const [mobileImage, setMobileImage] = useState(0)

  const images = heroImages

  const mobileImages = mobileHeroImages

  const useInterval = (callback, delay) => {
    const savedCallback = useRef()

    useEffect(() => {
      savedCallback.current = callback
    })

    useEffect(() => {
      function tick () {
        savedCallback.current()
      }

      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }, [delay])
  }

  useInterval(() => {
    if (image >= images.length - 1) {
      setImage(0)
    } else {
      setImage(image + 1)
    }

    if (mobileImage >= mobileImages.length - 1) {
      setMobileImage(0)
    } else {
      setMobileImage(mobileImage + 1)
    }
  }, 5000)

  return (
    <div>
      <section className='hero is-fullheight desktop--hero'>
        <div className='hero--image'>
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
        <div className='overlay' />
        <div className='hero__content'>
          <span className='kicker'>Film Editor · Post-Production</span>
          <h1 className='title is-size-1 has-text-weight-bold'>
            {title}
          </h1>
          <p className='subtitle'>{subtitle}</p>
          <p className='hero--summary'>{summary}</p>
          <button
            onClick={aboutLink}
            className='button is-large is-primary hero--button'
          >
            <span>Know More</span>
            <FaChevronDown className='hero--button__icon' />
          </button>
        </div>
        <button
          className='hero--scroll'
          onClick={aboutLink}
          aria-label='Scroll to about section'
        >
          <FaChevronDown />
        </button>
      </section>
      <section className='hero is-fullheight mobile--hero'>
        <div className='hero--image'>
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
        <div className='overlay' />
        <div className='hero__content'>
          <span className='kicker'>Film Editor · Post-Production</span>
          <h1 className='title is-size-2 has-text-weight-bold'>
            {title}
          </h1>
          <p className='subtitle'>{subtitle}</p>
          <p className='hero--summary'>{summary}</p>
          <button
            onClick={aboutLink}
            className='button is-large is-primary hero--button'
          >
            <span>Know More</span>
            <FaChevronDown className='hero--button__icon' />
          </button>
        </div>
      </section>
      <AboutPageTemplate
        content={aboutContent}
        contentComponent={aboutContentComponent}
      />
      <section id='portfolio' className='section'>
        <div className='container'>
          <Reveal className='section-head'>
            <span className='kicker'>Selected Work</span>
            <h2 className='title is-size-2'>Portfolio</h2>
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
              See More
            </a>
          </Reveal>
        </div>
      </section>
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
                    <p className='is-size-3 is-size-4-mobile'>
                      {service.text}
                    </p>
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
  offerings: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  heroImages: PropTypes.array,
  testimonials: PropTypes.array,
  mobileHeroImages: PropTypes.array
}

export default HomePageTemplate
