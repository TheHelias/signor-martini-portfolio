import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'

const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title is-size-2'>{title}</h1>
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
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

export default AboutPageTemplate
