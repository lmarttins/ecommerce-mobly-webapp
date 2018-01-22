<template>
  <b-navbar type="light" variant="faded" class="fixed-top bg-white">
    <b-container>
      <b-navbar-brand>
        <router-link :to="{ path: '/' }">Shopping Cart</router-link>
      </b-navbar-brand>
      <b-link :to="{ name: 'listing.order' }" class="btn btn-primary">Lista de pedidos</b-link>
      <cart></cart>
    </b-container>
  </b-navbar>
</template>

<script>
import Cart from '@/components/Cart'

export default {
  name: 'AppHeader',
  components: {
    Cart
  }
}
</script>
