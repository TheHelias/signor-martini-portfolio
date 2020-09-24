import React from 'react'
import { FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, FaVimeoV } from 'react-icons/fa'

import config from '../../../config'

const socialMedia = [
  {
    name: 'instagram',
    link: 'https://www.instagram.com/signor_martini',
    icon: <FaInstagram />
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/signor_martini',
    icon: <FaTwitter />
  },
  {
    name: 'whatsapp',
    link: 'https://wa.link/ocavzf',
    icon: <FaWhatsapp />
  },
  {
    name: 'vimeo',
    link: 'https://vimeo.com/user95280234',
    icon: <FaVimeoV />
  },
  {
    name: 'youtube',
    link: 'https://www.youtube.com/channel/UCAbq7qbYzK8WoBgrpPHh8CQ',
    icon: <FaYoutube />
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/martini-olakunle-akande-b64b41154/',
    icon: <FaLinkedinIn />
  }
]

const Footer = () => {
  return (
    <footer className='footer has-background-primary'>
      <div className='container'>
        <div className='content has-text-centered'>
          <div className='social-links'>
            {socialMedia.map((medium) => {
              const { name, link, icon } = medium
              return (
                <a
                  key={name}
                  href={link}
                  className='is-size-4-mobile is-size-3'
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label={name}
                >
                  {icon}
                </a>
              )
            })}
          </div>
          <p>{config.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
