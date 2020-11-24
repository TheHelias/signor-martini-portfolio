import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { FaChevronDown } from 'react-icons/fa'
import Slider from 'react-slick'

import AboutPageTemplate from '../AboutPageTemplate'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import LatestPosts from '../LatestPosts'

const HomePageTemplate = ({
  aboutContent,
  aboutContentComponent,
  title,
  subtitle,
  summary,
  heroImage,
  offerings,
  services,
  meta_title,
  meta_description,
  testimonials
}) => {
  const aboutLink = () => {
    navigate('/#about')
  }

  // const settings = {
  //   dots: true,
  //   fade: true,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // }

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-fullheight desktop--hero'>
        {/* <Slider {...settings} className='hero--slide'> */}
        <div className='hero--image'>
          <picture>
            <source media='(min-width: 500px)' srcset={heroImage} />
            <img
              alt='hero section image'
              src='/img/mobile1.png'
            />
          </picture>
        </div>
        <div className='hero--image'>
          <picture>
            <source media='(min-width: 500px)' srcset={heroImage} />
            <img
              alt='hero section image'
              src='/img/mobile1.png'
            />
          </picture>
        </div>
        <div className='hero--image'>
          <picture>
            <source media='(min-width: 500px)' srcset={heroImage} />
            <img
              alt='hero section image'
              src='/img/mobile1.png'
            />
          </picture>
        </div>
        {/* </Slider> */}
        <div className='overlay' />
        <div className='section hero__content'>
          <h1 className='title  is-size-1 has-text-weight-bold'>
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

      {/* <section
        className='hero mobile--hero'
        // style={{
        //   background: `rgba(0, 0, 0, 0) url(${heroImage}) no-repeat scroll center top`,
        //   backgroundSize: '100%'
        // }}
      >
        <div className='section'>
          <h1 className='title  is-size-2-mobile has-text-weight-bold'>
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
      </section> */}
      <AboutPageTemplate
        content={aboutContent}
        contentComponent={aboutContentComponent}
      />
      <section
        id='services'
        className='section section--gradient services--section'
      >
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h1 className='title is-size-2'> Services</h1>
                    <div className='columns is-multiline services--section'>
                      {services.map((service) => (
                        <div
                          key={service}
                          className='column is-4 services--section__item'
                        >
                          <section className='section'>
                            <p className='is-size-3 is-size-4-mobile has-text-centered'>
                              {service}
                            </p>
                          </section>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Link className='button is-primary is-large' to='/contact'>
                  Get A Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id='portfolio'
        className='section section--gradient portfolio--section'
      >
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h1 className='title is-size-2'>Portfolio</h1>
                    <Offerings gridItems={offerings.blurbs} />
                  </div>
                </div>
                <a
                  className='button is-primary is-large'
                  href='https://vimeo.com/user95280234'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='see more'
                >
                  See More
                </a>
                <div style={{ margin: '160px auto' }}>
                  <h1 className='title is-size-2'>Testimonials</h1>
                  <Testimonials testimonials={testimonials} />
                </div>
                <div>
                  <h1 className='title is-size-2'>Latest Posts</h1>
                  <LatestPosts count={2} />
                  <Link className='button is-primary is-large' to='/blog'>
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
  testimonials: PropTypes.array
}

export default HomePageTemplate
