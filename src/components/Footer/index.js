import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, FaVimeoV } from 'react-icons/fa'

import config from '../../../config'

const socialMedia = [
  {
    name: 'facebook',
    link: 'https://github.com/cobidev/gatsby-simplefolio',
    icon: <FaFacebookF />
  },
  {
    name: 'instagram',
    link: 'https://github.com/cobidev/gatsby-simplefolio',
    icon: <FaInstagram />
  },
  {
    name: 'twitter',
    link: 'https://github.com/cobidev/gatsby-simplefolio',
    icon: <FaTwitter />
  },
  {
    name: 'whatsapp',
    link: 'https://github.com/cobidev/gatsby-simplefolio',
    icon: <FaWhatsapp />
  },
  {
    name: 'youtube',
    link: 'https://github.com/cobidev/gatsby-simplefolio',
    icon: <FaYoutube />
  },
  {
    name: 'vimeo',
    link: 'https://github.com/cobidev/gatsby-simplefolio',
    icon: <FaVimeoV />
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
