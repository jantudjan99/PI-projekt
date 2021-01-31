<template>
    <div>

    <div class="navigacija">
        <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
            <img src="assets/logo.png" class="logo">  		
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- Collection of nav links, forms, and other content for toggling -->
            <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">		
            <div class="navbar-nav">
                <a href="/pocetna" class="razmakni"><img class="ikone" src="assets/pocetna_.png"><i class="fa"></i><span class="tekst_ikone">Početna</span></a>
                <a href="/kupiprodaj" class="razmakni"><img class="ikone" src="assets/kupiprodaj.png"><i class="fa"></i><span class="tekst_ikone">Kupi/Prodaj</span></a>
                <a href="/recenzije" class="razmakni"><img class="ikone" src="assets/recenzije_.png"><i class="fa"></i><span class="tekst_ikone">Recenzije</span></a>
                <a href="/tips_tricks" class="razmakni"><img class="ikone" src="assets/tips&tricks_.png"><i class="fa"></i><span class="tekst_ikone">Tips&Tricks</span></a>
                <a href="/onama" class="razmakni"><img class="ikone" src="assets/onama_.png"><i class="fa "></i><span class="tekst_ikone">O nama</span></a>
                <a href="/profil" class="razmakni"><img class="ikone" src="assets/profil_.png"><i class="fa"></i><span class="tekst_ikone activee">Profil</span></a>
                <a href="#" @click.prevent="odjava()" class="razmakni desno"><img class="ikone" src="assets/odjava.png"><i class="fa"></i><span class="tekst_ikone">Odjava</span></a>
            </div>
        </div>
        </nav>
    </div>

<div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Promijeni profilnu sliku
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8"> 
                        <form @submit.prevent>
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Korisničko ime:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p></p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Ime objekta:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Caffe Bar Fino Vino</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>finovino@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Kontakt:</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>123 456 7890</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Lokacija:</label>
                                            </div>
                                            <div class="col-md-6">
                                            <p>Varaždin</p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                
                                </form>
                        </div>
                    </div>
                    </form>
                </div> 
        </div>
</template>

<script>
import store from '@/store'; 
import { firebase } from '@/firebase';
import { db, storage } from '@/firebase';
import moment from 'moment';
export default {
  props: ["info"],
  name:"profil",
    computed: {
      proba1() {
            return moment(this.data.time).fromNow();
       },
  },
  data: function() {
    
      
    return {
        cards: [],
        email: "",
        lozinka: "",
        noviOpisSlike: "",
        slikaReference: null,
        proba: "",
        url: "",
        rating: null, //novo
        
        };
    },
methods:{
    dohvacanjeProfila()
        {
            console.log("firebase dohvat");
            db.collection("user")
            .get()
            .then((query) => {
                query.forEach((doc) => {
                    const data = doc.data();
                    console.log(data);
                   
                    this.cards.push({
                        korisnicko_ime: this.korisnicko_ime, //novo
                        //lijeva strana -> vue
                        //desna strana -> firebase
      
                    })

                });
            });
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
    position: fixed;
    width:100%;
    margin-bottom:50px;
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

.tekst_ikone{
	display:inline-block;
	margin-right:10px;
	margin-top:8px;
}

.activee{
	color: #c73500a6;
}
.desno {
	right:0%;
	position:absolute;
}
.logo{
	
	border-radius: 50%;
	width: 120px;
	height: 45px;
	margin-right: 10px;
}


.emp-profile{
    padding: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
    margin-top: 10%;
    margin-left: -150px;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}

.profile-rating {
    font-family:'Playfair Display', serif ;
    font:20px bolder;
}

.profile-head h5{
    color:black;
}

.profile-head h6{
    color: #0062cc;
}

.profile-head {
    margin-top: 8%;
    font-family:'Playfair Display', serif ;
}

.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}

.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}

.profile-work{
    padding: 14%;
    margin-top: -15%;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #2b3138;
}

.tab-content {
    font-family:'Playfair Display', serif ;
    font-size: 20px;
    margin-left: -80px;
    margin-top: 2%;
}
</style>