import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ posts }) => {
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

export default PostCard
