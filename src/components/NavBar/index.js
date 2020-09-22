import React from 'react'
import { navigate } from '@reach/router'
import { Link, graphql, StaticQuery } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = ({ toggleNavbar, isActive }) => {
  const aboutLink = () => {
    navigate('/#about')
  }

  const servicesLink = () => {
    navigate('/#services')
  }

  const portfolioLink = () => {
    navigate('/#portfolio')
  }

  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={(data) => (
        <nav
          className='navbar is-transparent is-fixed-top'
          aria-label='main navigation'
        >
          <div className='navbar-brand'>
            <Link
              to='/'
              activeClassName='navbar-item--active'
              className='navbar-item'
            >
              <strong>Martini Akande</strong>
            </Link>
            <button
              className={`button is-primary navbar-burger ${
                isActive ? 'is-active' : ''
              }`}
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
              <a
                className='navbar-item navbar--right--items'
                onClick={aboutLink}
              >
                About
              </a>
              <a
                className='navbar-item navbar--right--items'
                onClick={servicesLink}
              >
                Services
              </a>
              <a
                className='navbar-item navbar--right--items'
                onClick={portfolioLink}
              >
                Portfolio
              </a>
              <Link
                activeClassName='navbar-item--active'
                className='navbar-item navbar--right--items'
                to='/blog'
              >
                Blog
              </Link>
              <Link
                activeClassName='navbar-item--active'
                className='navbar-item navbar--right--items'
                to='/contact'
              >
                Contact Me
              </Link>
            </div>
          </div>
        </nav>
      )}
    />
  )
}

export default NavBar
