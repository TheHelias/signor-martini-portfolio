import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import config from '../../config'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const PaginationLink = ({ test, url, text }) => {
  if (!test) {
    return (
      <Link to={`/blog/${url}`} className='button is-rounded'>
        {text}
      </Link>
    )
  }
  return (
    <span disabled className='button is-rounded'>
      {text}
    </span>
  )
}

PaginationLink.propTypes = {
  test: PropTypes.bool,
  url: PropTypes.string,
  text: PropTypes.string
}

const BlogPage = ({ pageContext }) => {
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString() + '/'
  const websiteSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: config.siteUrl,
    name: config.siteTitle,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : ''
  }

  return (
    <Layout>
      <SEO
        title='Blog | Martini Akande'
        websiteSchemaOrgJSONLD={websiteSchemaOrgJSONLD}
        slug='/blog'
      />
      <section className='hero is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title is-size-1 is-size-2-mobile has-text-weight-bold'>
                    Blog
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <PostCard posts={group} />
        <section className='section'>
          <div className='buttons is-centered'>
            <PaginationLink
              test={first}
              url={previousUrl}
              text='Previous Page'
            />
            <PaginationLink test={last} url={nextUrl} text='Next Page' />
          </div>
        </section>
      </section>
    </Layout>
  )
}

BlogPage.propTypes = {
  pageContext: PropTypes.shape({
    group: PropTypes.array,
    index: PropTypes.number,
    first: PropTypes.bool,
    last: PropTypes.bool
  })
}

export default BlogPage
