<template>
  
    <div>
    <div class="hero-image1">
    </div>
    <div class="tekst">
    <div>
    <h1 class="text-center1 mb-5" >Prijava</h1>
    </div>
     <form action="#" @submit.prevent="signin" id="form">
       <div class="kontejner">
       <div class="form-group">
          <label class="forma" for="email">Email</label> <br><br>
          <input v-model="email" type="text" class="form-control" id="name" aria-describedby="emailHelp"  ><br><br> 

       </div>
       <br>
       <div class="form-group">
          <label class="forma" for="passwordField">Lozinka</label> <br><br>
          <input v-model="lozinka" type="password" class="form-control" id="pass"><br><br>  
       </div> <br> 
       <div class="form-group">
       <button type="button" @click="login()" class="prijava" id="submit">Prijava</button>
       <br>
      <span id="Required"></span>
       
       <a href="/registracija" class="NR" to="/registracija"><h5>Niste registrirani?</h5></a>
       </div>
       </div>
       </form>
      </div>
       </div>

</template>
<script>

jQuery(document).ready(function($){
            $("#submit").click(function(){
                var name= $("#name").val();
                var pass = $("#pass").val();
                if(name == '' || pass == ''){
                    $("#Required").html("Polja su prazna!").css("color","red");
                }else if(name == "admin" && pass == "123"){
                     $("#form").html('<h4>User Login Successfully</h4><a href="">Back</a>').css('color','green');
                }else{
                     $("#error").html("User Are Not Valid");
                }
                return false;
            });
});


import { firebase } from '@/firebase';

export default {
  name:"prijava",
  data () {
    return {
      email: "",
      lozinka: "",
   }
  },

  methods: {
    login () {
      console.log('login..'+ this.email);
      console.log(this.$router);
      
      firebase.auth().signInWithEmailAndPassword(this.email, this.lozinka) .then( (result) => {
      console.log('Uspješna prijava', result);
      
      this.$router.replace({ name: 'pocetna'})

      })
      .catch(function (e) {
        console.error('Greška',e);
      });
    }
  }
}

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
  border-color: #c73500a6;
  box-shadow: 0 0 0 2px #c73500a6;
  caret-color: black;
}

button:focus {
  outline:0;
}

.forma {
font-size: 2em;
float:left;
color:#000000;
display:block;

}

.kontejner { 
  display:inline-block;
  width:50%;
  margin:auto;
 
}

.text-center1 {
font-size: 4em;
margin-top:10%;
color:black;
}

.prijava {
  padding: 12px 20px;
  font-size: 22px;
  border:none;
  background-color:#c73500a6;
  color:black;
  border-radius: 12px;
  font-weight: bold;
}

.hero-image1{
  background-image: url("/assets/novakava.jpg");
  width: 33%;
  position: fixed;
  left: 0px;
  min-height: 100%;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-repeat: no-repeat;
}


.form-group{
  display:inline-block;
  width:100%;
}

.tekst {
   width: 67%;
   position: absolute;
   right: 0px;
   height: 100%;
   font-family: 'Playfair Display', serif;
}



.text-center {
color:black;
border:none;
font-size:4em;
font-family: 'Playfair Display', serif;
}

.NR {
  color:black;
}
.NR:hover {
  color:black;
  text-decoration: underline;
}

@media (max-width: 480px) {
  .hero-image1 {
     display: none;
  }
}

</style>