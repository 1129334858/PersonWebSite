import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  topics: [],
  count: 0,
  userInfo: {}
}

const mutations = {
  TOPICS_LIST: (state, topics) => {
    state.topics = topics
  },

  INCREMENT: (state) => {
    state.count++
  },

  DECREMENT: (state) => {
    state.count--
  },

  USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
