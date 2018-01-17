import {actions} from './../actions/results.js'

const results = (state = [], action) => {
  switch (action.type) {
    case actions.SET_RESULTS:
      return action.results
    case actions.FLUSH_RESULTS:
      return []
    default:
      return state
  }
}

export default results
