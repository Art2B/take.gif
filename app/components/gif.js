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
    let btnText = (this.checkFav()) ? 'Remove from fav' : 'Add to fav'

    return (`
      <div class="gif-holder">
        <button>${btnText}</button>
        <img src="${this.url}">    
      </div>
    `)
  }
}
