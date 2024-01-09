import { createStore } from 'vuex'
import { RootState } from '@/types'
import { GetterTree } from 'vuex'
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import firebaseConfig from '@/firebaseConfig'
import scans from './scans'

export default createStore<RootState>({
  state: {
    user: {
      displayName: null,
      photoURL: null,
      email: null,
      uid: "",
      is_admin: false,
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
    async setUser({ commit }, user) {
      commit('setUser', user);
      if (Object.keys(user).length !== 0) {
        await this.dispatch("addUser", user);
      }
    },
    async addUser({ commit }, user) {
      try {
        const userFile = doc(firebaseConfig.db, "users", user.uid);
        const oldUser = await getDoc(userFile);
        await setDoc(userFile, {
          id: user.uid,
          name: user.displayName ? user.displayName : user.email,
          email: user.email,
          photoUrl: user.photoURL ? user.photoURL : null,
          is_admin: oldUser.data().is_admin ? oldUser.data().is_admin : false,
        }, { merge: true });
        const updatedUser = await getDoc(userFile);
        commit("setUser", {
          displayName: updatedUser.data().name,
          photoURL: updatedUser.data().photoUrl,
          email: updatedUser.data().email,
          uid: updatedUser.data().id,
          is_admin: updatedUser.data().is_admin,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
  modules: {
    scans,
  }
})
