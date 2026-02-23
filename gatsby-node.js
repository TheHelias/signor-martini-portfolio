const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const config = require('./config')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000, sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            fields {
              slug
            }
            frontmatter {
              title
              cover
              tags
              templateKey
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const postsAndPages = result.data.allMarkdownRemark.edges

    // Post pages:
    let posts = []
    // Iterate through each post/page, putting all found posts (where templateKey = article-page) into `posts`
    postsAndPages.forEach(edge => {
      if (_.isMatch(edge.node.frontmatter, { templateKey: 'article-page' })) {
        posts = posts.concat(edge)
      }
    })

    // Custom pagination replacing gatsby-paginate
    const postsPerPage = config.postsPerPage
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? '/blog' : `/blog/${i + 1}`,
        component: path.resolve('src/templates/blog.js'),
        context: {
          group: posts.slice(i * postsPerPage, (i + 1) * postsPerPage),
          index: i + 1,
          first: i === 0,
          last: i === numPages - 1,
          pageCount: numPages
        }
      })
    })

    postsAndPages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    postsAndPages.forEach(edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve('src/templates/tags.js'),
        context: {
          tag
        }
      })
    })

  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
