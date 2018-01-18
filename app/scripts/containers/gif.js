import { connect } from 'react-redux'
import { TweenMax, Power2 } from 'gsap'

import { addFav, removeFav } from './../actions/favorites.js'
import GifDisplay from './../components/gif.jsx'

const mapStateToProps = (state, props) => ({
  url: props.url,
  isFav: !!state.favorites.find(el => el === props.url)
})

const mapDispatchToProps = dispatch => {
  return {
    toggleFav: (t, isFav, url) => {
      const findAncestor = (el, cls) => {
        while ((el = el.parentElement) && !el.classList.contains(cls));
        return el
      }

      let target

      if (!t.classList.contains('fa-star')) {
        target = findAncestor(t, 'fa-star')
      } else {
        target = t
      }

      const cb = isFav ? () => { target.dataset.prefix = 'far' } : () => { target.dataset.prefix = 'fas' }
      const action = isFav ? removeFav(url) : addFav(url)
      TweenMax.to(target, 0.1, { scale: 1.2, transformOrigin: 'center', yoyo: true, repeat: 1, ease: Power2.easeInOut, onComplete: cb })
      dispatch(action)
    }
  }
}

const Gif = connect(
  mapStateToProps,
  mapDispatchToProps
)(GifDisplay)

export default Gif
