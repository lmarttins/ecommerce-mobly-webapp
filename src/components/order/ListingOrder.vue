<template>
  <b-container>
    <b-row>
      <h2 class="text-success">Lista de pedidos</h2>
    </b-row>
    <b-row>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th>Cliente</th>
            <th>Endereço de entrega</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.user.first_name + ' ' + order.user.last_name }}</td>
            <td>{{ order.address.address + ', ' + order.address.number }}</td>
            <td>{{ order.total }}</td>
          </tr>
        </tbody>
      </table>
    </b-row>
  </b-container>
</template>

<script>
import {API_URL} from '@/env'

export default {
  name: 'ListingOrder',
  data () {
    return {
      orders: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get(API_URL + '/api/v1/orders')
        .then((response) => {
          this.orders = response.data.data
        })
    }
  }
}
</script>
