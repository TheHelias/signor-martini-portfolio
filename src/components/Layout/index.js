import React, { Component } from 'react'

import '../../assets/sass/styles.sass'
import NavBar from '../NavBar'
import Footer from '../Footer'

class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.closeNavbar = this.closeNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  closeNavbar () {
    this.setState({ isActive: false })
  }

  render () {
    return (
      <div id='layout-wrapper'>
        <NavBar isActive={this.state.isActive} closeNavbar={this.closeNavbar} toggleNavbar={this.toggleNavbar} />
        <div id='content-wrapper'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
