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
          <a href="/kupi_prodaj" class="razmakni"><img class="ikone" src="assets/kupiprodaj_.png"><i class="fa"></i><span class="tekst_ikone">Kupi/Prodaj</span></a>
          <a href="/recenzije" class="razmakni"><img class="ikone" src="assets/recenzije_.png"><i class="fa"></i><span class="tekst_ikone">Recenzije</span></a>
          <a href="/tips_tricks" class="razmakni"><img class="ikone" src="assets/tips&tricks_.png"><i class="fa"></i><span class="tekst_ikone">Tips&Tricks</span></a>
          <a href="/onama" class="razmakni activee"><img class="ikone" src="assets/onama_.png"><i class="fa "></i><span class="tekst_ikone">O nama</span></a>
          <a href="/profil" class="razmakni"><img class="ikone" src="assets/profil_.png"><i class="fa"></i><span class="tekst_ikone">Profil</span></a>
		  <a href="/odjava" class="razmakni desno"><img class="ikone" src="assets/profil_.png"><i class="fa"></i><span class="tekst_ikone">Odjava</span></a>		
      </div>


      </div>
    

  </nav>
    </div>
	
	<h1 class="naslov">Što je CafeTell?</h1>
	<p class="onama1">Cafetell, aplikacija namijenjena za vlasnike kafića koja je osnovana 2020. godine od 
		 strane skupine studenata Fakulteta Informatike u Puli.
		 Služi za kupnju/prodaju određenih proizvoda, recenzija usluga i proizvoda s kojima se susreću 
		 tokom poslovanja te za dijeljenje savjeta za bolju učinkovitost i rada u kafiću. </p>
	<h1 class="naslov2">Naš tim</h1>
	<div class="tim">
		<p class ="onama2"> Mi smo tim studenata koji pohađa preddiplomski studij 
		Faukllteta Informatike u Puli, te je naš cilj bila izrada aplikacije koja
		se naziva Cafetell. Svaka osoba u našem timu također je sudionik u svim ostalim
		aspektima rada na ovoj stranici. 
        Ovdje u aplikaciji Cafetell naš tim usredotočen je na dvije stvari: vrstu posla
        koju radimo te projekte na kojima radimo. <br> <br>
        Zašto smo baš mi dobar tim?<br>
        Zato jer su potrebne različite vještine za postizanje uspjeha te pozitivno 
        okruženje što se jako dobro odrazilo na naš tim i uspjeh. </p>
		
	
	<div class="mi">	
	    <img class="lu" src="/assets/lu.jpg">
		<img class="jan" src="/assets/jan.jpg"> 
		<img class="barb" src="/assets/barb.jpg">
	</div>
	</div>
  </div>
	
   </div>


</template>



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
    position:relative;
    margin-left: -12.5%;
    margin-right: -12.5%;
  
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
/*.navbar .navbar-toggle:focus, .navbar .navbar-toggle:hover {
	
}*/
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
  height:100%;
  position:absolute;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.krem {
    background-color:#f0ead6;
    width: 80%;
    height: 100%;
    position: absolute;
    margin-left:10%;
}
.activee{
	color: #A43323;
}

.naslov {
font-size: 50px;
margin-right: 68%;
margin-top: 4%;
font-family: 'Playfair Display', serif;
color:rgba(0, 0, 0, 0.733);

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

.naslov2 {
font-size: 50px;
margin-right: 82%;
margin-top: 3%;
font-family: 'Playfair Display', serif;
color:rgba(0, 0, 0, 0.733);	
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
height: 235px;
width:44%;
margin-right: 10%;
padding:2px;
border:1px;
}

.jan {
height: 235px;
width:44%;
padding:2px;
border:1px;
}

.barb { 
height: 170px;
display: block;
width:66%;
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
	position:fixed;
}
</style>