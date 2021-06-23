<template>
  <div>
    <div class="card">
        <div class="card-header">
            <div class="col-md-12">
                <h3 class="text-center">Registrar inscripción</h3>
            </div>
        </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="col-md-10 offset-0">
              <form @submit.prevent="Crear()">
                 <!-- row 1 -->
                <div class="form-group row" id="txt">
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" required placeholder="Documento" v-model="datos.Documento">
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" required placeholder="Nombre" v-model="datos.Nombre">
                    </div> 
                    <div class="col-sm-4">   
                    <input type="text" class="form-control my-2" required placeholder="Apellido" v-model="datos.Apellido">
                    </div>
                </div>
                 <!-- row 2 -->
                <div class="form-group row" id="txt">
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" required placeholder="Ficha" v-model="datos.Ficha">
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" required placeholder="Jornada" v-model="datos.Jornada">
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" required placeholder="Programa de formación" v-model="datos.Formacion">
                    </div>
                </div>
                 <!-- row 3 -->
                <div class="form-group row" id="txt">
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" required placeholder="Tipo de documento" v-model="datos.Tipdoc">
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" required placeholder="Correo electrónico" v-model="datos.Correo1">
                    </div>
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" required placeholder="Correo electrónico Misena" v-model="datos.Correo2">
                    </div>
                </div>
                <!-- row 4 -->
                <div class="form-group row" id="txt">
                    <div class="col-sm-4">
                        <input type="text" class="form-control my-2" required placeholder="Nivel de formación" v-model="datos.Nivel">
                    </div>
                    <!-- Botton -->
                    <div class="col-sm-2">
                        <b-button type="submit" class="my-3 btn-success center-block">Generar Inscripcion</b-button>
                    </div>
                    <div class="col-sm-4">
                    </div>
                </div>          
              </form>
            </div>
          </div>
        </div>
    
      </div>
    </div>
    <!-- Modal Error -->
        <div
            class="modal fade"
            id="Modalerror"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterLabel"
            aria-hidden="true"
        >   
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterLabel">Error</h5>
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
                            <h3>{{mensaje}}</h3>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div style="margin-top: 6%;"></div>
                    </div>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
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
   data(){
       return{
        //ruta:'http://10.224.0.250:4000/api/aspirante/Registrar',
        ruta:'http://localhost:4000/api/aspirante/Registrar',
        mensaje:'',
        datos: {Documento: '', Nombre: '', Apellido: '',Ficha: '',Jornada:'',Formacion:'',Tipdoc:'',Correo1:'',Correo2:'',Codigo: '', Nivel: ''},
        mensaje: ''       
       }

   },
   methods: {
       Crear(){
           this.datos.Codigo = localStorage.getItem('CodigoPersona')
           fetch(this.ruta,{
                    method: 'POST',
                    mode: 'cors',
                    headers:{
                        'Accept':'application/json',
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify(this.datos)
            })
            .then( res => res.json())
            .then(data=> {
                //console.log(data.token);
                console.log(data.message)
                if (data.message === "Ocurrio un error") {
                    alert("No te puedes registrar, revisa si hoy es fecha de incricion a aspirante, o si existe un proceso de votacion activo")
                }
                if (data[0][0].Mensaje === 'No te puedes registrar, revisa si hoy es fecha de incricion a aspirante, o si existe un proceso de votacion activo') {
                    this.mensaje = data[0][0].Mensaje                    
                    this.abrirError();
                    console.log("entro")
                } else {
                    window.location.href = '/login'
                }
            })
       },
       abrirError(){
           $("#Modalerror").modal("show");
       },
   }
}
</script>