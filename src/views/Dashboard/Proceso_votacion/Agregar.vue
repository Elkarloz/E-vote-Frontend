<template>
  <div>
    <div>
      <b-alert
        :show="dismissCountDown"
        dismissible
        :variant="mensaje.color"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
        class="text-center"
      >{{mensaje.texto}}</b-alert>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="col-md-12">
          <h3 class="text-center">AGREGAR PROCESO DE VOTACIÓN</h3>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <!-- Calendarios -->
        <form class @submit.prevent="agregarProVot()">
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
                        v-model="Proceso_votacion.ProVotInicio"
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
                      <input required class="form-control" type="date" v-model="Proceso_votacion.ProVotFin" />
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
                        v-model="Proceso_votacion.ProVotRegEstInicio"
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
                        v-model="Proceso_votacion.ProVotRegEstFin"
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
                        v-model="Proceso_votacion.ProVotValAspInicio"
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
                        v-model="Proceso_votacion.ProVotValAspFin"
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
                        v-model="Proceso_votacion.ProVotRegPropInicio"
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
                        v-model="Proceso_votacion.ProVotRegPropFin"
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
                        <input required class="form-control" type="date" v-model="Proceso_votacion.ProVotFechaJornada"/>
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
            <!--Boton-->
            <div class="col-md-12">
              <div class="form-group row" style="margin-top: 3%">
                <div class="col-md-6 offset-3">
                  <div class="text-center">
                    <button type="submit" class="btn btn-success">Agregar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="modal fade" id="ModalValido" role="dialog" aria-labelledby="ModalErrorLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-sm mt-0 mb-0" role="document">
                <div class="modal-content">
                    <div class="center-block">
                        <h5 class="modal-title text-center" id="ModalErrorLabel" style="margin-top:6%;"> Valido</h5>
                    </div>
                    <div class="modal-body text-center">
                        <div style="font-size:14px;">
                            <img class="img-responsive center-block" src="../../../content/img/correcto.png" width="160 " height="160" alt="User" >
                            <p>{{this.mensaje}} <br><br></p>
                        </div>
                        <div class="">
                            <button type="button" class="btn btn-success" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    <div class="modal fade" id="ModalError" role="dialog" aria-labelledby="ModalErrorLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm mt-0 mb-0" role="document">
          <div class="modal-content">
              <div class="center-block">
                  <h5 class="modal-title text-center" id="ModalErrorLabel" style="margin-top:6%;"> Error</h5>
              </div>
              <div class="modal-body text-center">
                  <div style="font-size:14px;">
                      <img class="img-responsive center-block" src="../../../content/img/error.png" width="160 " height="160" alt="User" >
                      <p>{{this.mensaje}} <br><br></p>
                  </div>
                  <div class="">
                      <button type="button" class="btn waves-effect bg-red" data-dismiss="modal">Cerrar</button>
                  </div>
              </div>
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
      //ruta: "http://10.224.0.250:4000/api/procesoVotacion", //Ruta de la API a la cuan se envian las peticiones
        ruta: "http://localhost:4000/api/procesoVotacion", //Ruta de la API a la cuan se envian las peticiones
        Proceso_votacion: {
        ProVotInicio: "",
        ProVotFin: "",
        ProVotRegEstInicio: "",
        ProVotRegEstFin: "",
        ProVotValAspInicio: "",
        ProVotValAspFin: "",
        ProVotRegPropInicio: "",
        ProVotRegPropFin: "",
        ProVotFechaJornada: "",
        codigo: ""
      }, //Arreglo para obtener all users
      mensaje: { color: "success", texto: "Mensjaje" }, //mensaje por defecto alerta
      dismissSecs: 5, //Parametros de la alerta
      dismissCountDown: 0, //Parametros de la alerta
      CodAdm: '',
      mensaje: ''

    };
  },
  created() {
       
    },
  methods: {
    agregarProVot() {
      this.CodAdm=localStorage.getItem('CodigoPersona')
      this.Proceso_votacion.codigo = this.CodAdm

      fetch(this.ruta + "/", {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          Accept: "application/json",
          "Content-type": "application/json",
          RolSeleccionado: localStorage.getItem("sessionrol")
        },
        body: JSON.stringify(this.Proceso_votacion)
      })
        .then(res => res.json())
        .then(data => {
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            this.estado = data.Error.message;
            //alert(this.estado)
          } else {
            this.mensaje = data.message;
            this.abrirModalValido();
          }
        })
        .catch(e => {
          console.log(e);
          this.abrirModalError();
        });
    },
    abrirModalValido(){
      $("#ModalValido").modal("show");
    },
     abrirModalError(){
      $("#ModalError").modal("show");
    },
    ConsultarAdmin(){
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

              this.UsuarioID=data[0]
          }
          })
      .catch(e =>{
          console.log(e);
      })  
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>


