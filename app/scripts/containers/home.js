import { connect } from 'react-redux'

import HomeDisplay from './../components/home.jsx'

const mapStateToProps = (state) => ({
  gifs: state.results
})

const mapDispatchToProps = dispatch => {
  return {
    addFav: (url) => {
      dispatch({type: 'ASYNC_FAV', url: url})
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDisplay)

export default Home
