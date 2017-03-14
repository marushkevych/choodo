const store = require('./utils/localStorage')
const extend = require('./utils/extend')

module.exports = {
  state: {
    todos: []
  },
  reducers: {
    receiveNewTodo,
    replaceTodo,
    deleted,
    receiveTodos
  },
  effects: {
    addTodo,
    toggle,
    deleteTodo
  },
  subscriptions: {
    loadTodos
  }
}

// --- REDUCERS ---

function receiveNewTodo(state, data) {
  return {todos: [...state.todos, data]}
}

function replaceTodo(state, {index, todo}) {
  const todos = state.todos.slice()
  todos[index] = todo
  return {todos}
}

function deleted(state, index) {
  const todos = state.todos.slice()
  todos.splice(index, 1)
  return {todos}
}

function receiveTodos(state, data) {
  return {todos: data}
}

// --- EFFECTS ---

function addTodo(state, data, send, done) {
  store.add('todos', data, () => {
    send('receiveNewTodo', data, () => {
      send('log:add', `todo added: ${data.title}`, done)
    })
  })
}

function toggle(state, index, send, done) {
  const todos = state.todos.slice()
  const oldTodo = todos[index]
  const todo = extend(oldTodo, {done: !oldTodo.done})
  store.replace('todos', index, todo, () => {
    send('replaceTodo', {index, todo}, done)
  })
}

function deleteTodo(state, index, send, done) {
  const todos = state.todos.slice()
  store.delete('todos', index, () => {
    send('deleted', index, done)
  })
}

// --- subscribtion

function loadTodos(send, done) {
  console.log('loadTodos is called')
  store.getAll('todos', (todos) => {
    send('receiveTodos', todos, done)
  })
}
