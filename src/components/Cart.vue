<template>
  <b-button v-b-popover.hover.bottom="message" variant="outline-success">
    <i class="fa fa-shopping-cart"></i> {{ amount }}
  </b-button>
</template>

<script>

export default {
  name: 'Cart',
  data () {
    return {
      amount: 0,
      message: 'Seu carrinho está vazio'
    }
  }
}
</script>
