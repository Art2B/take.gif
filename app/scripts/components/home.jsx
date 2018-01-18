import React from 'react'
import PropTypes from 'prop-types'

import Gif from './../containers/gif.js'

class Home extends React.Component {
  componentWillUnmount () {
    this.props.clearResults()
  }

  render () {
    return (
      <div id='results'>
        { this.props.gifs.map(gif => (
          <Gif key={gif.id} url={gif.images.downsized.url} />
        ))}
      </div>
    )
  }
}

Home.propTypes = {
  gifs: PropTypes.array
}

export default Home
