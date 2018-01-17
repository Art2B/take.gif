import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './header.jsx'
import SearchForm from './../containers/searchform.js'
import FavoritesList from './../containers/favorites.js'
import Home from './../containers/home.js'

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <main id='main'>
            <SearchForm />
            <Route exact path='/' component={Home} />
            <Route path='/fav' component={FavoritesList} />
          </main>
        </div>
      </Router>
    )
  }
}
