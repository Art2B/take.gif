import React from 'react'
import PropTypes from 'prop-types'

const Gif = ({ url, isFav, toggleFav }) => {
  return (
    <div className='gif-holder'>
      <div className='icon-holder'>
        <div onClick={e => toggleFav(e.target, isFav, url)}>
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
