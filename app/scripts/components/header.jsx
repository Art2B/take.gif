import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <Link to='/' title='Shut up and go home' className='home-link'>
          <h1>TAKE.GIF</h1>
        </Link>
        <Link to='/fav' title='Check your favs !' className='fav-link'><i className='fas fa-star' /></Link>
      </header>
    )
  }
}
