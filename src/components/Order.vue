<template>
  <div>
    <h1>Finalizar pedido</h1>
    <calculate :show-btn="false"></calculate>
    <b-form @submit="onSubmit">
      <b-form-group label="Nome">
        <b-form-input v-model="data.user.last_name"></b-form-input>
      </b-form-group>
      <b-form-group label="Sobrenome">
        <b-form-input v-model="data.user.first_name"></b-form-input>
      </b-form-group>
      <b-form-group label="Email" type="email">
        <b-form-input v-model="data.user.email"></b-form-input>
      </b-form-group>
      <b-form-group label="Endereço">
        <b-form-input v-model="data.address.address"></b-form-input>
      </b-form-group>
      <b-form-group label="Bairro">
        <b-form-input v-model="data.address.neighborhood"></b-form-input>
      </b-form-group>
      <b-form-group label="Número">
        <b-form-input v-model="data.address.number"></b-form-input>
      </b-form-group>
      <b-form-group label="Cidade">
        <b-form-input v-model="data.address.city"></b-form-input>
      </b-form-group>
      <b-form-group label="Estado">
        <b-form-input v-model="data.address.state"></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">
        Concluir compra
      </b-button>
    </b-form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {API_URL} from '@/env'
import Calculate from '@/components/Calculate'

export default {
  name: 'Order',
  computed: {
    ...mapGetters([
      'getTotal'
    ])
  },
  data () {
  	return {
      data: {
      	user: {},
        address: {},
        total: 0
      }
    }
  },
  components: {
    Calculate
  },
  methods: {
  	onSubmit (evt) {
      evt.preventDefault()

      this.$http.post(API_URL + '/api/v1/orders', this.data)
        .then((response) => {
          this.$store.dispatch('clearCart')
          let processed = this.processResponse(response)
          this.$toastr('success', processed.message)
          this.$router.push({name: 'home', force: true})
        })
    }
  },
  created () {
  	this.data.total = this.getTotal
  }
}
</script>
