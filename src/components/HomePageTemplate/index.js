import React from 'react'
import Helmet from 'react-helmet'
import Content from '../Content'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import AboutPageTemplate from '../AboutPageTemplate'

const HomePageTemplate = ({
  aboutTitle,
  aboutContent,
  aboutContentComponent,
  title,
  heading,
  description,
  offerings,
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
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title  is-size-1 has-text-weight-bold'>
                    Akande Kunle {title}
                  </h1>
                </div>
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
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                  <Offerings gridItems={offerings.blurbs} />
                  <h2 className='has-text-weight-semibold is-size-2'>
                    Testimonials
                  </h2>
                  <Testimonials testimonials={testimonials} />
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
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array
  }),
  testimonials: PropTypes.array
}

export default HomePageTemplate
