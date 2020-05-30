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
                <div class v-if="tarjeton===false">
                  <div class="col-mx-12 text-center mx-auto" style="margin-top:16%">
                    <div class="col-md-4 offset-4 fondo2">
                      <h5 style="margin-bottom:9%;">Digite Documento de Identidad</h5>
                      <input
                        type="text"
                        class="form-control my-2 text-center col-md-8 mx-auto"
                        placeholder="Documento"
                        v-model="documento"
                      />
                      <div style="padding-top: 1%;">
                        <b-button
                          type="button"
                          data-toggle
                          data-target
                          class="my-2 btn-success center-block"
                          @click="Consultar()"
                        >Consultar</b-button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class v-if="tarjeton===true">
                  <div class="col-md-12" style="margin-top:5%">
                    <div
                      class="col-md-10 offset-1 fondotarjeton"
                      style="background-size: 100% 100%; background-repeat:no-repeat; "
                      :style="{ backgroundImage: 'url('  + require('../../content/img/tar.png') + ')' }"
                    >
                      <div class="row" style="margin-top:11.3%;margin-left:18%;">
                        <div class="col-md-3 mx-2" style="margin-top:3%" tr v-for="(item, index) in candidatos" :key="index">
                          <div v-if="item.Nombre==='VOTO EN BLANCO'">
                            <button
                              class
                              style="border-radius: 8px; width:165px; height:180px;"
                              @click="votar(item.Codigo,'Blanco',datos.Documento,item.Nombre)"
                            >
                              <div>
                                <div class="col-md-12 text-center" style="margin-top:5%;">
                                  <img
                                    class
                                    width="90"
                                    height="110"
                                    :src="`${item.Ruta}`"
                                  />
                                </div>
                                <div class style="margin-top:5%;">
                                  <p class="text-center" style="font-size: 12px; margin-top:10%">
                                    {{item.Nombre}}
                                  </p>
                                </div>
                              </div>
                            </button>
                          </div>
                          <div v-if="item.Nombre!='VOTO EN BLANCO'">
                            <button
                              class
                              style="border-radius: 8px; width:165px; height:180px;"
                              @click="votar(item.Codigo,'Normal',datos.Documento,item.Nombre)"
                            >
                              <div>
                                <div class="col-md-12 text-center" style="margin-top:5%;">
                                  <img
                                    class
                                    width="90"
                                    height="110"
                                    :src="`${item.Ruta}`"
                                  />
                                </div>
                                <div class style="margin-top:5%;">
                                  <p class="text-center" style="font-size: 12px;">
                                    <b>({{item.Numero}})  </b>
                                    {{item.Nombre}}
                                  </p>
                                </div>
                              </div>
                            </button>
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
      </div>
    </div>
    <div
      class="modal fade"
      id="ModalError1"
      role="dialog"
      aria-labelledby="ModalErrorLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm mt-0 mb-0" role="document">
        <div class="modal-content">
          <div class="center-block">
            <h5 class="modal-title text-center" id="ModalErrorLabel" style="margin-top:6%;">ERROR</h5>
          </div>
          <div class="modal-body text-center">
            <div style="font-size:14px;">
              <img
                class="img-responsive center-block"
                src="../../content/img/error.png"
                width="160"
                height="160"
                alt="User"
              />
              <p>
                No se encontro Aprendiz Relacionado a ese Documento
                <br />
                <br />
              </p>
            </div>
            <div class>
              <button type="button" class="btn waves-effect bg-red" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="ModalError2"
      role="dialog"
      aria-labelledby="ModalErrorLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm mt-0 mb-0" role="document">
        <div class="modal-content">
          <div class="center-block">
            <h5 class="modal-title text-center" id="ModalErrorLabel" style="margin-top:6%;">ERROR</h5>
          </div>
          <div class="modal-body text-center">
            <div style="font-size:14px;">
              <img
                class="img-responsive center-block"
                src="../../content/img/error.png"
                width="160"
                height="160"
                alt="User"
              />
              <p>
                El Aprendiz Ya Voto
                <br />
                <br />
              </p>
            </div>
            <div class>
              <button type="button" class="btn waves-effect bg-red" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="VotacionGenerada"
      role="dialog"
      aria-labelledby="ModalErrorLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm mt-0 mb-0" role="document">
        <div class="modal-content">
          <div class="center-block">
            <h5
              class="modal-title text-center"
              id="ModalErrorLabel"
              style="margin-top:6%;"
            >VOTO GENERADO</h5>
          </div>
          <div class="modal-body text-center">
            <div style="font-size:14px;">
              <img
                class="img-responsive center-block"
                src="../../content/img/correcto.png"
                width="160"
                height="160"
                alt="User"
              />
              <p>
                {{mensaje}}
                <br />
                <br />
              </p>
            </div>
            <div class>
              <button type="button" class="btn waves-effect bg-success" data-dismiss="modal">Cerrar</button>
            </div>
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
      //ruta2: "http://10.224.0.250:4000/api/voto/candidatos",
      //ruta3: "http://10.224.0.250:4000/api/voto/votar",
      ruta: "http://localhost:4000/api/consulta",
      ruta2: "http://localhost:4000/api/voto/candidatos",
      ruta3: "http://localhost:4000/api/voto/votar",
      mensaje: "",
      documento: "",
      datos: {},
      candidatos: {},
      tarjeton: false,
      mensajevoto: ""
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
          //console.log(data);
          if (data[0] == null) {
            // console.log('entro')
            this.error1();
          } else if (data[0].Estado === "Inactivo") {
            this.error2();
          } else {
            this.error = false;
            this.datos = data[0];
            console.log(this.datos);
            this.documento = "";
            this.ConsultarCandidatos();
            this.tarjeton = true;
          }
        });
    },
    ConsultarCandidatos() {
      fetch(this.ruta2, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          //console.log(data[0]);
          if (data == null) {
            console.log("No hay candidatos");
          } else {
            //this.error = false;
            this.candidatos = data;
            this.documento = "";
            //this.tarjeton=true;
          }
        });
    },
    votar(Codigo, tipo, documento, Nombre) {
      fetch(this.ruta3, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        body: `{"numero":"${Codigo}","documento":"${documento}","tipo":"${tipo}"}`
      })
        .then(res => res.json())
        .then(data => {
          this.mensajevoto = data.message;
        });

      console.log(this.mensajevoto);
      this.mensaje =
        "se genero el voto al candidato " +
        Nombre +
        " por el aprendiz " +
        this.datos.Nombre;
      console.log(this.mensaje);
      this.modalvoto();
      this.tarjeton = false;
    },
    error1() {
      $(function() {
        $("#ModalError1").modal("show");
      });
    },
    error2() {
      $(function() {
        $("#ModalError2").modal("show");
      });
    },
    modalvoto() {
      $(function() {
        $("#VotacionGenerada").modal("show");
      });
    }
  }
};
</script>