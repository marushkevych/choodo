const store = require('./utils/localStorage')
const extend = require('./utils/extend')

module.exports = {
  state: {
    todos: []
  },
  reducers: {
    receiveNewTodo: (state, data) => {
      return {todos: [...state.todos, data]}
    },
    replaceTodo: (state, {index, todo}) => {
      const todos = state.todos.slice()
      todos[index] = todo
      return {todos}
    },
    deleted: (state, index) => {
      const todos = state.todos.slice()
      todos.splice(index, 1)
      return {todos}
    },
    receiveTodos: (state, data) => ({todos: data})
  },
  effects: {
    addTodo: (state, data, send, done) => {
      store.add('todos', data, () => {
        send('receiveNewTodo', data, done)
      })
    },
    toggle: (state, index, send, done) => {
      const todos = state.todos.slice()
      const oldTodo = todos[index]
      const todo = extend(oldTodo, {done: !oldTodo.done})
      store.replace('todos', index, todo, () => {
        send('replaceTodo', {index, todo}, done)
      })
    },
    deleteTodo: (state, index, send, done) => {
      const todos = state.todos.slice()
      store.delete('todos', index, () => {
        send('deleted', index, done)
      })
    }
  },
  subscriptions: {
    loadTodos: function(send, done) {
      console.log('loadTodos is called')
      store.getAll('todos', (todos) => {
        send('receiveTodos', todos, done)
      })
    }
  }
}
