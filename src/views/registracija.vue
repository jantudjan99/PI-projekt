
<template>
    <div class="pokusaj">
      <div class="proba">
    <div class="hero-image2">
    </div>
    </div>
    <div class="tekst2">
    <h1 class="text-center mb-5" >Registracija</h1>
     <form @submit.prevent="signin">
       <div class="kontejner">
       <div class="form-group">
          <label class="forma" for="email">E-mail</label> <br><br>
          <input v-model="noviEmail" type="email" class="form-control" id="email" aria-describedby=""  ><br> 
        </div>
        <br> 
       <div class="form-group">
          <label class="forma" for="passwordField">Lozinka</label> <br><br>
          <input v-model="novaLozinka" type="password" class="form-control" id="lozinka" ><br>
       </div> <br>
       
       <div class="form-group">
          <label class="forma" for="korisnickoIme">Korisničko ime</label> <br><br>
          <input v-model="novoKorisnicko_ime" type="korisnicko_ime" class="form-control" id="korisnickoIme" aria-describedby="s"  ><br>
        </div> <br>
       <div class="form-group">
          <label class="forma" for="ime_objekta">Ime objekta</label> <br><br>
          <input v-model="novoIme_objekta" type="ime_objekta" class="form-control" id="ime_objekta" aria-describedby=""  ><br> 
        </div> <br>
        <div class="form-group">
          <label class="forma" for="imeLokacija">Lokacija</label> <br><br>
          <input v-model="novoImeLokacije" type="text" class="form-control" id="imeLokacije" aria-describedby=""><br>
        </div> <br> 
          <div class="form-group">
          <label for="kontakt" class="forma">Kontakt</label> <br> <br>
        <input v-model="noviKontakt" type="text" class="form-control" id="kontakt" name="contact" aria-describedby=""><br>
        </div> <br>
        <div class="form-group">
        <a> <button class="registracija" type="button" @click="registracija">Registriraj se</button> </a>
         <a href="/prijava"><h5 class="NR">Već ste registrirani?</h5></a>
      </div>
      <div class="proba2">
        </div>
        </div>
      </form>
      </div>
      </div>
</template>

<script>
import {firebase} from '@/firebase';
import { db } from '@/firebase';
import store from '@/store';

export default {
  data () {
    return {
      email: '',
      password: '',
      lokacija: '',
      kontakt: '',
      korisnicko_ime: '',
      ime_objekta: '',
    }
  },

  methods: {
    signin () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
      console.log(error);
  
      });

        db.collection("user").add({
          ime: this.data.korisnicko_ime,
          email: this.data.email,
          lozinka: this.data.lozinka,
          lokacija: this.lokacija,
          ime_objekta: this.ime_objekta,
        })
        .then((doc) => {
              console.log("Spremljeno", doc)
          })
        .catch(function(error){
        console.error('Došlo je do greške',error);
      });
      store.ispisikorisnicko_ime = this.korisnicko_ime;
      store.trenutniKorisnik = this.email;
      store.lozinka = this.lozinka;
      store.lokacija = this.lokacija;
      store.ime_objekta = this.ime_objekta;

        firebase .auth()
                  .createUserWithEmailAndPassword(this.data.email,this.data.lozinka)
                  .then(function()   {
                          that.$router.replace({name: "pocetna" });  
                    })

                  .catch(function(error){
                    console.error('Došlo je do greške',error);
                  });

    }
  }


};
</script> 



<style>

.form-control  {
  border:none;
  border-bottom:1px solid;
  font-size:1.4em;
  display:block;
  width:100%;
  border-radius:0px;
  border-color:black;
}

.form-control:focus{
    outline:none !important;
    outline-width: 0 !important;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    border-color:#c73500a6;
    caret-color:#c73500a6;
}

button:focus {
  outline:0;
}

.forma {
  font-size: 2em;
  color:#000000;
  display:block;
  position:absolute;
}

.kontejner { 
  display:inline-block;
  width:50%;
  margin:auto;
}

.text-center {
  font-size: 3.2em;
  margin-top:5%;
  color:black;
}

.registracija {
  padding: 12px 20px;
  font-size: 20px;
  border:none;
  background-color:#c73500a6;
  color:black;
  border-radius: 12px;
  font-weight: bold;
}

.hero-image2 {
  background-image: url("/assets/kava.jpeg");
  width:34%;
  right: 0px;
  position: fixed;
  min-height: 100%;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-repeat: no-repeat;
  bottom:0px;
}

.form-group {
  display:inline-block;
  width:100%;
}

.proba {
  width:35%;
  right:0px;
  min-height: 100%;
}

.proba2 {
  position: relative;
  overflow: hidden;
}

.tekst2 {
 width: 67%;
 position: absolute;
 left: 0px;
 height: 100%;
 font-family: 'Playfair Display', serif;
 font-size: 15px;
 text-align:center;
}

.NR {
  color:black;
}

.NR:hover {
  color:black;
  text-decoration: underline;
}


@media (max-width: 480px) {
  .hero-image2 {
     display: none;
  }
}



</style>

<script>
import { firebase } from '@/firebase';

export default {
  name: 'Registracija',
  data() {
    return {
      korisnicko_ime: '',
      lozinka: '',
      email: '',
      zupanija: '',
      ime_objekta: '',
    };
  },

  methods: {
        registracija() {

          firebase .auth().createUserWithEmailAndPassword(this.email, this.lozinka).then(
            function() {
             console.log('Uspješna registracija'); 
            } )
            .catch(function(error) {
              console.error("Došlo je do greške", error)  
            });

            this.$router.replace({ name: 'pocetna'})

            console.log('Nastavak'); 
            /* if (email==''|| password=='' ) {
             router.push({ name: 'registracija' });
            }*/
        },
    },
};
</script>