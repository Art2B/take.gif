import {actions} from './../actions/favorites.js'

const favorites = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_FAV:
      if (state.find(e => e === action.url)) {
        return state
      }
      return [...state, action.url]
    case actions.REMOVE_FAV:
      return state.filter(e => e !== action.url)
    default:
      return state
  }
}

export default favorites
