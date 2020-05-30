<template>
  <div>
    <div class="card">
        <div class="card-header">
            <div class="col-md-12">
                <h3 class="text-center">CONSULTAR INSCRIPCIONES</h3>
            </div>
        </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="col-md-10 mx-auto">
              <form @submit.prevent="ConsultarxParametro(PorParametros.PerDocumento,PorParametros.PerNombre,PorParametros.PerApellido,PorParametros.EstFicha,PorParametros.JorNombre,PorParametros.ProforNombre)">
                 <!-- row 1 -->
                <div class="form-group row mx-auto">
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" placeholder="Documento" v-model="PorParametros.PerDocumento">
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="PorParametros.PerNombre">
                    </div> 
                    <div class="col-sm-4">   
                    <input type="text" class="form-control my-2" placeholder="Apellido" v-model="PorParametros.PerApellido">
                    </div>
                </div>
                <!-- Botton -->
                <div class="col-md-12 text-center" id="btnBuscar">
                  <b-button type="submit" class="my-4 btn-success center-block" >Buscar</b-button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <!-- Tabla -->    
            <div class="col-md-12" id="TablaVotante_Consultar">
              <div class="table-responsive">
                  <table class="table">
                <thead>
                  <tr>
                    <th class="text-center">Codigo</th>
                    <th class="text-center">Documento</th>
                    <th class="text-center">Nombre</th>
                    <th class="text-center">Apellido</th>
                    <th class="text-center">Estado</th>
                    <th class="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                    <tr tr v-for="(item, index) in aspirante" :key="index">
                    <td class="text-center">{{item.AspCodigo}}</td>     
                    <td class="text-center">{{item.PerDocumento}}</td>
                    <td class="text-center">{{item.PerNombre}}</td>
                    <td class="text-center">{{item.PerApellido}}</td>
                    <td class="text-center">{{item.AspEstado}}</td>
                    <td class="text-center">
                      <div class="text-center col-md-12">  
                          <button @click="ConsultarVotanteID(item.AspCodigo)" type="button" class="btn btn-success" data-toggle="modal" data-target="#fullwindowModal">Ver mas</button>
                      </div> 
                    </td>
                  </tr>
                </tbody>
                  </table>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    
    <!-- Estructura del Full modal -->
  <div 
  class="modal fade full-window-modal show" 
  id="fullwindowModal" 
  tabindex="-1" 
  role="dialog" 
  aria-labelledby="fullwindowModalLabel" 
  style="display: none;"
  >
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
              <div class="col-md-12 text-center">
                <h5 class="modal-title" id="fullwindowModalLabel">
                  Validar aspirante a candidato
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </h5>
              </div>
            </div>
            <div class="modal-body">
              <div class="col-md-12 text-center" style="margin-top: 2%;">
                <h4>DATOS DEL ASPIRANTE</h4>
              </div>
              <div class="col-md-12 row " style="margin-top: 2%;">
                  <!-- contenido del modal -->
                <form @submit.prevent="ValidarAspirante()" class="ml-auto mr-auto">
                  <div class="row">
                    <div class="col-md-4">
                      <input type="text" class="form-control my-2" placeholder="Codigo" readonly v-model="AspiranteID.AspCodigo">
                    </div>
                    <div class="col-md-4">
                      <input type="text" class="form-control my-2" placeholder="Documento" readonly v-model="AspiranteID.PerDocumento">
                    </div>
                    <div class="col-md-4">
                      <input type="text" class="form-control my-2" placeholder="Nombre" readonly v-model="AspiranteID.PerNombre">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <input type="text" class="form-control my-2" placeholder="Apellido" readonly v-model="AspiranteID.PerApellido">
                    </div>
                    <div class="col-md-4">
                      <select class="form-control my-2" readonly v-model="AspiranteID.AspEstado">           
                          <option>Activo</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <div class="col-md-12 row mx-auto" style="margin-top: 3%;">
                        <h6 class="modal-title">Ver documento de inscripción</h6>
                        <div class="offset-1">
                          <a :href="`${this.urlPDF}`"><button type="button" class="btn btn-secondary">Mostrar</button></a>
                        </div> 
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-md-12 row mx-auto" id="TablaVotante_Consultar">
                    <div class="table-responsive">
                        <table class="table">
                      <thead>
                        <tr>
                          <th class="text-center">VERIFICACIÓN DE CONDICIONES</th>
                          <th class="text-center">Selecione/SI/NO</th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td class="text-center">Presentó propuestas programática en el formato suministrado por Bienestar al aprendiz</td>
                            <td class="text-center">
                                <div class="row col-md-12 mx-auto">
                                  <div class="col-md-6 mx-auto">
                                      <input type="radio" name="radio1">
                                      <label>SI</label>
                                  </div>
                                  <div class="col-md-6 mx-auto">
                                      <input type="radio" name="radio1">
                                      <label>NO</label> 
                                  </div>
                                </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="text-center">No presenta problemas académicos y/o disiplinarios, ni tiene sanciones por parte del Comité de Seguimiento y Evaluación</td>
                            <td class="text-center">
                                <div class="row col-md-12 mx-auto">
                                  <div class="col-md-6 mx-auto">
                                      <input type="radio" name="radio2">
                                      <label>SI</label>
                                  </div>
                                  <div class="col-md-6 mx-auto">
                                      <input type="radio" name="radio2">
                                      <label>NO</label> 
                                  </div>
                                </div>
                            </td>            
                          </tr>
                          <tr>
                            <td class="text-center">Entregó la información a tiempo cumpliendo con el cronograma de Elecciones </td>
                            <td class="text-center">
                                <div class="row col-md-12 mx-auto">
                                  <div class="col-md-6 mx-auto">
                                      <input type="radio" name="radio3">
                                      <label>SI</label>
                                  </div>
                                  <div class="col-md-6 mx-auto">
                                      <input type="radio" name="radio3">
                                      <label>NO</label> 
                                  </div>
                                </div>
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                      </tbody>
                        </table>
                    </div>
                  </div>
                  <div class="col-md-12 row">
                    <div class="col-md-10">
                      <h6 class="text-center">N° de Tarjetón:</h6>
                    </div>
                    <div class="col-md-2">
                      <input type="text" class="form-control my-2 text-center" required placeholder="01" v-model="AspiranteID.CanNTarjeton">
                    </div>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                      <b-button type="submit" class="my-3 btn-primary center-block">Postular como candidato</b-button >
                  </div>
                </form>
              </div>
            </div>
            
        </div>
    </div>
  </div>


  <!--  Modal error -->
    <div class="modal fade" id="ModalError" role="dialog" aria-labelledby="ModalErrorLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm mt-0 mb-0" role="document">
        <div class="modal-content">
            <div class="center-block">
                <h5 class="modal-title text-center" id="ModalErrorLabel" style="margin-top:6%;">VALIDADO</h5>
            </div>
            <div class="modal-body text-center">
                <div style="font-size:14px;">
                  
                      <img class="img-responsive center-block" src="../../../content/img/correcto.png" width="160" height="160" alt="User" >
                   
                    </div>
                    <p>{{this.mensaje}} <br><br></p>
                </div>
                <div class="text-center" style="margin-bottom: 5%">
                    <button type="button" class="btn waves-effect bg-success" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
      </div>
    </div>
  
  
  
  
  </div>
  </template>

<script>
  export default {
    data() {{}
      return {
        //ruta: "http://10.224.0.250:4000/api/aspirante", //Ruta de la API a la cuan se envian las
        ruta: "http://localhost:4000/api/aspirante", //Ruta de la API a la cuan se envian las peticiones
        aspirante: [], //Arreglo para obtener all users
        mensaje: { color: "success", texto: "Mensjaje" }, //mensaje por defecto alerta
        dismissSecs: 5, //Parametros de la alerta
        dismissCountDown: 0, //Parametros de la alerta
        editar: false, //valor para habilitar el formulario de edicion
        AspiranteID: {}, //usuario solo /consula por id  y actualizar
        estado: "", //estado para motrar la alerta
        PorParametros:{},
        mensaje: "",
        error: false,
        urlPDF: ""
      };
    },
  created() {
    this.Obtenervotantes();
    this.cerrarModal();
  },
  methods: {
    Obtenervotantes() {
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
            this.aspirante = data;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    ConsultarVotanteID(codigo) {
      fetch(this.ruta + `/${codigo}`, {
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
            // alert(this.estado)
            this.tokenInvalido();
          } else {
            this.AspiranteID = data[0];
            this.urlPDF= this.AspiranteID.AspPDFruta
            this.MostrarPDF(this.AspiranteID.AspCodigo);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    MostrarPDF(codigo) {
      this.urlPDF = (this.urlPDF+codigo)
      fetch(this.ruta + `/PDF/${codigo}`, {
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
            // alert(this.estado)
            this.tokenInvalido();
          } else {
            console.log("¡Abriendo!")
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    ConsultarxParametro(DocPer,NomPer,ApePer) {

       if(DocPer==undefined &&  NomPer==undefined && ApePer==undefined){
        this.Obtenervotantes();
      }else{

      fetch(this.ruta + `/${DocPer}` + `/${NomPer}` + `/${ApePer}` , {
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
          // alert(this.estado)
          this.tokenInvalido();
      } else {
          this.aspirante = data;
      }
      })
      .catch(e => {
      console.log(e);
      });
      }
    },
    ValidarAspirante(){
        console.log(this.AspiranteID)
        fetch(this.ruta + "/validar",{
                method: 'POST',
                mode: 'cors',
                headers:{
                    'Authorization': 'Bearer '+localStorage.getItem('token'),
                    'Accept':'application/json',
                    'Content-type':'application/json',
                    'RolSeleccionado' : localStorage.getItem('sessionrol')
                },
                body:JSON.stringify(this.AspiranteID)
        })
        .then( res => res.json())
        .then(data=> {
            if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                //alert(this.estado)
                this.tokenInvalido();
                this.abrirModal();
            }else{
               this.mensaje = data.message;
               this.error = true;
               this.abrirModal();
               this.Obtenervotantes();
            }
        })
        .catch(e =>{
            console.log(e);
            
        })
    },
    cerrarModal() {
      $("#vermas").modal("hide");
      $("#fullwindowModal").modal("hide");
    },
    abrirModal(){
      $("#ModalError").modal("show");
      this.cerrarModal();
    }
  }
};


</script>
