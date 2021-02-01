import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { HTMLContent } from '../components/Content'
import HomePageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { html } = data.markdownRemark

  return (
    <Layout>
      <SEO
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        slug=''
      />
      <HomePageTemplate
        aboutContent={html}
        aboutContentComponent={HTMLContent}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        summary={frontmatter.summary}
        heroImages={frontmatter.heroImages}
        mobileHeroImages={frontmatter.mobileHeroImages}
        services={frontmatter.services}
        offerings={frontmatter.offerings}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        summary
        heroImages {
          image
        }
        mobileHeroImages {
          image
        }
        meta_title
        meta_description
        services {
          image
          text
        }
        offerings {
          blurbs {
            image
            text
            video
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
