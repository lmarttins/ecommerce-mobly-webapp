<template>
  <div>
    <b-card-group deck>
      <b-card v-for="product in products" :key="product.id"
        img-src="https://placekitten.com/1000/300"
        :title="product.name">
        <p class="card-text">
          {{ product.description }}
        </p>
        <a href="#" class="btn btn-success" v-on:click="addCart(product)">
          Adicionar ao carrinho
        </a>
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
    },

    addCart (product) {
      this.$store.dispatch('addCart', product)
    }
  }
}
</script>
