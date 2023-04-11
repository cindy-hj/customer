import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerListView from '../views/CustomerListView.vue'
import CustomerAddView from '../views/CustomerAddView.vue'
import CustomerEditView from '../views/CustomerEditView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '/customerlist',
    name: 'customerlist',
    component:CustomerListView
  }, {
    path: '/customeradd',
    name: 'customeradd',
    component:CustomerAddView
  }, {
    path: '/customeredit',
    name: 'customeredit',
    component:CustomerEditView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
