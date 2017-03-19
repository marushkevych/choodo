const html = require('choo/html')

module.exports = (state, prev, send) => {
  const logEntries = state.log.entries.map( entry => {
    return html `<li>${entry}</li>`
  })
  return html`
  <div>
    <h2>Action Log</h2>
    <ul>
      ${logEntries}
    </ul>
  </div>`
}
