const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html`
    <div>
      <h1>${state.location.params.message || 'Test'}</h1>
    </div>`
}
