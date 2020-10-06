import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link, StaticQuery } from 'gatsby'

function LatestPosts ({ data, count }) {
  let { edges: posts } = data.allMarkdownRemark
  if (count) {
    posts = posts.slice(0, count)
  }
  return (
    <div className='container'>
      {posts
        .filter((post) => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <div
            className='content post--card'
            key={post.id}
          >
            <h3>
              <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
              <span> &bull; </span>
              <small className='has-text-primary'>
                {post.frontmatter.date}
              </small>
            </h3>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className='button is-small' to={`blog/${post.frontmatter.slug}`}>
                                Keep Reading →
              </Link>
            </p>
          </div>
        ))}
    </div>
  )
}

LatestPosts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }),
  count: PropTypes.number
}

export default ({ count }) => (
  <StaticQuery
    query={graphql`
        query LatestPostsQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "article-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                frontmatter {
                  title
                  slug
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                }
              }
            }
          }
        }
      `}
    render={(data) => <LatestPosts data={data} count={count} />}
  />
)
