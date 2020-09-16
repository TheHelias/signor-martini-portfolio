import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { FaChevronDown } from 'react-icons/fa'

import AboutPageTemplate from '../AboutPageTemplate'
import Offerings from '../Offerings'
// import Testimonials from '../Testimonials'

const HomePageTemplate = ({
  aboutContent,
  aboutContentComponent,
  title,
  subtitle,
  summary,
  heading,
  description,
  offerings,
  services,
  meta_title,
  meta_description,
  testimonials
}) => {
  const aboutLink = () => {
    navigate('#about')
  }

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-fullheight is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-6'>
                <div className='section'>
                  <h1 className='title  is-size-1 has-text-weight-bold'>
                    {title}
                  </h1>
                  <p className='subtitle'>{subtitle}</p>
                  <p className='hero--summary'>{summary}</p>
                  <button
                    onClick={aboutLink}
                    class='button is-large is-primary hero--button'
                  >
                    <span>Know More</span>
                    <FaChevronDown className='hero--button__icon' />
                  </button>
                </div>
              </div>
              <div className='column is-6 hero--image'>
                <img className='hero--image' src='/img/hero-image.jpg' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutPageTemplate
        content={aboutContent}
        contentComponent={aboutContentComponent}
      />
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h1 className='title is-size-2'> What do I do?</h1>
                    <div
                      className='columns is-multiline services--section'
                    >
                      {services.map((service) => (
                        <div
                          key={service.plan}
                          className='column is-4 services--section__item'
                        >
                          <section className='section'>
                            <p className='is-size-3 has-text-weight-bold has-text-centered'>
                              {service}
                            </p>
                          </section>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* <h2 className='has-text-weight-semibold is-size-2'>
                    Testimonials
                    </h2>
                  <Testimonials testimonials={testimonials} /> */}
                </div>
                <Link className='button is-primary is-large' to='/contact'>
                  Get A Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h1 className='title is-size-2'>My Portfolio</h1>
                    <Offerings gridItems={offerings.blurbs} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <div>
                    <h1 className='title is-size-2'>Latest Posts</h1>
                    <Link className='button is-primary is-large' to='/blog'>
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
  services: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  testimonials: PropTypes.array
}

export default HomePageTemplate
