import React from 'react'
import PropTypes from 'prop-types'

import Gif from './../containers/gif.js'

const Favorites = ({favs}) => (
  <div id='results' className={favs.length === 0 ? 'single' : ''}>
    { favs.length > 0 && favs.map(url => (
      <Gif key={url} url={url} />
    ))}
    { favs.length === 0 &&
      <p>You don't have any favorites. Add some !</p>
    }
  </div>
)

Favorites.propTypes = {
  favs: PropTypes.array
}

export default Favorites
