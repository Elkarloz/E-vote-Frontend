<template>
  <div> 
    <div class="wrapper">
            <header class="header-top" header-theme="light">
                <div class="container-fluid">
                    <div class="d-flex justify-content-between">
                        <div class="top-menu d-flex align-items-center">
                  
                            <button type="button" class="btn-icon mobile-nav-toggle btn-dark d-lg-none " ><i class="ik ik-menu"></i></button>
                           
                           
                        </div>
                        <div class="top-menu d-flex align-items-center">
                             <span class="text"  style="font-size: 14px;">{{this.nombre}}</span>
                            <div class="dropdown">
                               
                                <a class="dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img class="avatar" src="../../../content/img/users/user2.jpg" alt=""></a> 
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                    <a class="dropdown-item" href="/login" @click="logout()"><i class="ik ik-power dropdown-icon"></i> Logout</a> 
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>

        <div class="page-wrap">
                <div class="app-sidebar colored">
                    <div class="sidebar-header">
                        <router-link class="header-brand" to="/dashboard">
                            <div class="logo-img">
                               <img src="../../Home/Index/Logo.svg" height="200" width="200"> 
                            </div>
                            
                        </router-link> 
                        
                        <button id="sidebarClose" class="nav-close"><i class="ik ik-x"></i></button>
                    </div>
                    
                    <div class="sidebar-content">
                        <div class="nav-container">
                            <nav id="main-menu-navigation" class="navigation-main">
                                 <div class="nav-item">
                                    <router-link to="#"><i class=""></i><span>
                                         <div class="form-group row">
                                                <label for="exampleInputUsername2" class="col-sm-2 col-form-label">Rol:</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control select2" v-model="rolSelector" >
                                                        <option v-for="(item, index) in roles" :key="index" :value= "item.RolNombre" >{{item.RolNombre}}</option>
                                                     </select>
                                                </div>
                                            </div>
                                        </span></router-link> 
                                </div>

                                <div class="nav-lavel">Menu</div>
                               <div v-if="rolSelector==='Administrador'" >
                                    {{cambio_rol()}}

                                <div class="nav-item has-sub">
                                    <router-link to="javascript:void(0)"><i class="ik ik-archive"></i><span>Procesos de votacion</span></router-link> 
                                    <div class="submenu-content">
                                       <router-link class="menu-item" id="item" to="/dashboard/procvotacion/Consultar">Consultar</router-link>
                                        <router-link class="menu-item" id="item" to="/dashboard/procvotacion/agregar">Agregar</router-link>
                                    </div>
                                </div>
                                <div class="nav-lavel"></div>
                               
                                <div class="nav-item has-sub">
                                    <router-link to="#"><i class="ik ik-user"></i><span>Votantes</span></router-link> 
                                    <div class="submenu-content">
                                       <router-link class="menu-item" id="item" to="/dashboard/votante/consultar">Consultar</router-link>
                                       <router-link class="menu-item" id="item" to="/dashboard/votante/agregar">Agregar</router-link>
                                       <router-link class="menu-item" id="item" to="/dashboard/votante/impor_archivo">Importar archivos</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <router-link to="#"><i class="ik ik-file-minus"></i><span>Aspirantes</span> </router-link> 
                                    <div class="submenu-content">
                                       <router-link class="menu-item" id="item" to="/dashboard/aspirante/consultar_inscrip">Consultar inscripciones</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <router-link to="#"><i class="ik ik-slack"></i><span>Candidatos</span></router-link> 
                                    <div class="submenu-content">
                                       <router-link class="menu-item" id="item" to="/dashboard/candidatos/consultar">Consultar</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <router-link to="#"><i class="ik ik-clipboard"></i><span>Reportes</span></router-link> 
                                    <div class="submenu-content">
                                       <router-link class="menu-item" id="item" to="/dashboard/reporte/votacion">Reporte votación</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                 
                                <div class="nav-item has-sub">
                                    <router-link to="#"><i class="ik ik-database"></i><span>Parametrizacion</span></router-link> 
                                    <div class="submenu-content">
                                       <router-link class="menu-item" id="item" to="/dashboard/parametro/program_form">Programa formación</router-link>
                                       <router-link class="menu-item" id="item" to="/dashboard/parametro/jornada">Jornada</router-link>
                                       <router-link class="menu-item" id="item" to="/dashboard/parametro/tipo_doc">Tipo documento</router-link>
                                    </div>
                                </div>
                                <div class="nav-lavel"></div>
                               </div>
                             
                               <div v-if="rolSelector==='Estudiante'" >
                                   {{cambio_rol()}}
                                <div class="nav-item has-sub">
                                    <router-link to="javascript:void(0)"><i class="ik ik-archive"></i><span>Procesos de votacion</span></router-link> 
                                    <div class="submenu-content">
                                       <router-link class="menu-item" id="item" to="/dashboard/procvotacion/Consultar">Consultar</router-link>
                                    </div>
                                </div>
                                <div class="nav-lavel"></div>
                                
                                <div class="nav-item has-sub">
                                    <router-link to="#"><i class="ik ik-user"></i><span>Votantes</span></router-link> 
                                    <div class="submenu-content">
                                        <router-link to="pages/ui/alerts.html" class="menu-item">Datos Personales</router-link> 
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <router-link to="#"><i class="ik ik-file-minus"></i><span>Aspirantes</span> </router-link> 
                                    <div class="submenu-content">
                                       <router-link class="menu-item" id="item" to="/dashboard/aspirante/Reg_Estudiante">Registrar inscripción</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <router-link to="#"><i class="ik ik-slack"></i><span>Candidatos</span></router-link> 
                                    <div class="submenu-content">
                                        <router-link to="/dashboard/candidatos/consultar" class="menu-item">Consultar</router-link> 
                                       <router-link class="menu-item" id="item" to="/dashboard/propuesta/consultar">Consultar propuestas</router-link>                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <router-link to="#"><i class="ik ik-clipboard"></i><span>Reportes</span></router-link> 
                                    <div class="submenu-content">
                                        <router-link to="/dashboard/reporte/votacion" class="menu-item">Reporte de votacion</router-link>
                                    </div>
                                </div>
                                <div class="nav-lavel"></div>
                               </div>
                               
                               <div v-if="rolSelector==='Aspirante'" >
                                   {{cambio_rol()}}

                                <div class="nav-item">
                                    <router-link to="/dashboard/aspirante/actualizar_inf"><i class="ik ik-edit"></i><span>Actualizar Informacion</span></router-link> 
                                </div>
                                <div class="nav-lavel"></div>
                                <div class="nav-item">
                                    <router-link to="/dashboard/aspirante/agregar_doc"><i class="ik ik-file-plus"></i><span>Agregar Documentacion</span></router-link> 
                                </div>
                                <div class="nav-lavel"></div>
                                <div class="nav-item">
                                    <router-link to="/dashboard/aspirante/eliminar_inscrip"><i class="ik ik-delete"></i><span>Eliminar Inscripcion</span></router-link> 
                                </div>
                                <div class="nav-lavel"></div>

                               </div>
                             
                                <div v-if="rolSelector==='Candidato'" >
                                   {{cambio_rol()}}

                                 <div class="nav-item">
                                    <router-link to="/dashboard/candidatos/actualizar"><i class="ik ik-edit"></i><span>Actualizar Informacion</span></router-link> 
                                </div>
                                <div class="nav-lavel"></div>
                                <div class="nav-item">
                                    <router-link to="/dashboard/candidatos/eliminar"><i class="ik ik-slash"></i><span>Eliminar candidatura</span></router-link> 
                                </div>
                                <div class="nav-lavel"></div>
                                
                                <div class="nav-item has-sub">
                                    <router-link to="#"><i class="ik ik-layers"></i><span>Propuestas</span> </router-link> 
                                    <div class="submenu-content">
                                        <router-link class="menu-item" id="item" to="/dashboard/propuesta/agregar">Agregar</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                               </div>
                            

                            </nav>
                        </div>
                    </div>
                </div>
                <div class="main-content">
                    <router-view/>
                    <footer class="text-center">
                            Copyright © 2019 - 2020 <b> E-vote </b> All Rights Reserved.
                    </footer>
                </div>
               

        </div>
        
        <div class="page-wrap">
            <div class="app-sidebar colored">
                <div class="page-wrap">
                    <!-- Sidebar -->
                    <nav id="sidebar">
                        <div class="sidebar-header">
                            <router-link class="header-brand" to="/dashboard">
                                <div class="logo-img">
                                    <img src="../../Home/Index/Logo.svg" height="200" width="200"> 
                                </div>
                            </router-link> 
                        </div>

                    <ul class="list-unstyled components">
                        <li id="rol-item">
                            <label for="exampleInputUsername2" class="col-sm-2 col-form-label">Rol:</label>
                                <div class="col-sm-10">
                                    <select class="form-control select2" v-model="rolSelector" >
                                        <option v-for="(item, index) in roles" :key="index" :value= "item.RolNombre" >{{item.RolNombre}}</option>
                                        </select>
                                </div>
                        </li>
                        <div id="spacing-menu">Menu</div>
                        <div v-if="rolSelector==='Administrador'" >
                            {{cambio_rol()}}
                            <!-- Procesos de votación -->
                            <li>
                                <a
                                href="#pageSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Procesos de votación</a
                                >
                                <ul class="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                       <router-link class="menu-item" id="item" to="/dashboard/procvotacion/Consultar">Consultar</router-link>
                                    </li>
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/procvotacion/agregar">Agregar</router-link>
                                    </li>
                                </ul>
                            </li>
                            <div id="spacing"></div>
                            <!-- Votantes -->
                            <li>
                                <a
                                href="#votantesSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Votantes</a
                                >
                                <ul class="collapse list-unstyled" id="votantesSubmenu">
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/votante/consultar">Consultar</router-link>
                                    </li>
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/votante/agregar">Agregar</router-link> 
                                    </li>
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/votante/impor_archivo">Importar archivos</router-link>
                                    </li>
                                </ul>
                            </li>
                            <div id="spacing"></div>
                            <!-- Aspirantes -->
                            <li>
                                <a
                                href="#aspiranteSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Aspirantes</a
                                >
                                <ul class="collapse list-unstyled" id="aspiranteSubmenu">
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/aspirante/consultar_inscrip">Consultar inscripciones</router-link>
                                    </li>
                                </ul>
                            </li>
                            <div id="spacing"></div>
                            <!-- Candidatos -->
                            <li>
                                <a
                                href="#candidatoSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Candidatos</a
                                >
                                <ul class="collapse list-unstyled" id="candidatoSubmenu">
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/candidatos/consultar">Consultar</router-link>
                                    </li>
                                </ul>
                            </li>
                            <div id="spacing"></div>
                            <!-- Reportes -->
                            <li>
                                <a
                                href="#reportesSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Reportes</a
                                >
                                <ul class="collapse list-unstyled" id="reportesSubmenu">
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/reporte/votacion">Reporte votación</router-link>
                                    </li>
                                </ul>
                            </li>
                            <div id="spacing"></div>
                            <div id="spacing"></div>
                            <!-- Parametrizacion -->
                            <li>
                                <a
                                href="#reportesSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Reportes</a
                                >
                                <ul class="collapse list-unstyled" id="reportesSubmenu">
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/parametro/program_form">Programa formación</router-link>
                                    </li>
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/parametro/jornada">Jornada</router-link>
                                    </li>
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/parametro/tipo_doc">Tipo documento</router-link>
                                    </li>
                                </ul>
                            </li>
                            <div id="spacing"></div>
                        </div>
                        <div v-if="rolSelector==='Estudiante'" >
                            {{cambio_rol()}}
                            <!-- Procesos de votación -->
                            <li>
                                <a
                                href="#pageSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Procesos de votación</a
                                >
                                <ul class="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                       <router-link class="menu-item" id="item" to="/dashboard/procvotacion/Consultar">Consultar</router-link>
                                    </li>
                                </ul>
                            </li>
                            
                            <div id="spacing"></div>
                            <!-- Aspirantes -->
                            <li>
                                <a
                                href="#aspiranteSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Aspirantes</a
                                >
                                <ul class="collapse list-unstyled" id="aspiranteSubmenu">
                                    <li>
                                       <router-link class="menu-item" id="item" to="/dashboard/aspirante/Reg_Estudiante">Registrar inscripción</router-link>
                                    </li>
                                </ul>
                            </li>
                            <div id="spacing"></div>
                            <!-- Candidatos -->
                            <li>
                                <a
                                href="#candidatoSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Candidatos</a
                                >
                                <ul class="collapse list-unstyled" id="candidatoSubmenu">
                                <li>
                                    <router-link  to="/dashboard/candidatos/consultar" id="item" class="menu-item">Consultar</router-link >
                                                
                                </li>
                                <li>
                                   <router-link class="menu-item" id="item" to="/dashboard/propuesta/consultar">Consultar propuestas</router-link>
                                </li>
                                </ul>
                            </li>
                            <div id="spacing"></div>
                            <!-- Reportes -->
                            <li>
                                <a
                                href="#reportesSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Reportes</a
                                >
                                <ul class="collapse list-unstyled" id="reportesSubmenu">
                                    <li>
                                        <router-link to="/dashboard/reporte/votacion" id="item" class="menu-item">Reporte de votacion</router-link>
                                    </li>
                                </ul>
                            </li>
                            <div id="spacing"></div>
                        </div>                  
                        <div v-if="rolSelector==='Aspirante'" >
                            {{cambio_rol()}}
                            
                            <li>
                                <router-link to="/dashboard/aspirante/actualizar_inf"><span>Actualizar Informacion</span></router-link> 
                            </li>
                            
                            <div id="spacing"></div>
                            <li>
                                <router-link to="/dashboard/aspirante/agregar_doc"><span>Agregar Documentacion</span></router-link> 
                            </li>
                            
                            <div id="spacing"></div>
                            <li>
                                <router-link to="/dashboard/aspirante/eliminar_inscrip"><i class="ik ik-delete"></i><span>Eliminar Inscripcion</span></router-link> 
                            </li>
                            
                            <div id="spacing"></div>
                           
                        </div>                  
                        <div v-if="rolSelector==='Candidato'" >
                            {{cambio_rol()}}
                            
                            <li>
                               <router-link to="/dashboard/candidatos/actualizar"><i class="ik ik-edit"></i><span>Actualizar Informacion</span></router-link> 
                            </li>
                            
                            <div id="spacing"></div>
                            <li>
                                <router-link to="/dashboard/candidatos/eliminar"><i class="ik ik-slash"></i><span>Eliminar candidatura</span></router-link> 
                            </li>
                            
                            <div id="spacing"></div>
                            
                             <li>
                                <a
                                href="#propuestaSubmenu"
                                data-toggle="collapse"
                                aria-expanded="false"
                                class="dropdown-toggle"
                                >Propuestas</a
                                >
                                <ul class="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                       <router-link class="menu-item" id="item" to="/dashboard/propuesta/agregar">Agregar</router-link>
                                    </li>
                                    <li>
                                        <router-link class="menu-item" id="item" to="/dashboard/procvotacion/agregar">Agregar</router-link>
                                    </li>
                                </ul>
                            </li>

                            <div id="spacing"></div>
                           
                        </div>                  
                    </ul>
                    </nav>
                </div>
            </div>
        </div>    
           
        
        </div>
  </div>
</template>
<style scoped>
/*
    ADDITIONAL DEMO STYLE, NOT IMPORTANT TO MAKE THINGS WORK BUT TO MAKE IT A BIT NICER :)
*/
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

body {
  font-family: "Poppins", sans-serif;
  background: #fafafa;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

#sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: -1;
  background: #404e67;
  color: #fff;
  transition: all 0.3s;
  overflow-y: auto;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #272d36;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 20px;
  font-size: 15px;
  display: block;
}

#sidebar ul li #item {
  background-color: #4a5872;
}

#rol-item {
  height: 100px;
}

#rol-item a {
  text-align: center;
}

#spacing {
  background-color: #333e52;
  display: block;
  height: 15px;
}

#spacing-menu {
  background-color: #333e52;
  display: block;
  height: 30px;
  padding-top: 3px;
  padding-left: 10px;
}

</style>
<script>
export default {
    data() {
        return {
            roles:'',//carga todos los roles del usuario luego del login
            rolSelector: '',//Rol seleccionado de la lista desplegable
            nombre:'',//nombre de la persona que relaizo el login
            //ruta:'http://10.224.0.250:4000/api/dashboard'
            ruta:'http://localhost:4000/api/dashboard'
            
        }

    },
    created() {
        

        
        this.roles= JSON.parse(localStorage.getItem('rolesusuario'))//obtiene los roles
        if(localStorage.getItem('sessionrol')!=''){//si el rol en Loc Storag es vacio le asigna el primer rol del arreglo de roles
           /*  console.log(localStorage.getItem('sessionrol')) */
            
        }else{
            localStorage.setItem('sessionrol',JSON.parse(localStorage.getItem('rolesusuario'))[0].RolNombre);
        }
        this.rolSelector= localStorage.getItem('sessionrol')//le valor local de rol se le asigna al acutal en el local storage
        this.nombre=localStorage.getItem('nombre')
        window.$=window.jQuery= require('jquery')
        this.Vericacion_sesion()
    

    },methods: {
        cambio_rol(){//se ejecuta cada vez que se seleeciona un rol diferente
        this.Vericacion_sesion()
              if(localStorage.getItem('sessionrol')!=this.rolSelector){//compara el valor del componente y el del Loc Storage
               this.$router.push('/dashboard')//si son diferentes refresca a la pagina index del dashboard
            }
            localStorage.setItem('sessionrol',this.rolSelector);//asigna al local storage el valor seleccionado en el componente
    1
        },
        logout(){//metodo se ejecuta al final de un inicio de sesion se limpia el local storage
            localStorage.setItem('token',null)
            localStorage.setItem('sessionrol',null)
            localStorage.setItem('rolesusuario',null)
            localStorage.setItem('nombre',null)
            localStorage.setItem('sessionrol',null)
        },
        
        Vericacion_sesion(){
            fetch(this.ruta,{
                    method: 'GET',
                    mode: 'cors',
                    headers:{
                        'Accept':'application/json',
                        'Content-type':'application/json',
                        'RolSeleccionado' : localStorage.getItem('sessionrol'),
                        'Authorization': 'Bearer '+localStorage.getItem('token')
                    }
            })
            .then( res => res.json())
            .then(data=> {
               if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                   this.estado=data.Error.message
                   alert(this.estado)
                   this.logout()
                   window.location.href = '/login'
               }else{

                    /* console.log(data) */
               }
            })
            .catch(e =>{
                console.log(e);
            })

        }

    },
   
}
</script>

