const choo = require('choo')
const model = require('./model')
const html = require('choo/html')

const app = choo()


const layout = view => (state, prev, send) => {
  return html`
  <div class="tile">
    ${view(state, prev, send)}
  </div>
  `
}

const home = layout(require('./pages/home'))
const test = layout(require('./pages/test'))

app.model(model)

app.router({ default: '/' },[
  ['/', home],
  ['/test', test,
    ['/:message', test]
  ]
])

const tree = app.start()
document.body.appendChild(tree)
