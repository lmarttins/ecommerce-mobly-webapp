<template>
  <div>
    <b-card-group deck>
      <b-card v-for="product in products"
        img-src="https://placekitten.com/1000/300"
        header-tag="header"
        :title="product.name">
        <p class="card-text">
          {{ product.description }}
        </p>
        <b-button href="#" variant="success">
          Adicionar no carrinho
        </b-button>
      </b-card>
  </b-card-group>
  </div>
</template>

<script>
import {API_URL} from '@/env'

export default {
  name: 'ProductList',
  data () {
    return {
      products: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(API_URL + '/api/v1/products')
        .then((response) => {
          this.products = response.data.data
        })
    }
  }
}
</script>
