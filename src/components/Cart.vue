<template>
  <div>
    <b-btn id="cart-message" variant="outline-success">
      <i class="fa fa-shopping-cart"></i> {{ amount }}
    </b-btn>
    <b-popover target="cart-message"
      triggers="hover blur"
      placement="bottomleft"
      v-if="showMessageEmpty()">
      Seu carrinho de compras está vazio.
    </b-popover>
    <b-popover target="cart-message"
    triggers="click blur"
    no-fade
    placement="bottomleft"
    v-if="!showMessageEmpty()">
      <b-link href="/checkout" id="cart-message" variant="primary">
        Concluir compra ({{ amount }} itens)
      </b-link>
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
    ])
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
