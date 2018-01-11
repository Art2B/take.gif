import request from 'axios'
import config from './../../config.json'

onmessage = function(e) {
  request({
    method: 'get',
    url: 'http://' + config.giphy.host + config.giphy.endpoints.search,
    params: {
      api_key: config.giphy.apikey,
      q: e.data,
      limit: 20
    } 
  }).then(response => postMessage(response.data.data)).catch(error => console.log(error))
}

