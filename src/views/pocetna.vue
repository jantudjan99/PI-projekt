<template>
	<div class="pocetna">
		<div class="navigacija">
		<nav class="navbar navbar-expand-xl navbar-dark bg-dark">
			<img src="assets/logo.png" class="logo">  		
			<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">		
			
			<div class="navbar-nav">
				<a href="/pocetna" class="razmakni"><img class="ikone" src="assets/pocetna_.png"><i class="fa"></i><span class="tekst_ikone activee">Početna</span></a>
				<a href="/kupiprodaj" class="razmakni"><img class="ikone" src="assets/kupiprodaj.png"><i class="fa"></i><span class="tekst_ikone">Kupi/Prodaj</span></a>
				<a href="/recenzije" class="razmakni"><img class="ikone" src="assets/recenzije_.png"><i class="fa"></i><span class="tekst_ikone">Recenzije</span></a>
				<a href="/tips_tricks" class="razmakni"><img class="ikone" src="assets/tips&tricks_.png"><i class="fa"></i><span class="tekst_ikone">Tips&Tricks</span></a>
				<a href="/onama" class="razmakni"><img class="ikone" src="assets/onama_.png"><i class="fa "></i><span class="tekst_ikone">O nama</span></a>
				<a href="/profil" class="razmakni"><img class="ikone" src="assets/profil_.png"><i class="fa"></i><span class="tekst_ikone">{{store.korisnickoIme}}</span></a>
				<a href="#" @click.prevent="odjava()" class="razmakni desno"><img class="ikone" src="assets/odjava.png"><i class="fa"></i><span class="tekst_ikone">Odjava</span></a>
			</div>
		
			</div>
		</nav>
		</div>
  
	</div>
</template>

<script>
 import store from '@/store'; 
 import { firebase } from '@/firebase';
 import router from '@/router';

  export default {
  
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
	name:'pocetna',
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
	flex-grow:1;
	
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
	color: #c73500a6;
	text-decoration:none;
}

.navbar .navbar-nav > a:active, .navbar .navbar-nav > a:active {
	color: #c73500a6;
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
  margin-left: 5px;
  display:inline-flex;
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

.pocetna {
  background-image: url("/assets/pozadina.jpg");
  background-size:cover;
  background-repeat: no-repeat;
  min-width:100%;
  height:100%;
  position:absolute;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

.activee{
	color: #c73500a6;
}

.desno {
	right:0%;
	position:absolute;
}
</style>