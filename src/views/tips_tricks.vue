<template>
<div>
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
          <a href="/tips_tricks" class="razmakni"><img class="ikone" src="assets/tips&tricks_.png"><i class="fa"></i><span class="tekst_ikone activee">Tips&Tricks</span></a>
          <a href ="/onama" class="razmakni" ><img class="ikone" src="assets/onama_.png"><i class="fa "></i><span class="tekst_ikone">O nama</span></a>
          <a href="/profil" class="razmakni"><img class="ikone" src="assets/profil_.png"><i class="fa"></i><span class="tekst_ikone">{{store.korisnickoIme}}</span></a>
		  <a href="#" @click.prevent="odjava()" class="razmakni desno"><img class="ikone" src="assets/odjava.png"><i class="fa"></i><span class="tekst_ikone">Odjava</span></a>
      </div>
      </div>
  </nav>
  </div>

<div class="objavabtn">
 <input type="text" class="objava" placeholder="Dodaj svoj savjet..." id="savjet"  data-toggle="modal" data-target="#ModalLoginForm" >
 <button type="button" class="btn1 btn-primary btn-lg" data-toggle="modal" data-target="#ModalLoginForm" > Objavi</button>
</div>

<div id="ModalLoginForm" class="modal fade">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title">Dodavanje savjeta</h1><br>
            </div>
            <div class="modal-body">
                <form @submit.prevent="savjeti()" role="form" method="noviSavjeti()" action="">
                    <input type="hidden" name="_token" value="">
                    <p class="korisnik">{{store.korisnickoIme}}</p>
                    <div class="form-group">
                        <label for="savjeti" class="control-label-naslov">Naslov</label>
                        <div>
                            <input v-model="noviNaslovSlike" type="text" class="form-control input-lg" name="noviNaslovslike" id="NaslovSlike" value="">
                        </div>
                    </div> <br>
					<div class="form-group">
                        <label for="savjeti" class="control-label">Savjet ili trik:</label>
                        <div>
                            <input v-model="noviOpisSlike" type="text" class="form-control input-lg vecePolje"  name="noviOpisSlike" id="opisSlike" value="">
                        </div>
					</div>
                    
                    <div class="dodavanje-slike">
                        <input type="file" id="dodajsliku" name="fileid" multiple>
                        <croppa :width="400" :height="400" placeholder="Učitaj sliku" v-model="slikaReference"></croppa>
                    </div>
                    
                    
                    <div class="form-group">
                        <div><button type="submit" class="btn">
                                Objavi
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<section id="blog">
      <div class="container">  
                
        <div class="row">
                
                <div v-for="card in cards" :key="card.id" :info="card" class=" col-lg-5 col-lg-7 col-xs-12" cards-aos="fade-right">
                   <div class=" col-lg-12"> 
                    <img class="card-img-top" :src="card.url" />
					  </div>
                      <div class="">{{card.imeObjekta}} </div>
					  <div class="naslov col-lg-12">{{card.NaslovSlike}} </div>
					  
                     <div class="opis col-lg-12">{{card.opisSlike}}  </div>
                     
                </div>
        </div>     
        </div>
</section>
</div>
</template>


<script>
import store from '@/store'; 
import { firebase } from '@/firebase';
import { db, storage } from '@/firebase';
import moment from 'moment';


export default {
  props: ["info"],
  name:"tips_tricks",
    computed: {
      proba1() {
            return moment(this.data.time).fromNow();
       },
  },

  data: function() {
    return {
        store,
        cards: [],
        email: "",
        lozinka: "",
		noviOpisSlike: "",
		noviNaslovSlike:"",
        slikaReference: null,
        proba: "",
        url: "",
        };
    },


    mounted() {
        this.noviSavjeti();
    },

    methods: {

        odjava() {
            firebase.auth().signOut().then(() =>{
		    this.$router.push({ name: 'prijava' })
	  })
    },
 


        noviSavjeti() {
            console.log("firebase dohvat");
            db.collection("savjeti")
            .get()
            .then((query) => {
                query.forEach((doc) => {
                    const data = doc.data();
                    console.log(data);
                   
                    this.cards.push({
                        id: doc.id,
                        time: data.posted_at, 
                        url: data.Url,
						opisSlike: data.Opis_slike,
                        NaslovSlike:data.NaslovSlike,
                        imeObjekta:data.imeObjekta,
                    })
                });
            });
        },

        savjeti() {
            const Opis_slike = this.noviOpisSlike;
			const url = this.url;
			const NaslovSlike = this.noviNaslovSlike;

            this.slikaReference.generateBlob(blobData => { 
            console.log(blobData);
            let nazivSlike = "savjeti/" + store.currentUser + "/" +  Date.now() + ".png";
            
            storage
                .ref(nazivSlike)
                .put(blobData)
                .then(result => {

                result.ref.getDownloadURL().then((url) => {
                console.log("Javni link", url);

            db.collection('savjeti')
                .add({

                    Url: url,
					Opis_slike: Opis_slike,
					NaslovSlike: NaslovSlike,
                    posted_at: Date.now(),
                    imeObjekta:store.ime_objekta,
                    
                   
                })
                .then((doc) => {
                    console.log('Spremljeno', doc);
					this.noviOpisSlike='';
					this.noviNaslovSlike='';
                    this.slikaReference = null;
                    this.url = " ";
             
                })

                .catch((e)=> {
                console.error(e);
                });

                })
                .catch(e => {
                console.error(e);
            });

            })
            .catch(e => {
               console.error(e)
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

.activee{
	color: #c73500a6;
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
.desno {
	right:0%;
	position:absolute;
}

.objava {
    
    font-size:20px;
    font-family:'Playfair Display', serif ;
    padding-bottom:7.5px;
    margin-top:100px;
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
    margin-left: 0.2%;
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

.card-body2 {
    font-family: 'Playfair Display', serif;
    font-size: 15px;
    text-align: center;
}

.card-body3 {
    font-size:10px;
    margin-left: 4%;
}

.card-img-top{
    z-index:-1;
	width: 400px;
	height: 400px;
}

.col-lg-7 {
    padding-top: 15px;  
	
}

.row {
    background-color: rgba(0,0,0,.03);
    margin-top: 3%;
    display: inline-block;
	text-align: center;
}

.col-xs-12 {
		display: inline-block;
}


.dodavanje-slike {
    margin-left: 7%;
}

.naslov {
	font-size:26px;
	color:rgba(20, 20, 20, 0.877);
	font-family: 'Playfair Display', serif;
}

.opis {
	font-size:19px;
	color:rgba(20, 20, 20, 0.877);
	font-family: 'Playfair Display', serif;

}

.control-label-naslov {
    font-family:'Playfair Display', serif;
    margin-left: 0.2%;
}

.korisnik {
    font-family:'Playfair Display', serif;
    font-size: 25px;
    font-weight: bold;
}

</style>