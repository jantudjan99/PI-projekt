<template>
    <div>
    <img class="mutna" src="/assets/mutna.jpg/">
    <div class="okvir">

    <div class="logo12">
<img class="logo1" src="/assets/logo1.png">
<img class="gif" src="/assets/kava.gif"> 
    </div> 

    <div class="tipke">
<a href="/prijava" class="prijava1" id="submit">Prijava </a> 
<a href="/registracija" class="registracija1" id="submit">Registracija </a> 
    </div>

    </div>
    </div>
</template>

<style>

.prijava1 {
    padding: 8px 140px;
    font-size: 35px;
    border:2px solid #e44b13b9;
    background-color:rgba(255, 255, 255, 0.459);
    color:#c94313;
    border-radius:12px;
    font-family: 'Playfair Display', serif;
    margin:auto;
    width: 4;
}

.prijava1:hover {
    text-decoration: none;
    color:black;
    transition: 2s;
}

.registracija1 {
    padding: 6.5px 100px;
    font-size: 35px;
    border:2px solid   #e44b13b9;
    background-color:rgba(255, 255, 255, 0.459);
    color:#c94313;
    border-radius: 12px;
    font-family: 'Playfair Display', serif;
    display: block;
    margin:auto;
    width: 41%;
    margin-top:30px;
}

.registracija1:hover {
    text-decoration: none;
    color: black;
    transition: 2s;
}

.gif {
    margin-top: 10px;
    height:10em;
}

.logo1 {
    margin-top:10%;

}

.tipke {
 margin-top: 30px;
}

.okvir {
    background-color:#ece8e84d;
    background-repeat: no-repeat;
    margin: auto;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    left:25%;
    width:50%;
    padding-bottom:80px;
    border-radius: 30px;

}

.mutna {
    background-size:cover;
    background-repeat: no-repeat;
    max-height:100%;
    position:fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: hidden;
    margin-left: -45%;
    max-width: 100%;
}

@media (max-width: 1199px) {
  .gif {
     display: none;
  }
}

</style>