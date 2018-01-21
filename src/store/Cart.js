
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

export default {
  state, mutations, actions
}
