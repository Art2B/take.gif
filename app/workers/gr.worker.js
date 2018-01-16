import request from 'axios'
import config from './../config.json'

onmessage = function (e) {
  request({
    method: 'get',
    url: 'https://' + config.giphy.host + config.giphy.endpoints.search,
    params: Object.assign({
      api_key: config.giphy.apikey,
      limit: 20
    }, e.data)
  }).then(response => postMessage(response.data.data)).catch(error => console.log(error))
}
