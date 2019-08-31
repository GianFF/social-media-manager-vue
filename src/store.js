import Vuex from "vuex";

// Mutations:
export const SET_FB_ACCOUNT = 'setFbAccount'
export const SET_TW_ACCOUNT = 'setTwAccount'
export const SET_INS_ACCOUNT = 'setInsAccount'
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
    [SET_FB_ACCOUNT](state, account) {
      state.fbAccount = account
    },
    [SET_TW_ACCOUNT](state, account) {
      state.fbAccount = account
    },
    [SET_INS_ACCOUNT](state, account) {
      state.insAccount = account
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
