const html = require('choo/html')
const NewItemForm = require('../components/newItemForm')
const Header = require('../components/Header')
const TodoListItem = require('../components/TodoListItem')

const view = (state, prev, send) => {
  const form = NewItemForm(title => send('addTodo', {title}))
  const header = Header(state.todos)
  const todos = state.todos.map((todo, index) => {

    function onToggle() {
      send('toggle', index)
    }

    function onDelete() {
      send('deleteTodo', index)
    }

    return TodoListItem({todo, onToggle, onDelete})
  })


  return html`
    <div>
      ${header}
      ${form}
      <ul>
        ${todos}
      </ul>
      <a href="#test/foo">Test</a>
    </div>
    `
}

module.exports = view
