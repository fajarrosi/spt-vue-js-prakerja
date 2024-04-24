import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news:[]
  },
  getters: {
    getNewsByTitle: (state) => (title) => {
      return state.news.find(el => el.title === title)
    }
  },
  mutations: {
    setNews(state,data){
      state.news = data
    },
    resetNews(state){
      state.news = []
    }
  },
  actions: {
    async saveNews(store){
      try {
        let data = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=4e94a335409741f08fd2e65b1a839d0e')
        data = data.data.articles.map(el=>{
          const options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
            timeZone: "UTC",
          };
          const date = new Date(el.publishedAt);
          const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
            date
          );
          return {
            ...el,
            publishedAt: formattedDate
          }
        })
        store.commit('setNews',data)
      } catch (error) {
        console.error(error);
      } 
    },
    async searchNews(store,payload){
      store.commit('resetNews')
      try {
        let data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us${payload != null ? `&q=${payload}` : ''}&apiKey=4e94a335409741f08fd2e65b1a839d0e`)
        data = data.data.articles.map(el=>{
          const options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
            timeZone: "UTC",
          };
          const date = new Date(el.publishedAt);
          const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
            date
          );
          return {
            ...el,
            publishedAt: formattedDate
          }
        })
        store.commit('setNews',data)
      } catch (error) {
        console.error(error);
      } 
    },
    async searchNewsByCategory(store,payload){
      store.commit('resetNews')
      try {
        let data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us${payload != null ? `&category=${payload}` : ''}&apiKey=4e94a335409741f08fd2e65b1a839d0e`)
        data = data.data.articles.map(el=>{
          const options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: false,
            timeZone: "UTC",
          };
          const date = new Date(el.publishedAt);
          const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(
            date
          );
          return {
            ...el,
            publishedAt: formattedDate
          }
        })
        store.commit('setNews',data)
      } catch (error) {
        console.error(error);
      } 
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
