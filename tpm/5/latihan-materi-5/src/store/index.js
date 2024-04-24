import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[],
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    setTodo(state,data){
      state.todos.push(data)
    },
    destroyTodo(state,data){
      state.todos.splice(data,1)
    },
    editTodo(state,data){
      const edit = state.todos[data.index - 1];
      if(!edit.isEdit){
        state.todos[data.index - 1].isEdit = true;
      }else{
        state.todos[data.index - 1].isEdit = false;
        state.todos[data.index - 1].todo = data.edited;
      }
    },
    ubahDeskripsi(state,data){
      const index = state.todos.findIndex(el => el.id == data.id)
      state.todos[index].detailIsEdit = data.value
    },
    setDeskripsi(state,data){
      const index = state.todos.findIndex(el => el.id == data.id)
      state.todos[index].deskripsi = data.edited
      state.todos[index].detailIsEdit = false
    }
  },
  actions: {
    saveTodo(store,payload){
      store.commit('setTodo',payload)
    },
    deleteTodo(store,payload){
      store.commit('destroyTodo',payload)
    },
    editTodo(store,payload){
      store.commit('editTodo',payload)
    },
    ubahDeskripsi(store,payload){
      store.commit('ubahDeskripsi',payload)
    },
    saveDeskripsi(store,payload){
      store.commit('setDeskripsi',payload)
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
