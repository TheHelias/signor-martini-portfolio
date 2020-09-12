import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={(data) => (
      <nav className='navbar is-transparent is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>Signor Martini</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
          id='navMenu'
        >
          <div className='navbar-end'>
            <SearchBox searchIndex={data.siteSearchIndex.index} />
            <Link className='navbar-item navbar--right--items' to='/pricing'>
              Pricing
            </Link>
            <Link className='navbar-item navbar--right--items' to='/blog'>
              Blog
            </Link>
            <Link className='navbar-item navbar--right--items' to='/contact'>
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
