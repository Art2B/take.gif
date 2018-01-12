import Worker from './workers/gr.worker.js'

const searchInput = document.getElementById('search')
const resultsHolder = document.getElementById('results')
let favButtons = document.querySelector('.gif-holder button')

const addToFav = e => {
  let slug = e.target.dataset.gif
  let favs
  
  try {
    favs = JSON.parse(localStorage.getItem('favs'))
  } catch(error) {
    favs = new Array()
  }
  
  favs.push(slug)
  localStorage.setItem('favs', JSON.stringify(favs))
}

const formatGiphyData = gifArray => {
  const getImgHtmlString = (gif) => {
    return (`
      <div class="gif-holder">
        <button data-gif="${gif.slug}">Add to fav</button>
        <img src="${gif.images.original.url}">    
      </div>  
    `)
  }

  let imgString = ''
    for (let gif of gifArray) {
      // imgString = imgString.concat(`<img src="${gif.images.original.url}">`)
      imgString = imgString.concat(getImgHtmlString(gif))
    }
  return imgString
}

if (self.Worker) {
  const grWorker = new Worker()

    searchInput.addEventListener('keypress', {
      handleEvent: event => {
        if (event.keyCode === 13) grWorker.postMessage(searchInput.value)
      }
    })

  grWorker.onmessage = e => {
    resultsHolder.innerHTML = formatGiphyData(e.data)
    favButtons = document.querySelector('.gif-holder button')
    favButtons.addEventListener('click', addToFav)
  }
}
