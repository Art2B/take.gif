import { combineReducers } from 'redux'
import favorites from './favorites.js'
import results from './results.js'

const gifApp = combineReducers({
  favorites,
  results
})

export default gifApp
