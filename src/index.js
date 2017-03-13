const choo = require('choo')
const model = require('./model')
const html = require('choo/html')

const app = choo()


app.model(model)

const layout = view => (state, prev, send) => {
  return html`
  <div class="tile">
    ${view(state, prev, send)}
  </div>
  `
}

app.router({ default: '/' },[
  ['/', layout(require('./views/home'))],
  ['/test', layout(require('./views/test')),
    ['/:message', layout(require('./views/test'))]
  ]
])

const tree = app.start()
document.body.appendChild(tree)
