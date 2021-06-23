<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="col-md-12">
          <h6 class="text-center">CONSULTAR PROCESO DE VOTACIÓN</h6>
        </div>
      </div>
      <div class="card-body">
        
          <div class="col-md-12 mx-auto">
            <!-- Radio buttons-->
            <div class="text-center" id="radioPro_vot_Consultar">
              <div class="form-radio">
                <div class="col-md-12">
                  <form style="margin-top: -5%;">
                    <div class="radio radiofill radio-success radio-inline">
                      <label>
                        <input type="radio" name="radio" v-model="radio1" value="1" />
                        <i class="helper"></i>Año
                      </label>
                    </div>
                    <div class="radio radiofill radio-success radio-inline">
                      <label>
                        <input type="radio" name="radio" v-model="radio1" value="2" />
                        <i class="helper"></i>Fecha
                      </label>
                    </div>
                    <div class="radio radiofill radio-success radio-inline">
                      <label>
                        <input type="radio" name="radio" v-model="radio1" value="3" />
                        <i class="helper"></i>Fecha inicio - Fecha fin
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- Calendarios -->
            <div class="text-center" id="CalendarioPro_vot_Consultar">
              <!-- Calendarios 3 -->
              <div class="row col-md-12" v-if="radio1 == '3'">
                <div class="col-md-6 mx-auto">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 offset-3">
                        <input class="form-control" type="date" v-model="Fecha1" />
                      </div>
                      <div class="col-sm-0">
                        <i class="ik ik-calendar ik-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mx-auto">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6">
                        <input class="form-control" type="date" v-model="Fecha2" />
                      </div>
                      <div class="col-sm-0">
                        <i
                          class="ik ik-calendar ik-2x"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          id
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Calendarios 2 -->
              <div class="row col-md-12" v-if="radio1 == '2'">
                <div class="col-md-6 mx-auto">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-sm-6 offset-3">
                        <input class="form-control" type="date" v-model="Fecha1" />
                      </div>
                      <div class="col-sm-0">
                        <i class="ik ik-calendar ik-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Calendarios 1 -->
              <div class="row col-md-12" v-if="radio1 == '1'">
                <div class="col-md-6 mx-auto">
                  <div class="form-group">
                   
                    <div class="row">
                      <div class="col-sm-6 offset-3">
                         <select class="form-control" v-model="año">
                            <option v-for="(item, index) in rango" :key="index">{{item}}</option>
                        </select>   
                      </div>
                      <div class="col-sm-0">
                        <i class="ik ik-calendar ik-2x"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-12 mx-auto" style="margin-top:2%;">
                <button  v-if="radio1 == '1'" @click="consultaAño()" type="input" class="btn btn-success mr-2">Buscar</button>
                <button  v-if="radio1 == '2'" @click="consultaJornada()" type="input" class="btn btn-success mr-2">Buscar</button>
                <button  v-if="radio1 == '3'" @click="consultaFechas()" type="input" class="btn btn-success mr-2">Buscar</button>
              </div>
            </div>
          </div>
        
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="col-md-12">
          <h6 class="text-center">RESULTADOS DE LA BUSQUEDA</h6>
        </div>
      </div>
      <div class="car-body">
        <!-- TABLA -->
        <div class="col-md-12" id="TablaPro_vot_Consultar" style="margin-top: -1%;">
          <div class="table-hover">
            <table class="table">
              <thead>
                <tr>
                  <th class="text-center">Codigo</th>
                  <th class="text-center">Fecha de inicio</th>
                  <th class="text-center">Fecha fin</th>
                  <th class="text-center">Jornada electoral</th>
                  <th class="text-center">Accion</th>
                </tr>
              </thead>
              <tbody>
                <tr tr v-for="(item, index) in Proceso_votacion" :key="index">
                  <td class="text-center">{{item.ProVotCodigo}}</td>
                  <td class="text-center">{{item.ProVotInicio.split('T')[0]}}</td>
                  <td class="text-center">{{item.ProVotFin.split('T')[0]}}</td>
                  <td class="text-center">{{item.ProVotFechaJornada.split('T')[0]}}</td>
                  <td>
                    <div class="col-md-12 text-center">
                      <b-button @click="ConsultarprocesoID(item.ProVotCodigo)" class="btn-success btn-sm mx-2" data-toggle="modal" data-target="#vermas">Ver mas</b-button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Estructura del modal ver mas -->
      <div
        class="modal fade"
        id="vermas"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterLabel">Proceso de votacion</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="ActualizarProceso()">
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                             <!-- fila 1 -->
          <div class="form-group row">
            <!-- A -->
            <div class="col-sm-6">
              <!-- A1 -->
              <div class="form-group row">
                <!-- B -->
                <h6 class="col-sm-12">
                  <b>PROCESO DE VOTACIÓN</b>
                </h6>
                <div class="col-sm-6">
                  <!-- B1 -->
                  <h6>Fecha inicio:</h6>
                  <div class="row">
                    <div class="col-sm-10">
                      <input
                        required
                        class="form-control"
                        type="date"
                        v-model="Proceso_votacionID.ProVotInicio"
                      />
                    </div>
                    <div class="col-sm-0">
                      <i
                        class="ik ik-calendar ik-2x"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        id="icons"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="col-sm-5">
                  <!-- B2 -->
                  <h6>Fecha fin:</h6>
                  <div class="row">
                    <div class="col-sm-10">
                      <input required class="form-control" type="date" v-model="Proceso_votacionID.ProVotFin" />
                    </div>
                    <div class="col-sm-0">
                      <i
                        class="ik ik-calendar ik-2x"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        id="icons"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <!-- A2 -->
              <div class="form-group row">
                <!-- C -->
                <h6 class="col-sm-12">
                  <b>INSCRIPCIÓN DE ASPIRANTES</b>
                </h6>
                <div class="col-sm-6">
                  <!-- C1 -->
                  <h6>Fecha inicio:</h6>
                  <div class="row">
                    <div class="col-sm-10">
                      <input
                        required
                        class="form-control"
                        type="date"
                        v-model="Proceso_votacionID.ProVotRegEstInicio"
                      />
                    </div>
                    <div class="col-sm-0">
                      <i
                        class="ik ik-calendar ik-2x"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        id="icons"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <!-- C2 -->
                  <h6>Fecha fin:</h6>
                  <div class="row">
                    <div class="col-sm-10">
                      <input
                        required
                        class="form-control"
                        type="date"
                        v-model="Proceso_votacionID.ProVotRegEstFin"
                      />
                    </div>
                    <div class="col-sm-0">
                      <i
                        class="ik ik-calendar ik-2x"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        id="icons"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- fila 2 -->
          <div class="form-group row">
            <!-- A -->
            <div class="col-sm-6">
              <!-- A1 -->
              <div class="form-group row">
                <!-- B -->
                <h6 class="col-sm-12">
                  <b>VALIDACIÓN DE CANDIDATOS</b>
                </h6>
                <div class="col-sm-6">
                  <!-- B1 -->
                  <h6>Fecha inicio:</h6>
                  <div class="row">
                    <div class="col-sm-10">
                      <input
                        required
                        class="form-control"
                        type="date"
                        v-model="Proceso_votacionID.ProVotValAspInicio"
                      />
                    </div>
                    <div class="col-sm-0">
                      <i
                        class="ik ik-calendar ik-2x"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        id="icons"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="col-sm-5">
                  <!-- B2 -->
                  <h6>Fecha fin:</h6>
                  <div class="row">
                    <div class="col-sm-10">
                      <input
                        required
                        class="form-control"
                        type="date"
                        v-model="Proceso_votacionID.ProVotValAspFin"
                      />
                    </div>
                    <div class="col-sm-0">
                      <i
                        class="ik ik-calendar ik-2x"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        id="icons"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <!-- A2 -->
              <div class="form-group row">
                <!-- C -->
                <h6 class="col-sm-12">
                  <b>INCRIPCIÓN DE PROPUESTAS</b>
                </h6>
                <div class="col-sm-6">
                  <!-- C1 -->
                  <h6>Fecha inicio:</h6>
                  <div class="row">
                    <div class="col-sm-10">
                      <input
                        required
                        class="form-control"
                        type="date"
                        v-model="Proceso_votacionID.ProVotRegPropInicio"
                      />
                    </div>
                    <div class="col-sm-0">
                      <i
                        class="ik ik-calendar ik-2x"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        id="icons"
                      ></i>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <!-- C2 -->
                  <h6>Fecha fin:</h6>
                  <div class="row">
                    <div class="col-sm-10">
                      <input
                        required
                        class="form-control"
                        type="date"
                        v-model="Proceso_votacionID.ProVotRegPropFin"
                      />
                    </div>
                    <div class="col-sm-0">
                      <i
                        class="ik ik-calendar ik-2x"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        id="icons"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- fila 3 -->
          <div class="form-group row">
            <!-- A -->
            <div class="col-sm-6 offset-3">
              <!-- A1 -->
              <div class="form-group row">
                <!-- B -->
                <div class="col-md-12">
                  <h6 class="text-center">
                    <b>JORNADA DE VOTACIÓN</b>
                  </h6>
                </div>
                <div class="col-md-12">
                  <div class="text-center">
                  <!-- B1 -->
                    <h6>Fecha</h6>
                    <div class="row offset-3">
                      <div class="col-sm-6">
                        <input required class="form-control" type="date" v-model="Proceso_votacionID.ProVotFechaJornada"/>
                      </div>
                      <div class="col-sm-0">
                        <i class="ik ik-calendar ik-2x" data-toggle="modal" data-target="#exampleModalCenter" id="icons">
                        </i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
                    
                  </div>
                </div>
                <div class="row">
                  <div style="margin-top: 6%;"></div>
                </div>
              </div>
              <div class="modal-footer"> 
                    

                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button v-if="this.rol==='Administrador'" type="submit" class="btn btn-success" data-toggle="modal" @click="cerrarModal()">Actualizar</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--Modal Confirmación eliminar -->
  <div
      class="modal fade"
      id="modalEliminar"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterLabel">Eliminar</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12">
                  <!-- contenido del modal -->
                  <div class="text-center">
                    <img src="../../../content/img/error.png" width="160" height="160" alt="Error" class="img-responsive center-block" />
                    <h3>¿Estás seguro que quieres eliminar el registro de forma permanente?</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div style="margin-top: 6%;"></div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="submit" class="btn btn-danger" data-toggle="modal" data-dismiss="modal" @click="EliminarUsuario()">Sí</button>
            </div>
          </form>
        </div>
      </div>
  </div>



  </div>
</template>
<style>
#radioPro_vot_Consultar {
  margin-top: 5%;
}

#CalendarioPro_vot_Consultar {
  margin-top: 5%;
}

#btnVermas {
  margin-top: 3%;
}
#TablaPro_vot_Consultar {
  margin-top: 5%;
}
</style>

<script>
export default {
  data() {
    return {
      //ruta: "http://10.224.0.250:4000/api/procesoVotacion", //Ruta de la API a la cuan se envian las peticiones
      ruta: "http://localhost:4000/api/procesoVotacion", //Ruta de la API a la cuan se envian las peticiones
      Proceso_votacion: [], //Arreglo para obtener all users
      mensaje: { color: "success", texto: "Mensjaje" }, //mensaje por defecto alerta
      dismissSecs: 5, //Parametros de la alerta
      dismissCountDown: 0, //Parametros de la alerta
      editar: false, //valor para habilitar el formulario de edicion
      Proceso_votacionID: {},//usuario solo /consula por id  y actualizar
      estado: "", //estado para motrar la alerta
      radio1: "1",
      año: "",
      Fecha1: "",
      Fecha2: "",
      rango: [],
      rol: localStorage.getItem('sessionrol')
    };
  },
  created() {
    this.Obtenerfechas();
    this.year();
  },
  methods: {
    Obtenerfechas() {
      fetch(this.ruta + "/", {
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
        .then(data => {
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            this.estado = data.Error.message;
            //alert(this.estado)
            this.tokenInvalido();
          } else {
            this.Proceso_votacion = data;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
            ConsultarprocesoID(codigo){
            this.editar=true
             fetch(this.ruta+`/${codigo}`,{
                    method: 'GET',
                    mode: 'cors',
                    headers:{
                        'Authorization': 'Bearer '+localStorage.getItem('token'),
                        'Accept':'application/json',
                        'Content-type':'application/json',
                        'RolSeleccionado' : localStorage.getItem('sessionrol')
                    }
            }).then( res => res.json())
            .then(data=> {
                if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                   this.estado=data.Error.message
                  // alert(this.estado)
                   this.tokenInvalido()
               }else{

                    this.Proceso_votacionID=data[0]
                    this.Proceso_votacionID.ProVotInicio=this.Proceso_votacionID.ProVotInicio.split('T')[0]
                     this.Proceso_votacionID.ProVotFin=this.Proceso_votacionID.ProVotFin.split('T')[0]
                     this.Proceso_votacionID.ProVotRegEstInicio= this.Proceso_votacionID.ProVotRegEstInicio.split('T')[0]
                     this.Proceso_votacionID.ProVotRegEstFin=this.Proceso_votacionID.ProVotRegEstFin.split('T')[0]
                     this.Proceso_votacionID.ProVotValAspInicio=this.Proceso_votacionID.ProVotValAspInicio.split('T')[0]
                     this.Proceso_votacionID.ProVotValAspFin=this.Proceso_votacionID.ProVotValAspFin.split('T')[0]
                     this.Proceso_votacionID.ProVotRegPropInicio=this.Proceso_votacionID.ProVotRegPropInicio.split('T')[0]
                     this.Proceso_votacionID.ProVotRegPropFin=this.Proceso_votacionID.ProVotRegPropFin.split('T')[0]
                     this.Proceso_votacionID.ProVotFechaJornada=this.Proceso_votacionID.ProVotFechaJornada.split('T')[0]
                    console.log( this.Proceso_votacionID)
                    this.consulta=true;
                    
               }
                })
            .catch(e =>{
                console.log(e);
            })  
        },
        consultaAño(){
            this.editar=true
             fetch(this.ruta+`/ano/${this.año}`,{
                    method: 'GET',
                    mode: 'cors',
                    headers:{
                        'Authorization': 'Bearer '+localStorage.getItem('token'),
                        'Accept':'application/json',
                        'Content-type':'application/json',
                        'RolSeleccionado' : localStorage.getItem('sessionrol')
                    }
            }).then( res => res.json())
            .then(data=> {
                if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                   this.estado=data.Error.message
                  // alert(this.estado)
                   this.tokenInvalido()
               }else{
                    this.Proceso_votacion= [];
                    this.Proceso_votacion = data;
                    this.año='';
                    
                    
               }
                })
            .catch(e =>{
                console.log(e);
            })  
        },

        consultaFechas(){
            this.editar=true
             fetch(this.ruta+`/Inicio_fin/${this.Fecha1}/${this.Fecha2}`,{
                    method: 'GET',
                    mode: 'cors',
                    headers:{
                        'Authorization': 'Bearer '+localStorage.getItem('token'),
                        'Accept':'application/json',
                        'Content-type':'application/json',
                        'RolSeleccionado' : localStorage.getItem('sessionrol')
                    }
            }).then( res => res.json())
            .then(data=> {
                if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                   this.estado=data.Error.message
                  // alert(this.estado)
                   this.tokenInvalido()
               }else{
                    this.Proceso_votacion= [];
                    this.Proceso_votacion = data;
                    this.Fecha1='';
                    this.Fecha2='';
                    
                    
               }
                })
            .catch(e =>{
                console.log(e);
            })  
        },

        consultaJornada(){
            this.editar=true
             fetch(this.ruta+`/jornada/${this.Fecha1}`,{
                    method: 'GET',
                    mode: 'cors',
                    headers:{
                        'Authorization': 'Bearer '+localStorage.getItem('token'),
                        'Accept':'application/json',
                        'Content-type':'application/json',
                        'RolSeleccionado' : localStorage.getItem('sessionrol')
                    }
            }).then( res => res.json())
            .then(data=> {
                if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                   this.estado=data.Error.message
                  // alert(this.estado)
                   this.tokenInvalido()
               }else{
                    this.Proceso_votacion= [];
                    this.Proceso_votacion = data;
                    this.Fecha1='';
                    
                    
               }
                })
            .catch(e =>{
                console.log(e);
            })  
        },


        ActualizarProceso(){
           // console.log(JSON.stringify(this.UsuarioID));
            fetch(this.ruta+'/'+this.Proceso_votacionID.ProVotCodigo,{
                    method: 'PUT',
                    mode: 'cors',
                    headers:{
                        'Authorization': 'Bearer '+localStorage.getItem('token'),
                        'Accept':'application/json',
                        'Content-type':'application/json',
                        'RolSeleccionado' : localStorage.getItem('sessionrol')
                    },
                    body:JSON.stringify(this.Proceso_votacionID)
            })
            .then( res => res.json())
            .then(data=> {
                 if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                   this.estado=data.Error.message
                   //alert(this.estado)
                   this.tokenInvalido()
               }else{
                 //console.log(data);
                this.mensaje.color='success';
                this.mensaje.texto= data.message;
                this.Obtenerfechas();

                //this.showAlert();
                
                //this.editar=false;
                //this.consulta=false;
               }
             
            })
            .catch(e =>{
                console.log(e);
                this.mensaje.color='danger';
                this.mensaje.texto=e.response.data.message;
                //this.showAlert();
                this.ObtenerUsuarios();
            })
        },

        cerrarModal() {
            $("#vermas").modal("hide");
            $("#modalEliminar").modal("hide");
            //this.consulta=false;
            this.Obtenerfechas();
        },
        year(){
      this.DataY = new Date().getFullYear();
      for (let i = this.DataY-10; i <= this.DataY+10; i++) {
        this.rango.push(i)
        
      }
      
    },
    getyear(item){
      this.valor = item;
    }

  }
};
</script>

