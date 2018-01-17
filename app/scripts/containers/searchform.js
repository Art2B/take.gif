import { connect } from 'react-redux'

import { } from './../actions/results.js'
import SearchFormDisplay from './../components/searchform.jsx'

const mapStateToProps = (state) => ({
  results: state.results
})

const mapDispatchToProps = dispatch => {
  return {
    handleForm: (e, history) => {
      e.preventDefault()
      dispatch({type: 'ASYNC_SEARCH_GIFS', query: e.target.querySelector('input').value})
      history.push('/')
    }
  }
}

const SearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFormDisplay)

export default SearchForm
