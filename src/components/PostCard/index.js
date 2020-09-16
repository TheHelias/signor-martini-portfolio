import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ posts }) => {
  return (
    <div className='container'>
      {posts
        .filter((post) => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <div
            className='content post--card'
            style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
            key={post.id}
          >
            <h3>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              <span> &bull; </span>
              <small className='has-text-primary'>
                {post.frontmatter.date}
              </small>
            </h3>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className='button is-small' to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </div>
        ))}
    </div>
  )
}

export default PostCard
