<template>
  <b-form-select v-model="selected" :options="stock(qty)" class="mb-3"></b-form-select>
</template>

<script>
export default {
  name: 'Stock',
  props: {
    qty: {
      type: Number,
      required: false
    },
    selected: {
      type: Number,
      required: false
    }
  },
  methods: {
    stock (qty) {
      return [...Array(qty).keys()]
    }
  }
}
</script>
