const html = require('choo/html')

module.exports = (state, prev, send) => {
  return html`
    <div>
      <h1>An error has occured</h1>
    </div>`
}
