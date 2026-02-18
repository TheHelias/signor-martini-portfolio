import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ContentErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      return <p>Content could not be rendered.</p>
    }
    return this.props.children
  }
}

ContentErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
}

export const HTMLContent = ({ content, className }) => (
  <ContentErrorBoundary>
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  </ContentErrorBoundary>
)

HTMLContent.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
}

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
}

export default Content
