import Vue from 'vue'
import VueRouter from 'vue-router'
import Pocetna from '../views/pocetna.vue'
import store from "@/store"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'pocetna',
    component: Pocetna
  },

  {
    path: '/registracija',
    name: 'registracija',
    component: () => import('../views/registracija.vue')
  },
  {
    path: '/prijava',
    name: 'prijava',
    component: () => import( '../views/prijava.vue'),
  
    },
  {
    path: '/pocetna',
    name: 'pocetna',
    component: () => import( '../views/pocetna.vue'),
    meta: {
      needsUser: true
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next)=>{
  next();
})



export default router