import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/product/List'
import Checkout from '@/components/Checkout'
import FinishOrder from '@/components/order/FinishOrder'
import ListingOrder from '@/components/order/ListingOrder'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: ProductList},
    {path: '/checkout', name: 'checkout', component: Checkout},
    {path: '/finish-order', name: 'finish.order', component: FinishOrder},
    {path: '/orders', name: 'listing.order', component: ListingOrder}
  ]
})
