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

  const openVideo = (video) => {
    setVideoID(video)
    setIsOpen(true)
  }

  return (
    <div className='work-grid'>
      {gridItems.map((item) => (
        <div
          key={item.image}
          className='work-tile'
          role='button'
          tabIndex={0}
          onClick={() => openVideo(item.video)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') openVideo(item.video)
          }}
        >
          <img className='work-tile__img' alt={item.text} src={item.image} />
          <div className='work-tile__shade' />
          <span className='work-tile__play'>
            <FaPlay />
          </span>
          <div className='work-tile__meta'>
            <h3 className='work-tile__title'>{item.text}</h3>
            <span className='work-tile__watch'>Watch <FaPlay /></span>
          </div>
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
              src={`https://player.vimeo.com/video/${videoID}?app_id=58479&autoplay=1`}
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media'
              allowFullScreen
              referrerPolicy='strict-origin-when-cross-origin'
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
