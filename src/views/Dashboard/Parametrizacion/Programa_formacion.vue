<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="col-md-12">
          <h3 class="text-center">PROGRMA DE FORMACIÓN</h3>
        </div>
      </div>
    </div>

        <div class="card">
          <div class="card-body" >
            <div class="table-hover" id="table-mod">
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
                    <tr tr v-for="(item, index) in Programa_formacion" :key="index">
                      <td>{{item.ProforCodigo}}</td>
                      <td>{{item.ProforNombre}}</td>
                      <td>{{item.ProforEstado}}</td>
                      <td>
                        <div class="table-actions" style="margin-right:20%;">
                          <button
                            data-toggle="modal"
                            data-target="#ActualizarModal"
                            class="btn btn-secondary btn-icon ml-2 mb-2"
                            @click="ConsultarFormacionID(item.ProforCodigo)"
                          >
                            <i class="ik ik-edit-2"></i>
                          </button>
                          <button
                            data-toggle="modal"
                            data-target="#EliminarModal"
                            class="btn btn-danger btn-icon ml-2 mb-2"
                            @click="ConsultarFormacionID(item.ProforCodigo)"
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
                    <button data-toggle="modal" data-target="#AgregarModal" class="btn btn-success btn-icon ml-2 mb-2">
                      <i class="ik ik-plus" data-toggle="modal" data-target="#AgregarModal"></i>
                    </button>
                  </div>
                </div>
              </div>
          </div>
        </div>
    <!-- Estructura del model Agregar-->
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
            <h5 class="modal-title" id="exampleModalCenterLabel">Agregar nuevo programa de formación</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="AgregarFormacion()">
            <div class="modal-body">
              <div class="row">
                <div class="col-md-8">
                  <input
                    type="text"
                    class="form-control my-2"
                    placeholder="Nombre del programa de formación"
                    v-model="datos.ProforNombre"
                  />
                </div>
                <!-- Combo box -->
                <div class="col-md-3">
                  <div class>
                    <div class="form-group row">
                      <select class="form-control select2" style="margin-top: 6.5%;" v-model="datos.ProforEstado">
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
            <h5 class="modal-title" id="EliminarModal">Eliminar programa de formación</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="EliminarFormacion()" >
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
          <form @submit.prevent="ActualizarFormacion()">
            <div class="modal-body">
              <div class="row">
                <div class="col-md-8">
                  <input type="text" class="form-control my-2" placeholder="Nombre del programa de formación" v-model="FormacionID.ProforNombre"/>
                </div>
                <!-- Combo box -->
                <div class="col-md-3">
                  <div class>
                    <div class="form-group row">
                      <select class="form-control select2" style="margin-top: 6.5%;" v-model="FormacionID.ProforEstado" >
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
/* #table-mod{
  height: 500px;
  overflow-y: scroll;
} */
</style>
<script>
export default {
  data() {
    return {
      //ruta: "http://10.224.0.250:4000/api/programaFormacion", //Ruta de la API a la cuan se envian las peticiones
      ruta: "http://localhost:4000/api/programaFormacion", //Ruta de la API a la cuan se envian las peticiones
      Programa_formacion: [], //Arreglo para obtener all users
      mensaje: { color: "success", texto: "Mensjaje" }, //mensaje por defecto alerta
      dismissSecs: 5, //Parametros de la alerta
      dismissCountDown: 0, //Parametros de la alerta
      datos: { ProforNombre: "", ProforEstado: "Activo" }, //datos para agregar un usuario asociados al vmodel delos campos agregar
      editar: false, //valor para habilitar el formulario de edicion
      FormacionID: {}, //usuario solo /consula por id  y actualizar
      estado: "" //estado para motrar la alerta
    };
  },
  created() {
    // this.axios.defaults.headers.common['Authorization'] = `Bearer 1111`;
    this.ObtenerFormacion();
    this.cerrarModal();
  },
  methods: {
    ObtenerFormacion() {
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
            this.Programa_formacion = data;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    AgregarFormacion() {
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
            this.ObtenerFormacion();
          }
        })
        .catch(e => {
          console.log(e);
          this.showAlert();
          this.ObtenerFormacion();
        });
      this.ObtenerFormacion();
      this.cerrarModal();
    },
    ConsultarFormacionID(codigo) {
      this.editar = true;
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
            this.FormacionID = data[0];
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    ActualizarFormacion() {
      // console.log(JSON.stringify(this.UsuarioID));
      fetch(this.ruta + "/" + this.FormacionID.ProforCodigo, {
        method: "PUT",
        mode: "cors",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          Accept: "application/json",
          "Content-type": "application/json",
          RolSeleccionado: localStorage.getItem("sessionrol")
        },
        body: JSON.stringify(this.FormacionID)
      })
        .then(res => res.json())
        .then(data => {
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            
            this.tokenInvalido();
          } else {
            //console.log(data);  
            this.ObtenerFormacion();
          }
        })
        .catch(e => {
          console.log(e + ' mk error');
          this.mensaje.color = "danger";
          this.mensaje.texto = e.response.data.message;
          this.showAlert();
          this.ObtenerFormacion();

        });
      this.ObtenerFormacion();
      this.cerrarModal();
    },
    EliminarFormacion(codigo) {
      fetch(this.ruta + "/" + this.FormacionID.ProforCodigo, {
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
            this.ObtenerFormacion();
          }
        })
        .catch(e => {
          console.log(e);
          this.mensaje.color = "danger";
          this.mensaje.texto = e.response.data.message;
          this.showAlert();
          this.ObtenerFormacion();
        });
        this.ObtenerFormacion();
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