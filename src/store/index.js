import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    todos: []
  },
  getters: {
    totalTodosCount(state){
      return state.todos.length
    },
    completedTodosCount(state) {
      return state.todos.filter(todo => {
        return todo.isCompleted 
      }).length
    },
    uncompletedTodosCount(state) {
      return state.todos.filter(todo => {
        return !todo.isCompleted
      }).length
    }
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index, 1)
    },
    UPDATE_TODO_STATUS(state, todoItem) {
      state.todos = state.todos.map(todo => {
        if (todo === todoItem) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    },
    CLEAR_ALL(state){
      state.todos.splice(0,state.todos.length)
    },
    CHANGE_CHECK_STATUS(state, todoItem) {
      state.todos = state.todos.map(todo => {
        if (todo === todoItem) {
          todo.checked = !todo.checked
        }
        return todo
      })
    },
    DELETE_CHECKED(state) {
      state.todos = state.todos.filter(todo => {
        return !todo.checked 
      })
      // state.todos = state.todos.map(todo => {
      //   if (todo.checked === true){
      //     const index = state.todos.indexOf(todo)
      //     state.todos.splice(index, 1)
      //   }
      // })

      // state.todos.forEach(todo => {
      //   if (todo.checked === true){
      //     const index = state.todos.indexOf(todo)
      //     state.todos.splice(index, 1)
      // })
    }
  },
  actions: {
    createTodo({ commit }, todoItem) {
      commit('CREATE_TODO', todoItem)
    },
    deleteTodo({ commit }, todoItem) {
      commit('DELETE_TODO', todoItem)
    },
    updateTodoStatus({ commit }, todoItem) {
      commit('UPDATE_TODO_STATUS', todoItem)
    },
    clearAll({ commit }) {
      commit('CLEAR_ALL')
    },
    changeCheckStatus({ commit }, todoItem) {
      commit('CHANGE_CHECK_STATUS', todoItem)
    },
    deleteChecked({ commit }) {
      commit('DELETE_CHECKED')
    }
  },
  modules: {
  }
})
