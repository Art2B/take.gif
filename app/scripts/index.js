import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import isEqual from 'lodash.isequal'

// Import style. Note: I hate that way of loading SCSS files
// eslint-disable-next-line
import style from './../styles/index.scss'

import { watchAsync } from './middlewares/sagas'
import reducer from './reducers'
import App from './components/app.js'

let initialState = {
  favorites: []
}

const localFavorites = JSON.parse(window.localStorage.getItem('favorites'))
try {
  if (localFavorites && Array.isArray(localFavorites)) {
    initialState.favorites = localFavorites
  }
} catch (e) {}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watchAsync)

let currentValue
const handleStoreChanges = () => {
  const previousValue = currentValue
  currentValue = store.getState().favorites

  if (!isEqual(currentValue, previousValue)) {
    window.localStorage.setItem('favorites', JSON.stringify(currentValue))
  }
}
store.subscribe(handleStoreChanges)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app-root'))
