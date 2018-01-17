import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const SearchForm = withRouter(({handleForm, history}) => (
  <form autoComplete='off' onSubmit={e => {
    handleForm(e, history)
  }} id='search-form'>
    <input type='text' id='search' placeholder='Search for gifs' />
  </form>
))

SearchForm.propTypes = {
  handleForm: PropTypes.func
}

export default SearchForm
