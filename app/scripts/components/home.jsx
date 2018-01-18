import React from 'react'

import Gif from './../containers/gif.js'

export default class Home extends React.Component {
  componentWillUnmount () {
    console.log('Remove everything')
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
