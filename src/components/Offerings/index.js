import React from 'react'
import { FaPlay } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => {
  const toggleModal = () => {
    this.setState((prev, props) => {
      const newState = !prev.modalState
      return { modalState: newState }
    })
  }
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item) => (
        <div
          key={item.image}
          className='column is-6 portfolio--item'
        >
          <section className='section' onClick={toggleModal}>
            <div className='portfolio--item__image'>
              <p className='has-text-centered'>
                <img alt='' src={item.image} />
              </p>
              <div className='portfolio--item__image--overlay' />
              <FaPlay className='portfolio--item__image--play-icon' />
            </div>
            <p>{item.text}</p>
          </section>
        </div>
      ))}
    </div>
  )
}

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string
    })
  )
}

export default Offerings
