import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { FaChevronDown } from 'react-icons/fa'

import AboutPageTemplate from '../AboutPageTemplate'
import Offerings from '../Offerings'
// import Testimonials from '../Testimonials'

const HomePageTemplate = ({
  aboutTitle,
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
                  <button class='button is-large is-primary hero--button'>
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
        title={aboutTitle}
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
                    <h3 className='has-text-weight-semibold is-size-2'>
                      Services Offered
                    </h3>
                    {/* <div>{services}</div> */}
                    <ul>
                      {services.map((service) => (
                        <li key={service} className='is-size-5'>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <h2 className='has-text-weight-semibold is-size-2'>
                    Testimonials
                    </h2>
                  <Testimonials testimonials={testimonials} /> */}
                </div>
                <Link
                  className='button is-primary is-outlined is-large is-fullwidth'
                  to='/contact'
                >
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
                    <h3 className='has-text-weight-semibold is-size-2'>
                      My Portfolio
                    </h3>
                    <Offerings gridItems={offerings.blurbs} />
                  </div>
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
  aboutTitle: PropTypes.string.isRequired,
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
