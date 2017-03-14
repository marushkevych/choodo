const choo = require('choo')
const html = require('choo/html')

const app = choo()

app.use({
  onError: function(err, state, createSend) {
    console.error(err, state)
    createSend('error', false)('location:set', '#error')
  }
})


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


app.model(require('./models/todo/model'))
app.model(require('./models/logModel'))

const home = layout(require('./pages/home'))
const test = layout(require('./pages/testLocationParams'))
const log = layout(require('./pages/log'))
const error = layout(require('./pages/error'))

app.router({ default: '/' },[
  ['/', home],
  ['/test', test,
    ['/:message', test]
  ],
  ['/log', log],
  ['/error', error]
])

const tree = app.start()
document.body.appendChild(tree)
