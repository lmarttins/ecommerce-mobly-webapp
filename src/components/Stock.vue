<template>
  <b-form-select v-model="selected" :options="stock(quantity)" class="mb-3"></b-form-select>
</template>

<script>
export default {
  name: 'Stock',
  props: {
    quantity: {
      type: Number,
      required: false
    },
    selected: {
      type: Number,
      required: false
    }
  },
  methods: {
    stock (quantity) {
      return [...Array(quantity).keys()]
    }
  }
}
</script>
