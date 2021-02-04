<template>
<div class="onama">
  <div class="krem">
	  <div class="navigacija">
      <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
        <img src="assets/logo.png" class="logo">  		
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">		
          <div class="navbar-nav">
              <a href="/pocetna" class="razmakni"><img class="ikone" src="assets/pocetna_.png"><i class="fa"></i><span class="tekst_ikone">Početna</span></a>
              <a href="/kupiprodaj" class="razmakni"><img class="ikone" src="assets/kupiprodaj.png"><i class="fa"></i><span class="tekst_ikone">Kupi/Prodaj</span></a>
              <a href="/recenzije" class="razmakni"><img class="ikone" src="assets/recenzije_.png"><i class="fa"></i><span class="tekst_ikone">Recenzije</span></a>
              <a href="/tips_tricks" class="razmakni"><img class="ikone" src="assets/tips&tricks_.png"><i class="fa"></i><span class="tekst_ikone">Tips&Tricks</span></a>
              <a href ="/onama" class="razmakni" v-class="" ><img class="ikone" src="assets/onama_.png"><i class="fa "></i><span class="tekst_ikone activee">O nama</span></a>
              <a href="/profil" class="razmakni"><img class="ikone" src="assets/profil_.png"><i class="fa"></i><span class="tekst_ikone">{{store.korisnickoIme}}</span></a>
              <a href="#" @click.prevent="odjava()" class="razmakni desno"><img class="ikone" src="assets/odjava.png"><i class="fa"></i><span class="tekst_ikone">Odjava</span></a>
          </div>
        </div> 
      </nav>
    </div>
    <div class="sakrij">
    <h1 class="naslov">Što je CafeTell?</h1>
    <p class="onama1">Cafetell, aplikacija namijenjena za vlasnike kafića koja je osnovana 2020. godine od 
      strane skupine studenata Fakulteta Informatike u Puli.
      U Cafetell-u, naši korisnici, mogu kupovati ili nabavljati rabljene predmete iz kafića, davati savjete ili dijeliti trikove
      koje su stekli kroz svoje godine poslovanja. Nakraju, omogućujemo i recenziranje različitih proizvoda i usluga s kojima se vlasnici susreću,
      te na taj način mogu upozoriti ostale na loše usluge i proizvode ili, suprotno, pohvaliti te predložiti korisne informacije o istima.  
    </p>

    <h1 class="naslov">Naš tim</h1>
    <div class="tim">
      <p class ="onama2"> Mi smo tim studenata koji pohađa preddiplomski studij 
      Faukllteta Informatike u Puli, te je naš cilj bila izrada aplikacije koja
      se naziva Cafetell. Svaka osoba u našem timu također je sudionik u svim ostalim
      aspektima rada na ovoj stranici. 
      Ovdje u aplikaciji Cafetell naš tim usredotočen je na dvije stvari: vrstu posla
      koju radimo te projekte na kojima radimo. <br> <br>
      <span>Zašto smo baš mi dobar tim?</span><br>
      Zato jer su potrebne različite vještine za postizanje uspjeha te pozitivno 
      okruženje što se jako dobro odrazilo na naš tim i uspjeh. </p>

    </div>

	<div class="container mt-100 mt-60">
      <div class="row">

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 kutija">
              <div class="mt-4 pt-2">
                  <div class="team position-relative d-block text-center">
                      <div class="image position-relative d-block overflow-hidden">
                          <img src="/assets/barb.jpg" class="img-fluid rounded barb" alt="">
                          <div class="overlay rounded bg-dark"></div>
                      </div>
                      <div class="content py-2 member-position bg-boja border-bottom overflow-hidden rounded d-inline-block">
                          <h4 class="title mb-0">Barbara</h4>
                      </div>
                  </div>
              </div>
        
          </div>

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 kutija">
              <div class="mt-4 pt-2">
                  <div class="team position-relative d-block text-center">
                      <div class="image position-relative d-block overflow-hidden">
                          <img src="/assets/lu.jpg" class="img-fluid rounded lu" alt="">
                          <div class="overlay rounded bg-dark"></div>
                      </div>
                      <div class="content py-2 member-position bg-boja border-bottom overflow-hidden rounded d-inline-block">
                          <h4 class="title mb-0">Leonarda</h4>
                      </div>
                  </div>
              </div>
          </div>

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 kutija">
              <div class="mt-4 pt-2">
                  <div class="team position-relative d-block text-center">
                      <div class="image position-relative d-block overflow-hidden">
                          <img src="/assets/jan.jpg" class="img-fluid rounded jan" alt="">
                          <div class="overlay rounded bg-dark"></div>
                      </div>
                      <div class="content py-2 member-position bg-boja border-bottom overflow-hidden rounded d-inline-block">
                          <h4 class="title mb-0">Jan</h4>
                      </div>
                  </div>
              </div>
          </div>	
      </div>
		
	</div><br><br>
	</div>
  </div>
	
</div>


</template>

<script>
 import store from '@/store'; 
 import { firebase } from '@/firebase';
 import router from '@/router';

  export default {
  name:'app',
  data () {
    return {
      store,
   };
  },
  methods: {
    odjava() {
      firebase.auth().signOut().then(() =>{
		this.$router.push({ name: 'prijava' })
	  })
    },
  },
};

</script>

<style>

.navbar {
    color: #fff;
    background: rgba(1, 1, 1, 0.699) !important;
    opacity:100%;
    padding: 5px 16px;
    border-radius: 0;
    border: none;
    box-shadow: 0 0 4px rgba(0,0,0,.1);
    font-family: 'Playfair Display', serif;
    margin-left: -10%;
    position: fixed;
    width:100%;
    z-index:99;
}

.navbar .ikone {
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin-right: 10px;
}

.navbar .navbar-brand {
    color: #efe5ff;
    padding-left: 0px;
    padding-right: 50px;
    font-size: 24px;
}

.navbar-nav{
	  padding-left:25px;
}

.navbar .navbar-brand:hover, .navbar .navbar-brand:focus {
    color: #fff;
    opacity:50%;
}

.navbar .navbar-brand i {
    font-size: 25px;
    margin-right: 5px;
}

.navbar .nav-item i {
	  font-size: 18px;
}

.navbar .nav-item span {
    position: relative;
    top: 3px;
}

.navbar .navbar-nav > a {
    color: #efe5ff;
    padding: 8px 15px;
    font-size: 18px;	
}

.navbar .navbar-nav > a:hover, .navbar .navbar-nav > a:focus {
    color: #A43323;
    text-decoration:none;
}

.navbar .navbar-nav > a > i {
    display: block;
    text-align: center;
}

.navbar .dropdown-item i {
    font-size: 16px;
    min-width: 22px;
}

.navbar .dropdown-item .material-icons {
    font-size: 21px;
    line-height: 16px;
    vertical-align: middle;
    margin-top: -2px;
}

.navbar .nav-item.open > a, .navbar .nav-item.open > a:hover, .navbar .nav-item.open > a:focus {
    color: #fff;
    background: none !important;
}

.navbar .dropdown-menu {
    border-radius: 1px;
    border-color: #e5e5e5;
    box-shadow: 0 2px 8px rgba(0,0,0,.05);
}

.navbar .dropdown-menu a {
    color: #777 !important;
    padding: 8px 20px;
    line-height: normal;
    font-size: 15px;
}

.navbar .dropdown-menu a:hover, .navbar .dropdown-menu a:focus {
	  color: #333 !important;
}

.navbar .navbar-nav .active a, .navbar .navbar-nav .active a:hover, .navbar .navbar-nav .active a:focus {
    color: #fff;
    text-shadow: 0 0 4px rgba(255,255,255,0.2);
    text-decoration: none;
}

.navbar .navbar-nav .user-action {
    padding: 9px 15px;
    font-size: 15px;
}

.navbar .navbar-toggle {
	border-color: #fff;
}
.navbar .navbar-toggle .icon-bar {
	background: #fff;
}

.navbar .navbar-nav .open .dropdown-menu {
	background: #faf7fd;
	border-radius: 1px;
	border-color: #faf7fd;
	box-shadow: 0 2px 8px rgba(0,0,0,.05);
}
.navbar .divider {
	background-color: #e9ecef !important;
}
@media (min-width: 1200px){
	.form-inline .input-group {
		width: 350px;
		margin-left: 30px;
	}
}
@media (max-width: 1199px){
	.navbar .navbar-nav > a > i {
		display: inline-block;			
		text-align: left;
		min-width: 30px;
		position: relative;
		top: 4px;
	}
	.navbar .navbar-collapse {
		border: none;
		box-shadow: none;
		padding: 0;
	}
	.navbar .navbar-form {
		border: none;			
		display: block;
		margin: 10px 0;
		padding: 0;
	}
	.navbar .navbar-nav {
		margin: 8px 0;
	}
	.navbar .navbar-toggle {
		margin-right: 0;
	}
	.input-group {
		width: 100%;
  }
}

.razmakni{
  
  display:inline-flex;
  margin-left:5px;
}

.ikone{
  display: inline-block;
}

.logo{
	border-radius: 50%;
	width: 120px;
	height: 45px;
	margin-right: 10px;
}
.tekst_ikone{
	display:inline-block;
	margin-right:10px;
	margin-top:8px;
}
.onama {
  background-color:white;
  background-size:cover;
  background-repeat: no-repeat;
  min-width:100%;
  min-height:100%;
  position:absolute;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.krem {
  background-color:white;
  width: 80%;
  min-height: 100%;
  position: absolute;
  margin-left:10%;
}

.activee{
	color: #A43323;
}

.naslov {
  font-size: 40px;
  margin-left:2%;
  margin-top: 8%;
  font-family: 'Playfair Display', serif;
  color:#c73500a6;
}

.onama1 {
  font-size: 20px;
  color:rgba(0, 0, 0, 0.733);
  margin-top: 3%;
  margin-left: 2%;
  margin-right: 2%;
  text-align: left;
  font-family:'Playfair Display', serif ;
}

.onama2 {
  font-size: 20px;
  color:rgba(0, 0, 0, 0.733);
  margin-top: 3%;
  text-align: left;
  font-family:'Playfair Display', serif ;
  margin-left:2%;
}

.tim {
  display:flex;
  margin-right:20%;
  width:1000px;
  width:100%;
  margin-right:5%;
}

.lu {
  height: 180px;
  width:44%;
  margin-right: 10%;
  padding:2px;
  border:1px;
}

.jan {
  height: 180px;
  width:44%;
  padding:2px;
  border:1px;
}

.barb { 
  height: 180px;
  display: block;
  width:44%;
  padding:2px;
  margin:auto;
  border:1px;
}

.mi {
  position: relative;
  margin-right:1%;
}

.desno {
	right:0%;
	position:absolute;
}

.team-list img {
  width: 50%;
}

.team-list .content {
  width: 50%;
}

.team-list .content .follow {
  position: absolute;
  bottom: 24px;
}

.team-list:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}

.team, .team-list {
  -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
}

.team .content .title, .team-list .content .title {
  font-size: 18px;
}

.team .overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.team .member-position, .team .team-social {
  position: absolute;
  bottom: -35px;
  right: 0;
  left: 0;
  margin: auto 10%;
  z-index: 99;
}

.team .team-social {
  bottom: 40px;
  opacity: 0;
  -webkit-transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s;
}

.team:hover {
  -webkit-transform: translateY(-7px);
  transform: translateY(-7px);
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}

.team:hover .overlay {
  opacity: 0.6;
}

.team:hover .team-social {
  opacity: 1;
}

@media (max-width: 768px) {
  .team-list img,
  .team-list .content {
    width: 100%;
    float: none !important;
  }
  .team-list img .follow,
  .team-list .content .follow {
    position: absolute;
    bottom: 0;
  }
}

.list-inline-item:not(:last-child) {
  margin-right: 0px;
  margin-bottom: 0px;
}

.rounded {
  border-radius: 5px !important;
}

.social-icon.social li a {
  color: #adb5bd;
  border-color: #adb5bd;
}

.row{
  position:relative;
}

.bg-boja{
	position:absolute;
  background-color:#c73500a6;
  margin-top:10px;
}

.test{
	position:relative;
}

.sakrij{
  overflow:hidden;
}

</style>

