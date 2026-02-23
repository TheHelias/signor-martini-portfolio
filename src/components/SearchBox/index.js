import React, { useState, useMemo } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const SearchBox = () => {
  const data = useStaticQuery(graphql`
    query SearchIndexQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "article-page" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              tags
            }
            excerpt(pruneLength: 250)
          }
        }
      }
    }
  `)

  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isActive, setIsActive] = useState(false)

  const index = useMemo(() =>
    data.allMarkdownRemark.edges.map(({ node }) => ({
      id: node.id,
      title: node.frontmatter.title,
      tags: node.frontmatter.tags || [],
      slug: node.fields.slug,
    })),
    [data]
  )

  const search = (evt) => {
    const q = evt.target.value
    setQuery(q)
    if (!q) {
      setIsActive(false)
      setResults([])
      return
    }
    setIsActive(true)
    const q_lower = q.toLowerCase()
    const filtered = index.filter(item =>
      item.title.toLowerCase().includes(q_lower) ||
      item.tags.some(tag => tag.toLowerCase().includes(q_lower))
    )
    setResults(filtered.slice(0, 8))
  }

  return (
    <div className={`navbar-item ${isActive ? 'is-active' : ''}`}>
      <input
        className='input is-rounded is-primary'
        type='text'
        value={query}
        onChange={search}
        placeholder='Search'
      />
      <div className='navbar-dropdown'>
        {results.map(page => (
          <Link
            className='navbar-item'
            key={page.id}
            to={page.slug}
            onClick={() => { setQuery(''); setIsActive(false); setResults([]) }}
          >
            {page.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SearchBox
