import Vue from 'vue'
import VueRouter from 'vue-router'
import Prva from '../views/prva.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'prva',
    component: Prva
  },

  {
    path: '/registracija',
    name: 'registracija',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/registracija.vue')
  },
  {
    path: '/pocetna',
    name: 'pocetna',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pocetna.vue')
  },
  {
  path: '/onama',
  name: 'onama',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/onama.vue')
},
  
{
  path: '/prijava',
  name: 'prijava',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/prijava.vue')
},

{
  path: '/kupiprodaj',
  name: 'kupiprodaj',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/kupiprodaj.vue')
},



]

const router = new VueRouter({
  linkActiveClass:'is-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*const handleUpload = () =>{ const uploadTask = storage.ref('images/${image.name}').put(image); 
  uploadTask.on( 
      "state changed", 
      snapshot => {}, 
      error => { console.log(error); 
    },
    () => { 
        storage 
        .ref("Objave") 
        .child(image.name) 
        .getDownloadURL() 
        .then(url => { // console.log(url); 
  }); 
    }
  );
};*/

export default router