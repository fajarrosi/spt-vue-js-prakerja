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
    getPostsById: (state) => (id) => {
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
        let postData = await axios.get('https://dummyjson.com/posts');
        let posts = await Promise.all(postData.data.posts.map(async (el, index) => {
          const userData = await axios.get(`https://dummyjson.com/users/${el.userId}`);
          const username = userData.data.firstName + ' ' + userData.data.lastName;
          return {
            ...el,
            author: username,
            urlToImage: `https://source.unsplash.com/random/200x200?sig=${index}`
          };
        }));
        store.commit('setPosts', posts);
      } catch (error) {
        console.error(error);
      } 
    },
    async getComments(store,payload){
      try {
        const data = await axios.get(`https://dummyjson.com/comments/post/${payload}`)
        store.commit('setComments',data.data.comments)
      } catch (error) {
        console.error(error);
      } 
    },
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
