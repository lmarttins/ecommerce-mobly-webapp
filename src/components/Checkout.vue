<template>
  <b-container fluid>
    <b-row>
      <h2 class="text-success">Meu carrinho</h2>
    </b-row>
    <calculate :show-btn="true"></calculate>
    <b-row>
      <table class="table">
        <tbody>
        <tr v-for="item in getItems" :key="item.id">
          <th scope="row">
            <b-img thumbnail fluid src="https://lorempixel.com/50/50/technics/4/" alt="Thumbnail" />
          </th>
          <td style="font-size:14px">
            <a class="product-name mb-5" href="/Cadeira-de-Escritorio-Teen-Grant-Preta-198211.html">
              <strong>{{ item.name }}</strong>
            </a>
            <br><span class="block mb-5"><strong>Descrição: </strong>{{ item.description }}</span>
            <br><span class="mr-15">
            <strong>Cor:</strong> Preto
            </span>
          </td>
          <td>
            <stock :qty="item.stock" :selected="item.amount"></stock>
          </td>
          <td>R$ {{ item.price }}</td>
          <td>
            <a href="#"><i class="fa fa-times"></i></a>
          </td>
        </tr>
        </tbody>
      </table>
    </b-row>
  </b-container>
</template>

<script>
import {mapGetters} from 'vuex'
import Stock from '@/components/Stock'
import Calculate from '@/components/Calculate'

export default {
  name: 'Checkout',
  computed: {
    ...mapGetters([
      'getItems'
    ])
  },
  components: {
	  Calculate,
	  Stock
  },
  data () {
    return {
      amount_selected: 0,
      selected: null
    }
  }
}
</script>
