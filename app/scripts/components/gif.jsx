import React from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Gif = ({ url, isFav, toggleFav, animCopy }) => {
  return (
    <div className='gif-holder'>
      <div className='icon-holder'>
        <CopyToClipboard text={url}>
          <div className='copy-icon' onClick={animCopy}>
            <i className='fas fa-link' />
          </div>
        </CopyToClipboard>
        <div className='fav-icon' onClick={e => toggleFav(e.target, isFav, url)}>
          <i className={isFav ? 'fas fa-star' : 'far fa-star'} />
        </div>
      </div>
      <img src={url} />
    </div>
  )
}

Gif.propTypes = {
  url: PropTypes.string,
  isFav: PropTypes.bool,
  toggleFav: PropTypes.func
}

export default Gif
