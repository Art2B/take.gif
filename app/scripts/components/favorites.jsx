import React from 'react'
import PropTypes from 'prop-types'

import Gif from './../containers/gif.js'

let localFavs

class Favorites extends React.Component {
  componentWillMount () {
    localFavs = this.props.favs
  }

  render () {
    return (
      <div id='results' className={localFavs.length === 0 ? 'single' : ''}>
        { localFavs.length > 0 && localFavs.map(url => (
          <Gif key={url} url={url} />
        ))}
        { localFavs.length === 0 &&
          <p>You don't have any favorites. Add some !</p>
        }
      </div>
    )
  }
}

Favorites.propTypes = {
  favs: PropTypes.array
}

export default Favorites
