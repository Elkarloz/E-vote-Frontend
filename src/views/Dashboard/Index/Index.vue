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
                        <a class="header-brand" href="/dashboard">
                            <div class="logo-img">
                               <img src="../../Home/Index/Logo.svg" height="200" width="200"> 
                            </div>
                            
                        </a>
                        
                        <button id="sidebarClose" class="nav-close"><i class="ik ik-x"></i></button>
                    </div>
                    
                    <div class="sidebar-content">
                        <div class="nav-container">
                            <nav id="main-menu-navigation" class="navigation-main">
                                 <div class="nav-item">
                                    <a ><i class=""></i><span>
                                         <div class="form-group row">
                                                <label for="exampleInputUsername2" class="col-sm-2 col-form-label">Rol:</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control select2" v-model="rolSelector" >
                                                        <option v-for="(item, index) in roles" :key="index" :value= "item.RolNombre" >{{item.RolNombre}}</option>
                                                     </select>
                                                </div>
                                            </div>
                                        </span></a>
                                </div>

                                <div class="nav-lavel">Menu</div>
                               <div v-if="rolSelector==='Administrador'" >
                                    {{cambio_rol()}}

                                <div class="nav-item has-sub">
                                    <a href="javascript:void(0)"><i class="ik ik-archive"></i><span>Procesos de votacion</span></a>
                                    <div class="submenu-content">
                                        <router-link class="menu-item" to="/dashboard/procvotacion/Consultar">Consultar</router-link>
                                         <router-link class="menu-item" to="/dashboard/procvotacion/agregar">Agregar</router-link>
                                    </div>
                                </div>
                                <div class="nav-lavel"></div>
                               
                                <div class="nav-item has-sub">
                                    <a href="#"><i class="ik ik-user"></i><span>Votantes</span></a>
                                    <div class="submenu-content">
                                        <router-link class="menu-item" to="/dashboard/votante/consultar">Consultar</router-link>
                                        <router-link class="menu-item" to="/dashboard/votante/agregar">Agregar</router-link>
                                        <router-link class="menu-item" to="/dashboard/votante/impor_archivo">Importar archivos</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <a href="#"><i class="ik ik-file-minus"></i><span>Aspirantes</span> </a>
                                    <div class="submenu-content">
                                        <router-link class="menu-item" to="/dashboard/aspirante/consultar_inscrip">Consultar inscripciones</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <a href="#"><i class="ik ik-slack"></i><span>Candidatos</span></a>
                                    <div class="submenu-content">
                                        <router-link class="menu-item" to="/dashboard/candidatos/consultar">Consultar</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <a href="#"><i class="ik ik-clipboard"></i><span>Reportes</span></a>
                                    <div class="submenu-content">
                                        <router-link class="menu-item" to="/dashboard/reporte/votacion">Reporte votación</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                 
                                <div class="nav-item has-sub">
                                    <a href="#"><i class="ik ik-database"></i><span>Parametrizacion</span></a>
                                    <div class="submenu-content">
                                        <router-link class="menu-item" to="/dashboard/parametro/program_form">Programa formación</router-link>
                                        <router-link class="menu-item" to="/dashboard/parametro/jornada">Jornada</router-link>
                                        <router-link class="menu-item" to="/dashboard/parametro/tipo_doc">Tipo documento</router-link>
                                    </div>
                                </div>
                                <div class="nav-lavel"></div>
                               </div>
                                <!-- fin Menu Administrador-->
                                <!-- Menu votante-->
                               <div v-if="rolSelector==='Estudiante'" >
                                   {{cambio_rol()}}
                                <div class="nav-item has-sub">
                                    <a href="javascript:void(0)"><i class="ik ik-archive"></i><span>Procesos de votacion</span></a>
                                    <div class="submenu-content">
                                        <router-link class="menu-item" to="/dashboard/procvotacion/Consultar">Consultar</router-link>
                                    </div>
                                </div>
                                <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <a href="#"><i class="ik ik-user"></i><span>Votantes</span></a>
                                    <div class="submenu-content">
                                        <a href="pages/ui/alerts.html" class="menu-item">Datos Personales</a>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <a href="#"><i class="ik ik-file-minus"></i><span>Aspirantes</span> </a>
                                    <div class="submenu-content">
                                        <router-link class="menu-item" to="/dashboard/aspirante/Reg_Estudiante">Registrar inscripción</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <a href="#"><i class="ik ik-slack"></i><span>Candidatos</span></a>
                                    <div class="submenu-content">
                                        <a href="/dashboard/candidatos/consultar" class="menu-item">Consultar</a>
                                        <router-link class="menu-item" to="/dashboard/propuesta/consultar">Consultar propuestas</router-link>                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                                <div class="nav-item has-sub">
                                    <a href="#"><i class="ik ik-clipboard"></i><span>Reportes</span></a>
                                    <div class="submenu-content">
                                        <a href="/dashboard/reporte/votacion" class="menu-item">Reporte de votacion</a>
                                    </div>
                                </div>
                                <div class="nav-lavel"></div>
                               </div>
                                <!-- fin Menu votante-->
                                <!-- Menu aspirante-->
                               <div v-if="rolSelector==='Aspirante'" >
                                   {{cambio_rol()}}

                                <div class="nav-item">
                                    <a href="/dashboard/aspirante/actualizar_inf"><i class="ik ik-edit"></i><span>Actualizar Informacion</span></a>
                                </div>
                                <div class="nav-lavel"></div>
                                <div class="nav-item">
                                    <a href="/dashboard/aspirante/agregar_doc"><i class="ik ik-file-plus"></i><span>Agregar Documentacion</span></a>
                                </div>
                                <div class="nav-lavel"></div>
                                <div class="nav-item">
                                    <a href="/dashboard/aspirante/eliminar_inscrip"><i class="ik ik-delete"></i><span>Eliminar Inscripcion</span></a>
                                </div>
                                <div class="nav-lavel"></div>

                               </div>
                               <!-- fin Menu Aspirante-->
                                <!-- Menu Candadidato-->
                                 <div v-if="rolSelector==='Candidato'" >
                                   {{cambio_rol()}}

                                 <div class="nav-item">
                                    <a href="/dashboard/candidatos/actualizar"><i class="ik ik-edit"></i><span>Actualizar Informacion</span></a>
                                </div>
                                <div class="nav-lavel"></div>
                                <div class="nav-item">
                                    <a href="/dashboard/candidatos/eliminar"><i class="ik ik-slash"></i><span>Eliminar candidatura</span></a>
                                </div>
                                <div class="nav-lavel"></div>
                                
                                <div class="nav-item has-sub">
                                    <a href="#"><i class="ik ik-layers"></i><span>Propuestas</span> </a>
                                    <div class="submenu-content">
                                     <router-link class="menu-item" to="/dashboard/propuesta/agregar">Agregar</router-link>
                                    </div>
                                </div>
                                 <div class="nav-lavel"></div>
                               </div>
                                <!-- fin Menu Candidato-->

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
        </div>
  </div>
</template>
<style>

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
            console.log(localStorage.getItem('sessionrol'))
            
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

                    console.log(data)
               }
            })
            .catch(e =>{
                console.log(e);
            })

        }

    },
   
}
</script>

