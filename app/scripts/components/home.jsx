import React from 'react'
import PropTypes from 'prop-types'

import Gif from './../containers/gif.js'

const Home = ({ gifs, addFav }) => (
  <div id='results'>
    { gifs.map(gif => (
      <Gif key={gif.id} url={gif.images.downsized.url} />
    ))}
  </div>
)

Home.propTypes = {
  gifs: PropTypes.array,
  addFav: PropTypes.func
}

export default Home
