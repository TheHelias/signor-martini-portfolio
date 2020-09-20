import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const AboutPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div id='about' className='about--section'>
      <section className='section section--gradient'>
        <div className='container about--section__content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section about--content'>
                <h1 className='title is-size-2'>About Me</h1>
                <PageContent className='content' content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

export default AboutPageTemplate
