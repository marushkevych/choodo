const html = require('choo/html')

module.exports = function NewItemForm(onSubmit) {
  return html`
    <form onsubmit=${submit}>
      <input type="text" placeholder="New Item" id="title">
    </form>
  `
  function submit(e) {
    const input = e.target.children[0]
    onSubmit(input.value)
    input.value = ''
    e.preventDefault()
  }
}
