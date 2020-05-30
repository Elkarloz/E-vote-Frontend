<template>
    <div>
    <div class="card">
        <div class="card-header">
            <div class="col-md-12">
                <h3 class="text-center">CONSULTAR PROPUESTAS</h3>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="col-md-12 mx-auto row" style="padding-top: 5%">
            <div class="ml-auto mr-auto" tr v-for="(item, index) in datos" :key="index">
                <div class="card-prop text-center">
                        <img :src="`${item.CanFotoRuta}`" width="330px" height="350px">
                        <i class="ik ik-message-square ik-3x offset-10" ></i>
                        <h2 style="padding-top:5%" class="text-center">{{item.nombre}}</h2>
                        <h6 style="padding-top:5%" class="text-center">N° tarjetón:{{item.CanNTarjeton}}</h6>
                        <h2 style="padding-top:5%" class="text-center">{{item.ProNombre}}</h2>
                        <h6 style="padding-bottom:10%;" id="Mod-des">{{item.ProDescripcion}}</h6>
                </div>
            </div>
        </div>
    <div class="card"></div> 
    <!-- Modal -->
    <div class="modal fade ml-auto mr-auto" id="ModalError" role="dialog" aria-labelledby="ModalErrorLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-sm mt-0 mb-0" role="document">
                <div class="modal-content">
                    <div class="center-block">
                        <h5 class="modal-title text-center" id="ModalErrorLabel" style="margin-top:6%;"> ERROR</h5>
                    </div>
                    <div class="modal-body text-center">
                        <div style="font-size:14px;">
                            <img class="img-responsive center-block" src="../../../content/img/error.png" width="160 " height="160" alt="User" />
                            <h5><br>No existen propuestas aún<br></h5>
                        </div>
                        <div class="">
                            <button type="button" class="btn waves-effect bg-red" @click="atras()" data-dismiss="modal">Cerrar</button>
                        </div>
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
            //ruta:'http://10.224.0.250:4000/api/candidato',//Ruta de la API a la cuan se envian las peticiones
            ruta:'http://localhost:4000/api/propuesta',//Ruta de la API a la cuan se envian las peticiones
            mensaje: {color: 'success', texto: 'Mensjaje'},//mensaje por defecto alerta
            dismissSecs: 5,//Parametros de la alerta
            dismissCountDown: 0,//Parametros de la alerta,
            datos: {}
        }
    },
    created() {
        this.Obtenerpropuestas()
    },
methods: {
    Obtenerpropuestas() {
      fetch(this.ruta, {
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
              if (this.datos=data[0] === undefined) {
                this.abrirModal()
              }else{
                  this.datos=data;
              }
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
    },
    abrirModal() {
        $("#ModalError").modal("show");
    },
    atras(){
        window.location.href = '/dashboard'
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
    }
  }
}

</script>