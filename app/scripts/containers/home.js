import { connect } from 'react-redux'

import { clearResults } from './../actions/results'
import HomeDisplay from './../components/home.jsx'

const mapStateToProps = (state) => ({
  gifs: state.results
})

const mapDispatchToProps = dispatch => {
  return {
    clearResults: () => {
      dispatch(clearResults())
      document.querySelector('#search').value = ''
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDisplay)

export default Home
