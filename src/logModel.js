module.exports = {
  namespace: 'log',
  state: {
    entries: ['app loaded']
  },
  reducers: {
    add: (state, data) => {
      return {entries: [...state.entries, data]}
    }
  }
}
