import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { FaPlay } from 'react-icons/fa'

const Overlay = ({ open, onClose, closeOnClick, className, children }) => {
  if (!open || typeof document === 'undefined') return null
  return ReactDOM.createPortal(
    <div
      className={className}
      onClick={closeOnClick ? onClose : undefined}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  )
}

function Offerings ({ gridItems }) {
  const [isOpen, setIsOpen] = useState(false)
  const [videoID, setVideoID] = useState('')
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item) => (
        <div key={item.image} className='column is-6 portfolio--item'>
          <section
            className='section'
            role='button'
            tabIndex={0}
            onClick={() => {
              setVideoID(item.video)
              setIsOpen(true)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setVideoID(item.video)
                setIsOpen(true)
              }
            }}
          >
            <div className='portfolio--item__image'>
              <img alt='video thumbnail' src={item.image} />
              <div className='portfolio--item__image--overlay' />
              <FaPlay className='portfolio--item__image--play-icon' />
            </div>
            <p>{item.text}</p>
          </section>
        </div>
      ))}
      <Overlay
        open={isOpen}
        onClose={() => setIsOpen(false)}
        closeOnClick
        className='portfolio--item__video-modal'
      >
        <div className='portfolio--item__video-modal__content'>
          <div className='video-embed-wrapper'>
            <iframe
              title='Vimeo video player'
              src={`https://player.vimeo.com/video/${videoID}`}
              frameBorder='0'
              allow='autoplay; fullscreen'
              allowFullScreen
            />
          </div>
        </div>
      </Overlay>
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
