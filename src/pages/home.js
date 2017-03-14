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

  const triggerError = () => send('triggerError', 'test error message')


  return html`
    <div>
      ${header}
      ${form}
      <ul>
        ${todos}
      </ul>
      <button class='error' onclick=${triggerError}>Trigger Error</button>
    </div>
    `
}

module.exports = view
