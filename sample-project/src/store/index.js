import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsInCart: {
      "beanie-hat": 5
    }
  },
  mutations: {
    setProductQuantity (state, {productId, quantity}) {
      Vue.set(state.productsInCart, productId, quantity)
    }
  },
  getters: {
    countProductsInCart (state) {
      return Object.keys(state.productsInCart).length
    },
    countItemsInCart (state) {
      let result = 0
      Object.values(state.productsInCart).forEach(count => result += count)
      return result
    },
    countItemsOfProduct (state) {
      return function (productId) {
        return state.productsInCart[productId] || 0
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
