export const actions = {
  ADD_FAV: 'ADD_FAV',
  REMOVE_FAV: 'REMOVE_FAV'
}

export const addFav = url => ({
  type: actions.ADD_FAV,
  url
})

export const removeFav = url => ({
  type: actions.REMOVE_FAV,
  url
})
