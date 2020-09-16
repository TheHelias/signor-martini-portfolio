import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { Overlay } from 'react-portal-overlay'

function Offerings ({ gridItems }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item) => (
        <div key={item.image} className='column is-6 portfolio--item'>
          <section className='section' onClick={() => setIsOpen(true)}>
            <div className='portfolio--item__image'>
              <p className='has-text-centered'>
                <img alt='' src={item.image} />
              </p>
              <div className='portfolio--item__image--overlay' />
              <FaPlay className='portfolio--item__image--play-icon' />
            </div>
            <p>{item.text}</p>
          </section>
          <Overlay
            open={isOpen}
            onClose={() => setIsOpen(false)}
            closeOnClick
            className='portfolio--item__video-modal'
          >
            <div
              className='portfolio--item__video-modal__content'
            >
              <h1>Modal</h1>
              <p>
                Nisi vitae commodo curae in amet nec tortor sodales varius
                iaculis nam duis cursus ullamcorper orci consequat maecenas a
                sagittis ultrices bibendum facilisis aliquet ad arcu laoreet
                natoque eget per mus aptent nisl posuere nibh dictum porta
                torquent molestie donec cras risus quis dui massa etiam turpis
                pharetra ultricies aliquam
              </p>
              <AiOutlineClose onClick={() => setIsOpen(false)} />
            </div>
          </Overlay>
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
