const html = require('choo/html')


const view = (state, prev, send) => {
  return html`
    <div>
      <h1>Todo (${countNotDone(state.todos)})</h1>
      <form onsubmit=${onSubmit}>
        <input type="text" placeholder="New Item" id="title">
      </form>
      <ul>
        ${state.todos.map(renderTodo)}
      </ul>
      <a href="#test/foo">Test</a>
    </div>
    `

  function renderTodo(todo, index) {
    const todoEntry = html`
      <label>
        <input type="checkbox" onchange=${onChange} ${todo.done ? 'checked' : ''}/>
        ${todo.title}
      </label>`

    const todoEntryDecorated = todo.done ? html`<strike>${todoEntry}</strike>` : todoEntry

    return html`
    <li>
      ${todoEntryDecorated}
      <button onclick=${deleteTodo}>Delete</button>
    </li>`

    function onChange() {
      send('toggle', index)
    }

    function deleteTodo(e) {
      send('deleteTodo', index)
    }
  }

  function onSubmit(e) {
    const input = e.target.children[0]
    send('addTodo', {title: input.value})
    input.value = ''
    e.preventDefault()
  }
}

function countNotDone(todos) {
  return todos.reduce((acc, val) => {
    return val.done ? acc : acc+1
  }, 0)
}

module.exports = view
