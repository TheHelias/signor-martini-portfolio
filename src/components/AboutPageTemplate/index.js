import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import Reveal from '../Reveal'

const AboutPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section id='about' className='section about--section'>
      <div className='container'>
        <Reveal className='about--card'>
          <div className='section-head'>
            <span className='kicker'>About</span>
            <h2 className='title is-size-2'>About Me</h2>
          </div>
          <PageContent className='content' content={content} />
        </Reveal>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func
}

export default AboutPageTemplate
