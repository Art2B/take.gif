import { connect } from 'react-redux'

import FavoritesDisplay from './../components/favorites.jsx'

const mapStateToProps = (state) => ({
  favs: state.favorites
})

const mapDispatchToProps = {}

const FavoritesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesDisplay)

export default FavoritesList
