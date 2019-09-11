import Vuex from "vuex";

// Mutations:
export const SET_ACCOUNT = 'setAccount'
// Actions:
export const PUBLISH = 'publish'
export const ASSOCIATE_ACCOUNT = 'associateAccount'

const initStore = () => new Vuex.Store({
  state: {
    fbAccount: '',
    twAccount: '',
    insAccount: '',
  },
  mutations: {
    [SET_ACCOUNT](state, {account, key}) {
      if (key === 'FACEBOOK') {
        state.fbAccount = account
      }
      if (key === 'TWITTER') {
        state.twAccount = account
      }
      if (key === 'INSTAGRAM') {
        state.insAccount = account
      }
    },
  },
  actions: {
    [PUBLISH](context, publication) {
      setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log('store: publishing ', publication)
      }, 1000)
    },
    [ASSOCIATE_ACCOUNT](context, {account, method}) {
      setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log('store: associating account ', account)
        // eslint-disable-next-line no-console
        console.log('store: associating account ', method())
      }, 1000)
    }
  }
})

export default initStore
