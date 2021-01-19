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
            <a href="/pocetna" class="razmakni activee"><img class="ikone" src="assets/pocetna_.png"><i class="fa"></i><span class="tekst_ikone">Početna</span></a>
            <a href="/kupiprodaj" class="razmakni"><img class="ikone" src="assets/kupiprodaj.png"><i class="fa"></i><span class="tekst_ikone">Kupi/Prodaj</span></a>
            <a href="/recenzije" class="razmakni"><img class="ikone" src="assets/recenzije_.png"><i class="fa"></i><span class="tekst_ikone">Recenzije</span></a>
            <a href="/tips_tricks" class="razmakni"><img class="ikone" src="assets/tips&tricks_.png"><i class="fa"></i><span class="tekst_ikone">Tips&Tricks</span></a>
            <a href="/onama" class="razmakni"><img class="ikone" src="assets/onama_.png"><i class="fa "></i><span class="tekst_ikone">O nama</span></a>
            <a href="/profil" class="razmakni"><img class="ikone" src="assets/profil_.png"><i class="fa"></i><span class="tekst_ikone">Profil</span></a>
            <a href="#" @click.prevent="odjava()" class="razmakni desno"><img class="ikone" src="assets/odjava.png"><i class="fa"></i><span class="tekst_ikone">Odjava</span></a>
        </div>
      </div> 
    </nav>
 </div>
 

<div class="objavabtn">
 <input type="text" class="objava" placeholder="Dodaj objavu..." id="objava"  data-toggle="modal" data-target="#ModalLoginForm" >
 <button type="button" class="btn1 btn-primary btn-lg" data-toggle="modal" data-target="#ModalLoginForm" > Objavi</button>
</div>

<div id="ModalLoginForm" class="modal fade">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title">Dodavanje proizvoda</h1>
            </div>
            <div class="modal-body">
                <form @submit.prevent="objave()" role="form" method="novaObjava()" action="">
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <label for="imeLokacije" class="control-label">Lokacija</label>
                        <div>
                            <input v-model="novoImeLokacije" type="text" class="form-control input-lg" name="location" id="imeLokacije" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="kontakt" class="control-label">Kontakt</label>
                        <div>
                            <input v-model="noviKontakt" type="text" class="form-control input-lg" id="kontakt" name="contact">
                        </div>
                    </div>
                    <input type="hidden" name="_token" value="">
                    <div class="form-group">
                        <label class="control-label">Stanje</label>
                        <div>
                            <select class="form-control input-lg" name="stanje" value="" id="stanje">
                            <label for="stanje"></label>
                                <option value="-" id="-"> - </option>
                                <label for="novo"></label>
                                <option value="novo" id="novo"> novo </option>
                                <label for="rabljeno"></label>
                                <option value="rabljeno" id="rabljeno"> rabljeno </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="iznosCijene" class="control-label">Cijena</label>
                        <div>
                            <input v-model="novaCijena" type="text" class="form-control input-lg" id="iznosCijene" name="cijena" value="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="opisSlike" class="control-label">Kratak opis slike</label>
                        <div>
                            <input v-model="noviOpisSlike" type="text" class="form-control input-lg" id="opisSlike" name="opis">
                        </div>
                    </div>
                    
                        <div class="dodavanje-slike">
                            <label for="file-input">
                            <img src="assets/dodajsliku.png">
                        </label>
                        <input id="file-input" type="file">
                        </div>
                    
                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn">
                                Objavi
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
    
 <!--<form @submit.prevent="postNewImage" class="form-inline mb-5">
    <div class="form-group">
        <label for="imageUrl">Image URL</label>
     <input
         v-model="newImageUrl"
        type="text"
        class="form-control ml-2"
        placeholder="Enter the image URL"
        id="imageUrl"
        />
</div>
<div class="form-group">
<label for="imageDescription">Description</label>
    <input
    v-model="newImageDescription"
        type="text"
        class="form-control ml-2"
        placeholder="Enter the image description"
        id="imageDescription"
        />
</div>
<button type="submit" class="btn btn-primary ml-2">Post image</button>
</form> -->
 
    </div>
</template>

<script>
import store from '@/store'; 
import { firebase } from '@/firebase';
import { db } from '@/firebase';

function updateParent() {
    opener.document.parentForm.pf1.value = document.childForm.cf1.value;
    opener.document.parentForm.pf2.value = document.childForm.cf2.value;
    if (document.childForm.cf3[0].checked)
       opener.document.parentForm.pf3[0].checked = true;
    if (document.childForm.cf3[1].checked)
       opener.document.parentForm.pf3[1].checked = true;       
    self.close();
    return false;
}
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
	  console.log("****",user.email);
	  store.currentUser=user.email;
    } else {
	  console.log('**** Nema korisnika');
	  store.currentUser=null;
	  
	if (router.name !== "prijava") {
		router.push({ name:"prijava"})
	}
     }
  });
export default {
  name:"kupiprodaj",
  data: function() {
    return {
        email: "",
        lozinka: "",
        novoImeLokacije: "",
        noviKontakt: "",
        novaCijena: "",
        noviOpisSlike: "",
        
   }
  },
    methods: {
        objave(){
            const imeLokacije = this.novoImeLokacije;
            const kontakt = this.noviKontakt;
            const iznosCijene = this.novaCijena;
            const opisSlike = this.noviOpisSlike;
            const stanje = this.stanje = document.getElementById("stanje").value;
                
            db.collection('objave')
                .add({
                    
                    Lokacija: imeLokacije,
                    Kontakt: kontakt,
                    Stanje: stanje,
                    Cijena: iznosCijene,
                    Opis_slike: opisSlike,
                    posted_at: Date.now(),
                   
                })
                .then((doc) => {
                    console.log('Spremljeno', doc);
                    this.novoImeLokacije='';
                    this.noviKontakt='';
                    this.novaCijena='';
                    this.noviOpisSlike='';
                })
                .catch((e)=> {
                    console.error(e);
                });
        },
    },
}
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
.objava {
    
    font-size:20px;
    font-family:'Playfair Display', serif ;
    padding-bottom:7.5px;
    margin-top:70px;
    border: 1px solid;
}

.objava:focus{
    border: none;
}


.modal-header {
font-family:'Playfair Display', serif ;
margin-left:9%;

}

.control-label {
    float: left;
    margin-left: 1%;
    font-family:'Playfair Display', serif ;
}

.btn {
    font-family:'Playfair Display', serif ;
    background-color: #c73500a6;
    border:none;
    color:white;
}

.btn:hover {
    border:none;
    background-color:#ce623bd7 ;
    color:white;
}

.btn:active {
    border:none;
    color:#ce623bd7 ;
    color:white;

}

.btn1 {
 background-color:#ce623bd7 ;
 border:none;
 margin-left:2%;
 font-size: 14px;

}

.btn1:hover {
    border:none;
    background-color:#ce623bd7 ;
    color:white; 
}

.btn1:active {
    border:none;
    background-color:#ce623bd7 ;
    color:white;
}

.objavabtn{
    text-align:center;
}

.dodavanje-slike > input {
    display: none;
}

.dodavanje-slike img
{
    cursor: pointer;
    width:25px;
    height:25px;
}
</style>