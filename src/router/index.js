import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/product/List'
import Checkout from '@/components/Checkout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: ProductList},
    {path: '/checkout', name: 'checkout', component: Checkout}
  ]
})
