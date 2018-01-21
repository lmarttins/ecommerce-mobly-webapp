
const state = {
  amount: 0
}

const mutations = {
  ADD_CART (state, product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    cart.push(product)
    window.localStorage.setItem('cart', JSON.stringify(cart))

    state.amount++
  }
}

const actions = {
  addCart: ({commit}, product) => {
    commit('ADD_CART', product)
  }
}

const getters = {
  amount: () => {
    let items = JSON.parse(localStorage.getItem('cart')) || []
    if (state.amount !== items) {
      return items.length
    }

    return state.amount
  }
}

export default {
  state, mutations, actions, getters
}
