export default class Gif {
  constructor (url) {
    this.url = url
  }

  checkFav () {
    try {
      return !!JSON.parse(localStorage.getItem('favs')).find(e => e === this.url)
    } catch (e) {
      return false
    }
  }

  render () {
    return (`
      <div class="gif-holder">
        <div class="icon-holder">
          <i class="${this.checkFav() ? 'fas' : 'far'} fa-star"></i>
        </div>
        <img src="${this.url}">    
      </div>
    `)
  }
}
