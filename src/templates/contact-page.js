import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <Layout>
      <SEO
        meta_title={frontmatter.meta_title}
        meta_desc={frontmatter.meta_description}
        slug='/contact-page'
      />
      <ContactPageTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        services={frontmatter.contactServices}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        contactServices
      }
    }
  }
`
