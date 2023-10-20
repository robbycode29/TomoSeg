import { createStore } from 'vuex'
import { RootState } from '@/types'
import { GetterTree } from 'vuex'

export default createStore({
  state: {
    user: {
      displayName: null,
      photoURL: null,
    },
  },
  getters: {
    getUser: (state: { user: object }) => state.user,
  }  as GetterTree<RootState, RootState>,
  mutations: {
    setUser(state, user) {
      state.user = user
    },
  },
  actions: {
    setUser({ commit }, user) {
      console.log(user)
      commit('setUser', user)
    },
  },
  modules: {
  }
})
