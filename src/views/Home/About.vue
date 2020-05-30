<template>
  <div class="about">
    <div class="about">
      <div class="auth-wrapper">
        <div class="container-fluid h-100">
          <div class="row flex-row h-100 bg-white">
            <div
              class="lavalite-bg"
              :style="{ backgroundImage: 'url('  + require('./Index/444.jpg') + ')' }"
            >
              <div>
                <div class>
                  <div class="col-mx-12 text-center mx-auto" style="margin-top:16%">
                    <div class="col-md-4 offset-4 fondo2">
                      <h5 style="margin-bottom:9%;">Digite Documento de Identidad</h5>
                      <input
                        type="text"
                        class="form-control my-2 text-center col-md-8 mx-auto"
                        placeholder="Documento"
                        v-model="documento"
                      />
                      <div style="padding-top: 10%;">
                        <b-button
                          type="button"
                          data-toggle="modal"
                          data-target="#Consulta"
                          class="my-2 btn-success center-block"
                          @click="Consultar()"
                        >Consultar</b-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Estructura del modal-->
    <div
      class="modal fade"
      id="Consulta"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content " style="" id="myModal">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div v-if="error==false">
              <div class="row" style="margin-top: 2%;">
                <div class="col-md-8 mx-auto text-center">
                  <label  style="margin-bottom:-5%; font-size:14px;" >Nombre:</label>
                  <input
                    type="text"
                    style=" background-color: #E5EDEF; color: #696A6D; font-size:16px; font-weight: Bold;"
                    class="form-control my-2 text-center"
                    placeholder="Nombre"
                    v-model="datos.Nombre"
                    readonly = "readonly"
                    tabindex = -1
                    unselectable ="on"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 text-center">
                  <label  style="margin-bottom:-5%; font-size:14px;" >Documento:</label>
                  <input
                    type="text"
                    style=" background-color: #E5EDEF; color: #696A6D;font-size:16px; font-weight: Bold;"
                    class="form-control my-2 text-center"
                    placeholder="Documento"
                    v-model="datos.Documento"
                    readonly = "readonly"
                    tabindex = -1
                    unselectable ="on"
                  />
                </div>
                <div class="col-md-6 text-center">
                  <label  style="margin-bottom:-5%; font-size:14px;" >Ficha:</label>
                  <input
                    type="text"
                    style="background-color: #E5EDEF; color: #696A6D; font-size:16px; font-weight: Bold;"
                    class="form-control my-2 text-center"
                    placeholder="Ficha"
                    v-model="datos.Ficha"
                    readonly = "readonly"
                    tabindex = -1
                    unselectable ="on"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 text-center">
                  <label  style="margin-bottom:-5%; font-size:14px;" >Formacion:</label>
                  <input
                    type="text"
                    style="background-color: #E5EDEF; color: #696A6D; font-size:16px; font-weight: Bold;"
                    class="form-control my-2 text-center"
                    placeholder="Programa Formacion"
                    v-model="datos.Prog_Form"
                    readonly = "readonly"
                    tabindex = -1
                    unselectable ="on"
                  />
                </div>
                <div class="col-md-6 text-center">
                  <label class=""  style="margin-bottom:-5%; font-size:14px;" >Estado:</label>
                  <input
                    style="background-color: #E5EDEF; color: #696A6D; font-size:16px; font-weight: Bold;"
                    type="text"
                    class="form-control my-2 text-center"
                    placeholder="Estado"
                    v-model="datos.Estado"
                    readonly = "readonly"
                    tabindex = -1
                    unselectable ="on"
                  />
                </div>
              </div>
            </div>
            <div v-if="error==true">
              <h5 class="text-center">No se encontro ningun resultado</h5>
            </div>
            <div class="row">
              <div style="margin-top: 2%;"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" style="background-color: #E5EDEF;" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //ruta: "http://10.224.0.250:4000/api/consulta",
      ruta: "http://localhost:4000/api/consulta",
      mensaje: "",
      documento:'',
      datos: {},
      error: false
    };
  },
  methods: {
    Consultar() {
      fetch(this.ruta + `/${this.documento}`, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data[0]==null) {
            console.log("error");
            this.error = true;
            
          } else {
            console.log("no error");
            this.error = false;
            this.datos = data[0];
            this.documento='';
            
          }
        });
    }
  }
};
</script>