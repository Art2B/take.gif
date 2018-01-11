import Worker from './workers/gr.worker.js'

const searchInput = document.getElementById('search')

if (Worker) {
  const myWorker = new Worker()

  searchInput.addEventListener('keypress', {
    handleEvent: event => {
      if (event.keyCode === 13) { 
        console.log(`submitted input with value: ${searchInput.value}`)
        myWorker.postMessage(searchInput.value)
      }
    }
  })
}

