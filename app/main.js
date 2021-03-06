import route from 'riot-route'
import { TweenMax, Power2 } from 'gsap'

import config from './config.json'
import Worker from './workers/gr.worker.js'
import Gif from './components/gif.js'

// Import style. Note: I hate that way of loading SCSS files
import style from './styles/index.scss'

const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search')
const resultsHolder = document.getElementById('results')

const reloadBtnEvents = () => {
  document.querySelectorAll('.gif-holder').forEach(gif => { gif.querySelector('.icon-holder').addEventListener('click', e => updateFromFav(gif)) })
}

const favStarAnim = (target, cb) => {
  TweenMax.to(target, 0.1, { scale: 1.2, transformOrigin: 'center', yoyo: true, repeat: 1, ease: Power2.easeInOut, onComplete: cb })
}

const updateFromFav = target => {
  let favs = []
  let targetUrl = target.querySelector('img').src

  try {
    let lsFavs = JSON.parse(localStorage.getItem('favs'))
    if (lsFavs) favs = lsFavs
  } catch (error) {}

  if (favs.find(e => e === targetUrl)) {
    favStarAnim(target.querySelector('.fa-star'), () => {
      target.querySelector('.fa-star').dataset.prefix = 'far'
    })
    favs = favs.filter(fav => fav !== targetUrl)
  } else {
    favStarAnim(target.querySelector('.fa-star'), () => {
      target.querySelector('.fa-star').dataset.prefix = 'fas'
    })
    favs.push(targetUrl)
  }

  localStorage.setItem('favs', JSON.stringify(favs))
}

const formatGiphyData = gifArray => {
  let imgString = ''
  for (let gif of gifArray) {
    imgString = imgString.concat(new Gif(gif.images.preview_gif.url).render())
  }
  return imgString
}

const resetHtml = (title = config.wording.title) => {
  document.title = title
  resultsHolder.classList.remove('single')
  resultsHolder.innerHTML = ''
}

if (self.Worker) {
  const grWorker = new Worker()

  route('/', resetHtml)
  route('/?q=*', query => {
    resetHtml()
    grWorker.postMessage({ q: query })
  })
  route('/fav', () => {
    resetHtml('Fav - ' + config.wording.title)

    try {
      let favs = JSON.parse(localStorage.getItem('favs'))
      if (favs.length <= 0) throw 'favsEmpty'
      let imgString = ''
      favs.forEach(gifUrl => {
        imgString = imgString.concat(new Gif(gifUrl).render())
      })
      resultsHolder.innerHTML = imgString
      reloadBtnEvents()
    } catch (error) {
      resultsHolder.innerHTML = `<p>${config.wording.nofav}</p>`
      resultsHolder.classList.add('single')
    }
  })
  route.start(true)

  searchForm.addEventListener('submit', {
    handleEvent: event => {
      event.preventDefault()
      route('?q=' + searchInput.value)
      grWorker.postMessage({ q: searchInput.value })
    }
  })

  grWorker.onmessage = e => {
    resultsHolder.innerHTML = formatGiphyData(e.data)
    reloadBtnEvents()
  }
}
