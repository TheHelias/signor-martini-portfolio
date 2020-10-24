import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import config from '../../config'
import PostCard from '../components/PostCard'
import Layout from '../components/Layout'

const PaginationLink = props => {
  if (!props.test) {
    return (
      <Link to={`/blog/${props.url}`} className='button is-rounded'>
        {props.text}
      </Link>
    )
  } else {
    return (
      <span disabled className='button is-rounded'>
        {props.text}
      </span>
    )
  }
}

export default class BlogPage extends Component {
  render () {
    const { pageContext } = this.props
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
        <Helmet>
          <title>Blog | Martini Akande</title>
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>
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
              <PaginationLink test={first} url={previousUrl} text='Previous Page' />
              <PaginationLink test={last} url={nextUrl} text='Next Page' />
            </div>
          </section>
        </section>
      </Layout>
    )
  }
}