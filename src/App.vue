<template>
  <div id="app">
    
    <router-view />
  </div>
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-size: cover;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import { firebase } from "@/firebase";
import store from "@/store";
import { db, storage } from '@/firebase';
import router from '@/router';
export default {
  data: function () {
    return {
      store,
    };
  },
  mounted() {
    
      firebase.auth().onAuthStateChanged((user) => {
        const currentRoute = router.currentRoute;
        if (user) {
          console.log("Trenutno ulogirani user: ", user.email)
          db.collection("user")
            .doc(user.email)
            .get()
            .then(function(doc) {
                if (doc.exists) {
                    const data = doc.data();
                    console.log(data)
                    store.korisnickoIme = data.korisnicko_ime
                    store.email = data.email,
                    store.ime_objekta = data.ime_objekta,
                    store.lokacija = data.lokacija,
                    store.kontakt = data.kontakt,
                    console.log(store.korisnickoIme)
                } 
                else {
                    console.log("No such document!");
                }
                })
                .catch(function(error) {
                    console.log("Error getting document:", error);
                });
                console.log("****", user.email);
                store.currentUser = user.email;
        } 
        else {
            console.log("**** Nema korisnika");
            store.currentUser = null;

        if(currentRoute.meta.needsUser){
            router.push({name:'prijava'});
        }
        }
      });
  }
};
</script>