<template>
  <b-navbar type="light" variant="faded" class="fixed-top">
    <b-container>
      <b-navbar-brand href="#">E-commerce</b-navbar-brand>
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
