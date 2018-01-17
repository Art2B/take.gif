export const actions = {
  SET_RESULTS: 'SET_RESULTS',
  FLUSH_RESULTS: 'FLUSH_RESULTS'
}

export const setResults = results => ({
  type: actions.SET_RESULTS,
  results
})

export const clearResults = () => ({
  type: actions.FLUSH_RESULTS
})
