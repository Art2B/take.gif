const searchInput = document.getElementById('search')

searchInput.addEventListener('keypress', {
  handleEvent: event => {
    if (event.keyCode === 13) { 
      console.log(`submitted input with value: ${searchInput.value}`)
    }
  }
})

