import request from 'axios'

export default class GiphyApi {
  constructor (API_KEY) {
    this.api_key = API_KEY
    this.host = 'api.giphy.com'
    this.endpoints = {
      search: '/v1/gifs/search'
    }
    // This is caveman code but avoid installing a dependencies only for this because it's the only place where I need binding on a class function
    this.search = this.search.bind(this)
  }

  search (q, limit = 20) {
    return request({
      method: 'get',
      url: 'https://' + this.host + this.endpoints.search,
      params: {
        api_key: this.api_key,
        q: q,
        limit: limit
      }
    })
  }
}
