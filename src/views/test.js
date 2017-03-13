const html = require('choo/html')

module.exports = (state, prev, send) => {
  console.log(state)
  return html`
    <div>
      <h1>${state.location.params.message || 'Test'}</h1>
      <a href="#">Home</a>
    </div>`
}
