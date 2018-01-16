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

// Favorites link
// const favLink = document.getElementById('fav-btn')
// favLink.addEventListener('click', {
//   handleEvent: event => {
//     let favs = JSON.parse(localStorage.getItem('favs'))
//     let fhtml = ''
//     favs.forEach(fav => fhtml = fhtml.concat(new Gif(fav).render()))
//     resultsHolder.innerHTML = fhtml
//     reloadBtnEvents()
//   }
// })

const updateFromFav = target => {
  let favs = []
  let targetUrl = target.querySelector('img').src

  try {
    let lsFavs = JSON.parse(localStorage.getItem('favs'))
    if (lsFavs) favs = lsFavs
  } catch (error) {}

  if (favs.find(e => e === targetUrl)) {
    target.querySelector('.fa-star').dataset.prefix = 'fas'
    favs = favs.filter(fav => fav !== targetUrl)
  } else {
    target.querySelector('.fa-star').dataset.prefix = 'far'
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

if (self.Worker) {
  const grWorker = new Worker()

  searchForm.addEventListener('submit', {
    handleEvent: event => {
      event.preventDefault()
      grWorker.postMessage({ q: searchInput.value })
    }
  })

  grWorker.onmessage = e => {
    resultsHolder.innerHTML = formatGiphyData(e.data)
    reloadBtnEvents()
  }
}
