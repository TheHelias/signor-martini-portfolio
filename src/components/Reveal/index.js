import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Fades/slides children in as they scroll into view. Falls back to visible
// when IntersectionObserver is unavailable (SSR / old browsers).
const Reveal = ({ children, as: Tag = 'div', className = '', delay = 0, ...rest }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}

Reveal.propTypes = {
  children: PropTypes.node,
  as: PropTypes.elementType,
  className: PropTypes.string,
  delay: PropTypes.number
}

export default Reveal
