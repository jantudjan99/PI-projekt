<template>
    <div class="pokusaj">
      <div class="proba">
    <div class="hero-image2">
    </div>
    </div>
    <div class="tekst2">
    <h1 class="text-center mb-5" >Registracija</h1>
     <form>
       <div class="kontejner">
       <div class="form-group">
          <label class="forma" for="e-mail">E-mail</label> <br><br>
          <input v-model="email" type="email" class="form-control" id="emailfield" aria-describedby=""  ><br> 
        </div>
        <br> 
       <div class="form-group">
          <label class="forma" for="passwordField">Lozinka</label> <br><br>
          <input v-model="lozinka" type="password" class="form-control" id="passwordField" ><br>
       </div> <br>
       
       <div class="form-group">
          <label class="forma" for="korisnicko_ime">Korisničko ime</label> <br><br>
          <input v-model="korisnicko_ime" type="korisnicko_ime" class="form-control" id="userfield" aria-describedby="s"  ><br>
        </div> <br>
       <div class="form-group">
          <label class="forma" for="ime_objekta">Ime objekta</label> <br><br>
          <input v-model="ime_objekta" type="ime_objekta" class="form-control" id="objectfields" aria-describedby=""  ><br> 
        </div> <br>
        <div class="form-group">
          <label class="forma" for="lokacija">Lokacija</label> <br><br>
          <input v-model="lokacija" type="text" class="form-control" id="lokacija" aria-describedby=""><br>
        </div> <br> 
        <div class="form-group">
          <label class="forma" for="kontakt">Kontakt</label> <br><br>
          <input v-model="kontakt" type="text" class="form-control" id="kontakt" aria-describedby=""><br>
        </div> <br> 
        <div class="form-group">
        <a> <button class="registracija" @click="registracija();registracijaForma()" type="button">Registriraj se</button> </a>
        
      </div>
      </div> 
      </form>
       <a href="/prijava"><h5 class="NR">Već ste registrirani?</h5></a>
      </div>
      </div>
</template>

<script>
import {firebase} from '@/firebase';
import { db } from '@/firebase';
import store from '@/store';

export default {
  data: function () {
    return {
      store,
      korisnicko_ime:'',
      email: '',
      lozinka: '',
      ime_objekta: '',
      lokacija: '',
      kontakt: '',
    }
  },

  methods: {
    registracija() {
        
          firebase 
            .auth()
            .createUserWithEmailAndPassword(this.email, this.lozinka)
            .then(
            function() {
             console.log('Uspješna registracija'); 
             
             
            })
            .catch(function(error) {
              console.error("Došlo je do greške", error) 
               
            });
            
            console.log('Nastavak'); 
            this.$router.replace({ name: 'pocetna'});
            
        },
    registracijaForma () {
      
      
        db.collection("user").add({
          korisnicko_ime: this.korisnicko_ime,
          email: this.email,
          lozinka: this.lozinka,
          lokacija: this.lokacija,
          ime_objekta: this.ime_objekta,
          kontakt: this.kontakt,
        })
        .then((doc) => {
              console.log("Spremljeno", doc)
          })
        .catch(function(error){
        console.error('Došlo je do greške',error);
      });
        },
    },
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

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}

</style>

