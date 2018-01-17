import { put, call, takeEvery } from 'redux-saga/effects'

import { actions } from './../actions/results.js'

import config from './../config.json'
import GiphyAPI from './../api/giphy.js'

const api = new GiphyAPI(config['giphy-apikey'])

// eslint-disable-next-line
export function* getGifs (action) {
  const response = yield call(api.search, action.query)
  yield put({
    type: actions.SET_RESULTS,
    results: response.data.data
  })
}

// eslint-disable-next-line
export function* watchAsync () {
  yield takeEvery('ASYNC_SEARCH_GIFS', getGifs)
}
