import * as types from './mutation-types'

const state = {
  amount: 0,
  total: 0
}

const mutations = {
  [types.ADD_TO_CART] (state, product) {
    let items = JSON.parse(localStorage.getItem('cart')) || []

    const record = items.find(p => p.id === product.id)

    if (!record) {
      items.push({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        amount: 1,
        stock: product.stock,
        total: product.price
      })
    } else {
      items.forEach((item, index) => {
        if (product.id === item.id) {
          items[index].amount++
        }
      })
    }

    window.localStorage.setItem('cart', JSON.stringify(items))

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
  addToCart: ({commit}, product) => {
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
