<template>
  <div>
    <div class="card">
        <div class="card-header">
            <div class="col-md-12">
            <h3 class="text-center">CONSULTAR CANDIDATO</h3>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="col-md-12"> 
                <form id="formulario" @submit.prevent="Parametros(PorParametros.PerDocumento,PorParametros.PerNombre,PorParametros.PerApellido,PorParametros.CanEstado)">
                    <!-- row 1 -->
                    <div class="form-group row mx-auto" >
                        <div class="col-sm-4">
                            <input id="txt" type="text" class="form-control my-2" placeholder="Documento" v-model="PorParametros.PerDocumento" />
                        </div>
                        <div class="col-sm-4">
                            <input type="text" class="form-control my-2" placeholder="Nombre" v-model="PorParametros.PerNombre" />
                        </div>
                        <div class="col-sm-4">
                            <input type="text" class="form-control my-2" placeholder="Apellido" v-model="PorParametros.PerApellido" />
                        </div>
                    </div>
                    <!-- row 2 -->
                    <div class="col-md-12">
                        <!-- Botton -->  
                        <div class="text-center">
                            <b-button type="submit" class="my-2 btn-success center-block">Buscar</b-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        
        <div class="card">
          <div class="card-body">
            <!-- Tabla -->
            <div class="col-md-12 " >
               <div class="table-hover" >
                <table class="table ">
                  <thead>
                    <tr>
                      <th class="text-center">Codigo</th>
                      <th class="text-center">N° Tarjerton</th>
                      <th class="text-center">Nombre</th>
                      <th class="text-center">Apellido</th>
                      <th class="text-center">Estado</th>
                      <th class="text-center">Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr tr v-for="(item, index) in candidato" :key="index">
                      <td class="text-center">{{item.CanCodigo}}</td>
                      <td class="text-center">{{item.CanNTarjeton}}</td>
                      <td class="text-center">{{item.PerNombre}}</td>
                      <td class="text-center">{{item.PerApellido}}</td>
                      <td class="text-center">{{item.CanEstado}}</td>
                      <td>
                        <div class="text-center col-md-12">  
                            <b-button @click="ConsultarcandidatoID(item.CanCodigo)" class="btn-success btn-sm mx-2" data-toggle="modal" data-target="#vermas">Ver mas</b-button>
                        </div> 
                      </td>
                    </tr>
                  </tbody>
                </table>
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
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterLabel">Candidato</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="Actualizarcandidato()">
                    <!-- contenido del modal -->
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>CÓDIGO:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2"  readonly placeholder="Codigo" v-model="CandidatoID.CanCodigo"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>N° Tarjerton:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2" placeholder="N° Tarjeton" v-model="CandidatoID.CanNTarjeton" />
                  </div>
                </div>
                 <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>NOMBRE:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2" readonly placeholder="Nombre" v-model="CandidatoID.PerNombre" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>APELLIDO:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2" readonly placeholder="Apellido" v-model="CandidatoID.PerApellido" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>ESTADO:</label>
                  </div>
                  <div class="col-md-8">
                    <select class="form-control my-2" v-model="CandidatoID.CanEstado">
                      <option disabled selected>-- Selecione un estado --</option>
                      <option >Activo</option>
                      <option >Inactivo</option>
                    </select>                  
                  </div>
                </div>
                <div class="row">
                  <div style="margin-top: 6%;"></div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button v-if="this.rol==='Administrador'" type="submit" class="btn btn-danger" data-toggle="modal" data-target="#modalEliminar" data-dismiss="modal" >Eliminar</button>
                <button v-if="this.rol==='Administrador'" type="submit" class="btn btn-success" data-toggle="modal">Actualizar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <style>
#TablaVotante_Consultar {
  margin-top: 5%;
}
</style>
<script>
export default {
  data() {
    return {
      //ruta: "http://10.224.0.250:4000/api/candidato",
      ruta: "http://localhost:4000/api/candidato", //Ruta de la API a la cuan se envian las peticiones
      candidato: [], //Arreglo para obtener all users
      CandidatoID: [],
      mensaje: { color: "success", texto: "Mensjaje" }, //mensaje por defecto alerta
      dismissSecs: 5, //Parametros de la alerta
      dismissCountDown: 0, //Parametros de la alerta
      PorParametros:{},
      rol: localStorage.getItem('sessionrol')
    };
  },
  created() {
    this.Obtenercandidatos();
  },
  methods: {
    Parametros(DocPer,NomPer,ApePer,Estado) {
    fetch(this.ruta + `/${DocPer}` + `/${NomPer}` + `/${ApePer}` + `/${Estado}`, {
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
        this.candidato = data;
        this.PorParametros = {};
    }
    })
    .catch(e => {
    console.log(e);
    });
    },
    Obtenercandidatos() {
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
            this.candidato = data;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    cerrarModal() {
      $("#vermas").modal("hide");
    },
    Actualizarcandidato(){
      fetch(this.ruta+'/'+this.CandidatoID.CanCodigo,{
              method: 'PUT',
              mode: 'cors',
              headers:{
                  'Authorization': 'Bearer '+localStorage.getItem('token'),
                  'Accept':'application/json',
                  'Content-type':'application/json',
                  'RolSeleccionado' : localStorage.getItem('sessionrol')
              },
              body:JSON.stringify(this.CandidatoID)
      })
      .then( res => res.json())
      .then(data=> {
            if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
              //alert(this.estado)
              this.tokenInvalido()
          }else{
            this.cerrarModal()
            this.Obtenercandidatos()
          } 
      })
      .catch(e =>{
          console.log(e);
      })
    },
    ConsultarcandidatoID(codigo){      
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

                  this.CandidatoID=data[0]
              }
              })
          .catch(e =>{
              console.log(e);
          })  
      }
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
    },
    showAlert() {
        this.dismissCountDown = this.dismissSecs
    },
    tokenInvalido(){
                window.location.href = '/login'
                localStorage.setItem('token',null)
                localStorage.setItem('rolesusuario',null)
                localStorage.setItem('nombre',null)
                localStorage.setItem('sessionrol',null)
    },
}

</script>
