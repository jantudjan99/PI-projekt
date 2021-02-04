import Vue from 'vue'
import VueRouter from 'vue-router'
import Prva from '../views/prva.vue'
import store from "@/store"
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
    component: () => import('../views/registracija.vue')
  },
  {
    path: '/pocetna',
    name: 'pocetna',
    component: () => import( '../views/pocetna.vue'),
    meta: {
      needsUser: true
    }
  },
  {
  path: '/onama',
  name: 'onama',
  component: () => import('../views/onama.vue'),
  meta: {
    needsUser: true
  }
},
  
{
  path: '/prijava',
  name: 'prijava',
  component: () => import('../views/prijava.vue'),
},

{
  path: '/kupiprodaj',
  name: 'kupiprodaj',
  component: () => import('../views/kupiprodaj.vue'),
  meta: {
    needsUser: true
  }
},

{
  path: '/recenzije',
  name: 'recenzije',

  component: () => import( '../views/recenzije.vue'),
  meta: {
    needsUser: true
  }
},

{
  path: '/tips_tricks',
  name: 'tips_tricks',

  component: () => import('../views/tips_tricks.vue'),
  meta: {
    needsUser: true
  }
},

{
  path: '/profil',
  name: 'profil',
  component: () => import( '../views/profil.vue'),
  meta: {
    needsUser: true
  }
}


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

router.beforeEach((to, from, next)=>{


  next();
})



export default router