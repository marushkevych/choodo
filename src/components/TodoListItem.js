const html = require('choo/html')

module.exports = function TodoListItem({todo, onToggle, onDelete}) {
  const todoEntry = html`
    <label>
      <input type="checkbox" onchange=${onToggle} ${todo.done ? 'checked' : ''}/>
      ${todo.title}
    </label>`

  const todoEntryDecorated = todo.done ? html`<strike>${todoEntry}</strike>` : todoEntry

  return html`
  <li>
    ${todoEntryDecorated}
    <button onclick=${onDelete}>Delete</button>
  </li>`
}
