import Worker from './workers/gr.worker.js'

const searchInput = document.getElementById('search')
const resultsHolder = document.getElementById('results')

const formatGiphyData = gifArray => {
  let imgString = ''
  for (let gif of gifArray) {
    imgString = imgString.concat(`<img src="${gif.images.original.url}">`)
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
  }
}

