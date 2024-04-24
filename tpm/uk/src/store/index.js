import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts:[],
    comments:[]
  },
  getters: {
    getPostsByTitle: (state) => (id) => {
      return state.posts.find(el => el.id === id)
    },
    getTotalComment: (state) => {
      return state.comments.length
    },
  },
  mutations: {
    setPosts(state,data){
      state.posts = data
    },
    setComments(state,data){
      state.comments = data
    },
  },
  actions: {
    async savePosts(store){
      try {
        let data = await axios.get('https://jsonplaceholder.typicode.com/posts')
        data = data.data.map((el,index) => {
          return {
            ...el,
            author: 'John Doe',
            urlToImage:`https://source.unsplash.com/random/200x200?sig=${index}`
          }
        })
        store.commit('setPosts',data)
      } catch (error) {
        console.error(error);
      } 
    },
    async getComments(store,payload){
      try {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${payload}/comments`)
        store.commit('setComments',data.data)
      } catch (error) {
        console.error(error);
      } 
    },
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
