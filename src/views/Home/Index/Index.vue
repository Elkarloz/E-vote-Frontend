<template>
  <div>
    <header class="default-header" id="" style="background: #1D7157;">
      <div style="padding-right: 15px;">
        <div class="header-wrap">
          <div class="header-top d-flex justify-content-between align-items-center">
            <div class="logo">
              <a href="#home">
                <img src="img/logo.png" alt>
              </a>
            </div>
            <div class="main-menubar d-flex align-items-center">
              <nav class="hide nav">
                <a href="/">Home</a><!--Index -->
                <a href="/login">Login</a>
                <a href="/about" v-show="jorVot.ProVotCodigo!=''">Consultar documento</a>
				        <a href="/Tarjeton" v-show="jorVot.ProVotCodigo!=''">Jornada votacion activa</a>
              </nav>
              <div class="menu-bar">
                <span class="lnr lnr-menu"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- End Header Area -->
    <!-- start banner Area -->
    <section class="banner-area relative" id="home">
      <router-view></router-view>
    </section>
  </div>
</template>

<style>
  #Home {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
  }

  .nav a{
    color: #ffffff;
  }

  #nav{
  -webkit-box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,0.61);
  -moz-box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,0.61);
  box-shadow: inset 0px 0px 5px 2px rgba(0,0,0,0.61);

  }

  .menu-bar span{
    color: white;
  }

</style>

<script>
window.jQuery = require("jquery");
window.$ = window.jQuery = require("jquery");
import a from "../../../content/plugins/c3/prueba/prueba.css";
import b from "../../../content/plugins/c3/prueba/jquery.sticky.js";

export default {
  data() {
    return {
        //ruta: "http://10.224.0.250:4000/api/index", //Ruta de la API a la cuan se envian las peticiones
      	ruta: "http://localhost:4000/api/index", //Ruta de la API a la cuan se envian las peticiones
		    jorVot: {ProVotCodigo: ''}
    };
  },
  created(){
	  this.jorVotacion();
  },
  methods:{
	  jorVotacion(){
	  var f = new Date();
	  var fecha=(f.getFullYear() + "-" + (f.getMonth()+1) + "-" + f.getDate());
      fetch(this.ruta + `/${fecha}`, {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          Accept: "application/json",
          "Content-type": "application/json",
          RolSeleccionado: localStorage.getItem("sessionrol")
        }
      })
      
		.then(res => res.json())
		.then(res =>{
			this.jorVot.ProVotCodigo = res
		})
        .catch(e => {
          console.log(e);
		});

    }  
    
    }
  }
  

</script>
