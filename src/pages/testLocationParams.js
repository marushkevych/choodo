const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html`
    <div>
      <h2>Location parameter</h2>
      The location param in ULR is
      <b>${state.location.params.message || 'none'}</b>

      <p>
      Its availabel in
      <pre>state.location.params.message </pre>
      </p>
    </div>`
}
