import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Index } from 'elasticlunr'

const SearchBox = ({ searchIndex }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isActive, setIsActive] = useState(false)
  const indexRef = useRef(null)

  const getOrCreateIndex = () => {
    if (!indexRef.current) {
      indexRef.current = Index.load(searchIndex)
    }
    return indexRef.current
  }

  const search = (evt) => {
    const q = evt.target.value
    const idx = getOrCreateIndex()
    setQuery(q)
    setIsActive(!!q)
    setResults(
      idx
        .search(q, { expand: true })
        .map(({ ref }) => idx.documentStore.getDoc(ref))
    )
  }

  return (
    <div className={`navbar-item ${isActive ? 'is-active' : ''}`}>
      <input
        className='input  is-rounded is-primary'
        type='text'
        value={query}
        onChange={search}
        placeholder='Search'
      />
      <div className='navbar-dropdown'>
        {results.map(page => (
          <Link className='navbar-item' key={page.id} to={page.slug}>{page.title}</Link>
        ))}
      </div>
    </div>
  )
}

SearchBox.propTypes = {
  searchIndex: PropTypes.object.isRequired
}

export default SearchBox
