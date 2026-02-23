import React, { Component } from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'
import config from '../../../config'
import './styles.sass'

class Share extends Component {
  render () {
    const { title, slug, excerpt, mobile } = this.props
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
    const url = config.siteUrl + realPrefix + slug

    const iconSize = mobile ? 36 : 48

    return (
      <div className='social-links'>
        <RedditShareButton url={url} title={title}>
          <RedditIcon round size={iconSize} />
        </RedditShareButton>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <FacebookShareButton url={url} quote={excerpt}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title={title}
          description={excerpt}
        >
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </div>
    )
  }
}

export default Share
