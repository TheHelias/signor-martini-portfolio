import React from 'react'
import Helmet from 'react-helmet'

import config from '../../../config'
import favicon from '../../assets/img/favicon.ico'

const SEO = ({
  title,
  lang,
  meta,
  meta_title,
  meta_desc,
  og_type,
  cover,
  slug,
  date,
  websiteSchemaOrgJSONLD
}) => {
  const URL = slug ? `${config.siteUrl}/${slug}` : config.siteUrl
  const canonical = slug ? `${config.siteUrl}/${slug}` : null

  // const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  // console.log(realPrefix) Not needed
  const image = cover
    ? config.siteUrl + cover
    : config.siteUrl + '/icons/icon-512x512.png'

  const breadcrumbSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': config.siteUrl,
          name: 'Home',
          image: config.siteUrl + '/icons/icon-512x512.png'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': URL,
          name: title,
          image
        }
      }
    ]
  }

  const blogPostingSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    url: URL,
    name: title,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    headline: title,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': URL
    },
    author: {
      '@type': 'Person',
      name: config.userName
    },
    image: {
      '@type': 'ImageObject',
      url: image
    },
    datePublished: date,
    dateModified: date,
    publisher: {
      '@type': 'Organization',
      name: config.siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: config.siteUrl + '/icons/icon-512x512.png'
      }
    },
    description: meta_desc
  }
  const metaDescription = meta_desc || config.siteDescription
  const metaTitle = meta_title || title || config.siteTitle

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={metaTitle}
      titleTemplate={`%s | ${config.siteTitle}`}
      link={
        canonical
          ? [
            {
              rel: 'canonical',
              href: canonical
            }
          ]
          : []
      }
      defer={false}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          name: 'keywords',
          content: config.keywords.join(', ')
        },
        {
          name: 'image',
          content: image
        },
        {
          property: 'og:title',
          content: metaTitle
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: og_type || 'website'
        },
        {
          property: 'og:image',
          content: image
        },
        {
          property: 'og:image:width',
          content: '1200px'
        },
        {
          property: 'og:image:height',
          content: '630px'
        },
        {
          property: 'og:url',
          content: URL
        },
        {
          property: 'fb:app_id',
          content: config.siteFBAppID ? config.siteFBAppID : ''
        },
        {
          name: 'twitter:image',
          content: image
        },
        {
          name: 'twitter:creator',
          content: config.userTwitter
        },
        {
          name: 'twitter:title',
          content: metaTitle
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ].concat(meta)}
    >
      <link rel='shortcut icon' href={favicon} />
      <script type='application/ld+json'>
        {JSON.stringify(breadcrumbSchemaOrgJSONLD)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(blogPostingSchemaOrgJSONLD)}
      </script>
      {websiteSchemaOrgJSONLD ? (
        <script type='application/ld+json'>
          {JSON.stringify(websiteSchemaOrgJSONLD)}
        </script>
      ) : null}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: []
}

export default SEO
