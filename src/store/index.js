import Vue from 'vue'
import Vuex from 'vuex'
import CartStore from '@/store/Cart'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    CartStore
  },
  strict: debug
})
