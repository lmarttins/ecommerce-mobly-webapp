<template>
  <b-button v-b-popover.hover.bottom="message" variant="outline-success">
    <i class="fa fa-shopping-cart"></i> {{ amount }}
  </b-button>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapState({
      cartStore: state => state.CartStore
    }),

    amount () {
      let items = JSON.parse(localStorage.getItem('cart')) || []
      if (this.cartStore.amount !== items) {
        return items.length
      }

      return this.cartStore.amount
    }
  },
  data () {
    return {
      message: 'Seu carrinho está vazio'
    }
  }
}
</script>
