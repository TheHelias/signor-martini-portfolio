import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaPlay } from 'react-icons/fa'
import { Overlay } from 'react-portal-overlay'

function Offerings ({ gridItems }) {
  const [isOpen, setIsOpen] = useState(false)
  const [videoID, setVideoID] = useState('')
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item) => (
        <div key={item.image} className='column is-6 portfolio--item'>
          <section
            className='section'
            onClick={() => {
              setVideoID(item.video)
              setIsOpen(true)
            }}
          >
            <div className='portfolio--item__image'>
              <img alt='video thumbnail' src={item.image} />
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
            <div className='portfolio--item__video-modal__content'>
              {/* <iframe
                src={`https://www.youtube.com/embed/${videoID}?autoplay=1&mute=1&playlist=${videoID}&loop=1`}
              /> */}
              <iframe
                src={`https://player.vimeo.com/video/${videoID}`}
                frameBorder='0'
                allow='autoplay; fullscreen'
                allowFullScreen
              />
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
      text: PropTypes.string,
      video: PropTypes.number
    })
  )
}

export default Offerings
