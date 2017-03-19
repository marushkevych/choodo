const html = require('choo/html')

module.exports = function Header(todos) {
  return html `
    <h2>Todo (${countNotDone()})</h2>
  `
  function countNotDone() {
    return todos.reduce((acc, val) => {
      return val.done ? acc : acc+1
    }, 0)
  }
}
