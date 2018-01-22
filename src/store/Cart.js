import * as types from './mutation-types'

const state = {
  amount: 0,
  total: 0
}

const mutations = {
  [types.ADD_TO_CART] (state, product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    if (cart[product.id - 1]) {
      cart[product.id - 1].amount++
      cart[product.id - 1].total = (cart[product.id - 1].amount) * product.price
    } else {
      cart[product.id - 1] = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        amount: 1,
        stock: product.stock,
        total: product.price
      }
    }

    window.localStorage.setItem('cart', JSON.stringify(cart))

    state.amount++
  },

  [types.SET_TOTAL] (state) {
    let items = JSON.parse(localStorage.getItem('cart')) || []

    let total = 0

    items.forEach((item) => {
      total += item.total
    })

    state.total = total

    window.localStorage.setItem('total', total)
  },

  [types.CLEAR_CART] (state) {
    state.amount = 0
    window.localStorage.clear()
  }
}

const actions = {
  addCart: ({commit}, product) => {
    commit('ADD_TO_CART', product)
  },

  setTotal: ({commit}) => {
    commit('SET_TOTAL')
  },

  clearCart: ({commit}) => {
    commit('CLEAR_CART')
  }
}

const getters = {
  amount: () => {
    let items = JSON.parse(localStorage.getItem('cart')) || []

    let counter = 0

    items.forEach((item) => {
      counter += item.amount
    })

    if (counter !== state.amount) {
      return counter
    }

    return state.amount
  },

  getItems: () => {
    return JSON.parse(localStorage.getItem('cart')) || []
  },

  getTotal: () => {
    let total = window.localStorage.getItem('total') || 0

    return total.toLocaleString('pt-BR')
  }
}

export default {
  state, mutations, actions, getters
}
