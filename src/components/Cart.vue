<template>
  <div>
    <b-btn id="cart-message" variant="outline-success">
      <i class="fa fa-shopping-cart"></i> {{ amount }}
    </b-btn>
    <b-popover target="cart-message" triggers="hover focus" placement="bottomleft" v-if="showMessageEmpty()">
      Seu carrinho está vazio.
    </b-popover>
    <b-popover target="cart-message" triggers="hover" no-fade placement="bottomleft" v-if="!showMessageEmpty()">
      <b-btn id="cart-message" variant="success">
        Concluir compra ({{ amount }} itens)
      </b-btn>
    </b-popover>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'Cart',
  computed: {
    ...mapState({
      cartStore: state => state.CartStore
    }),
    ...mapGetters([
      'amount'
    ]),
    items () {
      let items = JSON.parse(localStorage.getItem('cart')) || []
      return items
    }
  },
  methods: {
    showMessageEmpty () {
      let items = JSON.parse(localStorage.getItem('cart')) || []
      if (!this.cartStore.amount && !items.length) {
        return true
      }

      return false
    }
  }
}
</script>
