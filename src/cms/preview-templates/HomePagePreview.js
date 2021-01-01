import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../components/HomePageTemplate'

const HomePagePreview = ({ entry, widgetFor }) => {
  const entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryServices = entry.getIn(['data', 'services'])
  const services = entryServices ? entryServices.toJS() : []

  const entryHeroImages = entry.getIn(['data', 'heroImages'])
  const heroImages = entryHeroImages ? entryHeroImages.toJS() : []

  const entryMobileHeroImages = entry.getIn(['data', 'mobileHeroImages'])
  const mobileHeroImages = entryMobileHeroImages ? entryMobileHeroImages.toJS() : []

  return (
    <HomePageTemplate
      aboutContent={widgetFor('body')}
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      summary={entry.getIn(['data', 'summary'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      services={services}
      offerings={{ blurbs }}
      testimonials={testimonials}
      heroImages={heroImages}
      mobileHeroImages={mobileHeroImages}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default HomePagePreview
