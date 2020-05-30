<template>
    <div>
        <div class="modal fade" id="Modal-Elimnar-can" role="dialog" aria-labelledby="ModalErrorLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-sm mt-0 mb-0" role="document">
                <div class="modal-content">
                    <div class="center-block">
                        <h5 class="modal-title text-center" id="ModalErrorLabel" style="margin-top:6%;">Advertencia</h5>
                    </div>
                    <div class="modal-body text-center">
                        <div style="font-size:14px;">
                            <img class="img-responsive center-block" src="../../../content/img/Advertencia.png" width="160 " height="160" alt="User" >
                            <h3><br>¿Estás seguro de eliminar tú candidatura?<br></h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn" data-dismiss="modal" style="background: #fdee21" @click="Elimar()">Eliminar</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="atras()">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
$(document).ready(function() {
    $('#Modal-Elimnar-can').modal('toggle')
});
export default {
  data() {
    return {
        //ruta:'http://10.224.0.250:4000/candidato',//Ruta de la API a la cuan se envian las peticiones
        ruta:'http://localhost:4000/api/candidato/',//Ruta de la API a la cuan se envian las peticiones
        codigo: {}
    }
  },
  created() {

    },
  methods: {
      Elimar(){
        this.codigo=localStorage.getItem('CodigoPersona') 
        fetch(this.ruta+'eliminar/'+this.codigo,{
                method: 'POST',
                mode: 'cors',
                headers:{
                    'Authorization': 'Bearer '+localStorage.getItem('token'),
                    'Accept':'application/json',
                    'Content-type':'application/json',
                    'RolSeleccionado' : localStorage.getItem('sessionrol')
                },
        })
        .then( res => res.json())
        .then(data=> {
            if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                this.estado=data.Error.message
                //alert(this.estado)
                this.tokenInvalido()
            }else{
                window.location.href = '/login'
            }
            

        })
        .catch(e =>{
            console.log(e);
            this.mensaje.color='danger';
            this.mensaje.texto=e.response.data.message;
            this.showAlert();
            this.ObtenerUsuarios();
        })
    },
    atras(){
      window.location.href = '/dashboard'
    },
  }
};
</script>

