const choo = require('choo')
const html = require('choo/html')

const app = choo()


const layout = view => (state, prev, send) => {
  return html`
  <div class="tile">
  <a href="#">home</a> |
  <a href="#log">log</a> |
    <a href="#test/foo">test location params</a>
    ${view(state, prev, send)}
  </div>
  `
}


app.model(require('./model'))
app.model(require('./logModel'))

const home = layout(require('./pages/home'))
const test = layout(require('./pages/testLocationParams'))
const log = layout(require('./pages/log'))

app.router({ default: '/' },[
  ['/', home],
  ['/test', test,
    ['/:message', test]
  ],
  ['/log', log]
])

const tree = app.start()
document.body.appendChild(tree)
