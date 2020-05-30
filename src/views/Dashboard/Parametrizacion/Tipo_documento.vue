<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="col-md-12">
          <h3 class="text-center">TIPO DE DOCUMENTO</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="table-hover">
              <div class="col-md-10 offset-1">
                <!-- Tabla -->
                <table class="table">
                  <thead>
                    <tr>
                      <th>Codigo</th>
                      <th>Nombre</th>
                      <th>Estado</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr tr v-for="(item, index) in Tipodocumento" :key="index">
                      <td>{{item.TipdocCodigo}}</td>
                      <td>{{item.TipdocNombre}}</td>
                      <td>{{item.TipdocEstado}}</td>
                      <td>
                        <div class="table-actions" style="margin-right:20%;">
                          <button
                            data-toggle="modal"
                            data-target="#ActualizarModal"
                            class="btn btn-secondary btn-icon ml-2 mb-2"
                            @click="ConsultarTipoDocID(item.TipdocCodigo)"
                          >
                            <i class="ik ik-edit-2"></i>
                          </button>
                          <button
                            data-toggle="modal"
                            data-target="#EliminarModal"
                            class="btn btn-danger btn-icon ml-2 mb-2"
                            @click="ConsultarTipoDocID(item.TipdocCodigo)"
                          >
                            <i class="ik ik-trash-2"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!--ik-3x-->
              </div>
              <!-- Estructura del accionador model "button agregar" -->
              <div class="row">
                <div class="col-md-12">
                  <div class="text-center">
                    <button
                      data-toggle="modal"
                      data-target="#AgregarModal"
                      class="btn btn-success btn-icon ml-2 mb-2"
                    >
                      <i class="ik ik-plus" data-toggle="modal" data-target="#AgregarModal"></i>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Estructura del modal Agregar-->
    <div
      class="modal fade"
      id="AgregarModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" id="myModal">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterLabel">Agregar nuevo Tipo de documento</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="AgregarTipoDoc()">
            <div class="modal-body">
              <div class="row">
                <div class="col-md-8">
                  <input
                    type="text"
                    class="form-control my-2"
                    placeholder="Nombre de la jornada"
                    v-model="datos.TipdocNombre"
                  />
                </div>
                <!-- Combo box -->
                <div class="col-md-3">
                  <div class>
                    <div class="form-group row">
                      <select
                        class="form-control select2"
                        style="margin-top: 6.5%;"
                        v-model="datos.TipdocEstado"
                      >
                        <option value="Activo" selected>Activo</option>
                        <option value="Inactivo">Inactivo</option>
                      </select>
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
              <button type="submit" class="btn btn-primary" data-toggle="modal">Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Estrucura del model Eliminar-->
    <div
      class="modal fade"
      id="EliminarModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" id="myModal">
          <div class="modal-header">
            <h5 class="modal-title" id="EliminarModal">Tipo de documento</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="EliminarTipoDoc()" >
            <div class="modal-body">
              <div class="row">
                <div class="col-md-12 text-center">
                    <img class="img-responsive" src="../../../content/img/error.png" width="160 " height="160" alt="User">
                    <h1 style="">¿Estás seguro de eliminar el registro? </h1>
                </div>  
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-danger" data-toggle="modal">Sí</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Estrucura del model Actualizar-->
    <div
      class="modal fade"
      id="ActualizarModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content" id="myModal">
          <div class="modal-header">
            <h5 class="modal-title" id="ActualizarModal">Actualizar programa de formación</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="ActualizarTipoDoc()">
            <div class="modal-body">
              <div class="row">
                <div class="col-md-8">
                  <input
                    type="text"
                    class="form-control my-2"
                    placeholder="Nombre del programa de formación"
                    v-model="TipoDocID.TipdocNombre"
                  />
                </div>
                <!-- Combo box -->
                <div class="col-md-3">
                  <div class>
                    <div class="form-group row">
                      <select
                        class="form-control select2"
                        style="margin-top: 6.5%;"
                        v-model="TipoDocID.TipdocEstado"
                      >
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                      </select>
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
              <button type="submit" class="btn btn-success" data-toggle="modal">Actualizar</button>
            </div>
          </form>
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
      //ruta: "http://10.224.0.250:4000/api/tipoDocumento", //Ruta de la API a la cuan se envian las peticiones
      ruta: "http://localhost:4000/api/tipoDocumento", //Ruta de la API a la cuan se envian las peticiones
      Tipodocumento: [], //Arreglo para obtener all users
      mensaje: { color: "success", texto: "Mensjaje" }, //mensaje por defecto alerta
      dismissSecs: 5, //Parametros de la alerta
      dismissCountDown: 0, //Parametros de la alerta
      datos: { TipdocNombre: "", TipdocEstado: "Activo" }, //datos para agregar un usuario asociados al vmodel delos campos agregar
      editar: false, //valor para habilitar el formulario de edicion
      TipoDocID: {}, //usuario solo /consula por id  y actualizar
      estado: "" //estado para motrar la alerta
    };
  },
  created() {
    // this.axios.defaults.headers.common['Authorization'] = `Bearer 1111`;
    this.ObtenerTipoDoc();
    this.cerrarModal();
  },
  methods: {
     AgregarTipoDoc() {
      console.log(this.datos);
      fetch(this.ruta + "/", {
        method: "POST",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          Accept: "application/json",
          "Content-type": "application/json",
          RolSeleccionado: localStorage.getItem("sessionrol")
        },
        body: JSON.stringify(this.datos)
      })
        .then(res => res.json())
        .then(data => {
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            this.estado = data.Error.message;
            //alert(this.estado)
            this.tokenInvalido();
          } else {
            //console.log(data);
            this.showAlert();
            this.ObtenerTipoDoc();
          }
        })
        .catch(e => {
          console.log(e);
          this.showAlert();
          this.ObtenerTipoDoc();
        });
      this.ObtenerTipoDoc();
      this.cerrarModal();
    },
    ObtenerTipoDoc() {
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
            this.Tipodocumento = data;
          }
        })
        .catch(e => {
          console.log(e + ' Mk error');
        });
    },
    ConsultarTipoDocID(codigo){
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
            this.TipoDocID = data[0];
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    ActualizarTipoDoc(){
      fetch(this.ruta + "/" + this.TipoDocID.TipdocCodigo, {
        method: "PUT",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          Accept: "application/json",
          "Content-type": "application/json",
          RolSeleccionado: localStorage.getItem("sessionrol")
        },
        body: JSON.stringify(this.TipoDocID)
      })
        .then(res => res.json())
        .then(data => {
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            
            this.tokenInvalido();
          } else {
            //console.log(data);  
            this.ObtenerTipoDoc();
          }
        })
        .catch(e => {
          console.log(e + ' mk error');
          this.ObtenerTipoDoc();

        });
      this.ObtenerTipoDoc();
      this.cerrarModal();
    },
    EliminarTipoDoc(codigo) {
    fetch(this.ruta + "/" + this.TipoDocID.TipdocCodigo, {
      method: "DELETE",
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
            //alert(this.estado)
            this.tokenInvalido();
          } else {
            //console.log(data);
            // this.showAlert();
            this.ObtenerTipoDoc();
          }
        })
        .catch(e => {
          console.log(e);
          this.ObtenerTipoDoc();
        });
        this.ObtenerTipoDoc();
        this.cerrarModal(); 
    },
    cerrarModal() {
      $("#AgregarModal").modal("hide"),
      $("#ActualizarModal").modal("hide");
      $("#EliminarModal").modal("hide");
    }
  }
};
</script>