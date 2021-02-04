<template>
<div>
<div class="hero-image1"></div>
  <div class="tekst"> 
    <h1 class="text-center1 mb-5" >Prijava</h1>
      <form action="#" @submit.prevent="signin" id="form">
        <div class="kontejner">
          <div class="form-group">
              <label class="forma" for="email">Email</label> <br><br>
              <input v-model="email" type="text" class="form-control" id="name" aria-describedby="emailHelp" ><br><br> 
          </div><br> 

       <div class="form-group">
          <label class="forma" for="passwordField">Lozinka</label> 
          <br><br>
          <div class="skup">
            <input v-model="lozinka" type="password" class="form-control"  id="password"> 
          </div>
      </div>
        </div> <br> <br> <br>
        <div class="form-group">
          <a> <button type="button" @click="login()" class="prijava" id="submit">Prijava</button > </a><br>
          <span id="Required"></span>
          <a href="/registracija" class="NR" to="/registracija"><h5>Niste registrirani?</h5></a>
        </div>
    </form>
  </div>
</div>
</template>
<script>

jQuery(document).ready(function($){
            $("#submit").click(function(){
                var name= $("#name").val();
                var password = $("#password").val();
                if(name == '' || password == ''){
                    $("#Required").html("Unesite sve podatke!").css("color","red");
                }else if(name == "admin" && password == "123"){
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
};

(($) => {

  class Toggle {

    constructor(element, options) {

      this.defaults = {
        icon: 'fa-eye'
      };

      this.options = this.assignOptions(options);

      this.$element = element;
      this.$button = $(`<button class="btn-toggle-pass"><i class="fa ${this.options.icon}"></i></button>`);

      this.init();
    };

    assignOptions(options) {

      return $.extend({}, this.defaults, options);
    }

    init() {

      this._appendButton();
      this.bindEvents();
    }

    _appendButton() {
      this.$element.after(this.$button);
    }

    bindEvents() {
      this.$button.on('click touchstart', this.handleClick.bind(this));
    }

    handleClick() {

      let type = this.$element.attr('type');
      type = type === 'password' ? 'text' : 'password';
      this.$element.attr('type', type);
      this.$button.toggleClass('active');
    }
  }

  $.fn.togglePassword = function (options) {
      return this.each(function () {
      new Toggle($(this), options);
    });
  }

})(jQuery);

$(document).ready(function() {
  $('#password').togglePassword();
  $('#password-custom').togglePassword({
  	'icon': 'fa-lock'
  });
}) 

</script> 

<style>
.form-control  {
  border:none;
  font-size:1.4em;
  border-bottom:1px solid;
  display:block;
  width:100%;
  border-radius:0px;
  border-color:black;
  position: relative;
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

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
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
  text-align:center;
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

:root {
  --info-color: #da532aa1;
}

.btn-toggle-pass {
  position: absolute;
  background: transparent;
  border:none;
  right:0px;
  top:10px;
}

.btn-toggle-pass.active {
  color: var(--info-color);
}

#password {
  position:absolute;
  width:100%;
} 

#form{
  width:100%;
}

.skup{
  position:relative;
  width:100%;
}

</style>