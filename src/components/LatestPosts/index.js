import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, useStaticQuery } from 'gatsby'

function LatestPosts ({ count }) {
  const data = useStaticQuery(graphql`
    query LatestPostsQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { templateKey: { eq: "article-page" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            fields { slug }
            frontmatter {
              cover
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  let { edges: posts } = data.allMarkdownRemark
  if (count) {
    posts = posts.slice(0, count)
  }
  return (
    <div className='container posts'>
      {posts
        .filter((post) => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <Link to={post.fields.slug} key={post.id}>
            <div className='content post--card'>
              <div className='post--card__header'>
                <div>
                  <img src={post.frontmatter.cover} alt='featured image' />
                </div>
                <h3>
                  {post.frontmatter.title}
                  <span> &bull; </span>
                  <small className='has-text-primary'>
                    {post.frontmatter.date}
                  </small>
                </h3>
              </div>
              <p>{post.excerpt}</p>
            </div>
          </Link>
        ))}
    </div>
  )
}

LatestPosts.propTypes = {
  count: PropTypes.number
}

export default LatestPosts
