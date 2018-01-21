<template>
  <b-container fluid class="text-light text-center">
    <b-row>
      <b-col md="8" class="text-left p-3">
        <p class="text-dark"><strong>Total a pagar</strong></p>
        <h4 class="text-dark">{{ getTotal }}</h4>
      </b-col>
      <b-col md="4" class="text-right p-3">
        <b-button size="lg" variant="success">
          Gerar pedido
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Order',
  computed: {
    ...mapGetters([
      'getTotal'
    ])
  },
  data () {
    return {
      total: 0
    }
  }
}
</script>
