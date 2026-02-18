import React, { useState } from 'react'
import PropTypes from 'prop-types'

import '../../assets/sass/styles.sass'
import NavBar from '../NavBar'
import Footer from '../Footer'

const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState(false)

  const toggleNavbar = () => setIsActive(prev => !prev)
  const closeNavbar = () => setIsActive(false)

  return (
    <div id='layout-wrapper'>
      <NavBar isActive={isActive} closeNavbar={closeNavbar} toggleNavbar={toggleNavbar} />
      <div id='content-wrapper'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
