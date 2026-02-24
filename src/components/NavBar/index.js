import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import SearchBox from '../SearchBox'

const NavBar = ({ closeNavbar, toggleNavbar, isActive }) => {
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
          <img alt='logo' src='/img/logo.png' />
        </Link>
        <button
          className={`button is-primary navbar-burger ${
            isActive ? 'is-active' : ''
          }`}
          data-target='navMenu'
          aria-label='menu button'
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
          <SearchBox />
          <button
            className='navbar-item navbar--right--items'
            onClick={() => {
              aboutLink()
              closeNavbar()
            }}
          >
            About
          </button>
          <button
            className='navbar-item navbar--right--items'
            onClick={() => {
              portfolioLink()
              closeNavbar()
            }}
          >
            Portfolio
          </button>
          <button
            className='navbar-item navbar--right--items'
            onClick={() => {
              servicesLink()
              closeNavbar()
            }}
          >
            Services
          </button>
          <Link
            activeClassName='navbar-item--active'
            className='navbar-item navbar--right--items'
            to='/blog'
            onClick={closeNavbar}
          >
            Blog
          </Link>
          <Link
            activeClassName='navbar-item--active'
            className='navbar-item navbar--right--items'
            to='/contact'
            onClick={closeNavbar}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  closeNavbar: PropTypes.func.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default NavBar
