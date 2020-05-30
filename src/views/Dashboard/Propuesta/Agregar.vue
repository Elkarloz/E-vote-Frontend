<template>
    <div>
    <div class="card">
        <div class="card-header">
            <div class="col-md-12">
                <h3 class="text-center">AGREGAR PROPUESTAS</h3>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="col-md-12 mx-auto row" style="padding-top: 5%">
            <div class="ml-auto mr-auto" >
                <div class="card-prop text-center">
                        <img :src="`${datos.CanFotoRuta}`" width="330px" height="350px">
                        <i class="ik ik-message-square ik-3x offset-10" ></i>
                        <h2 style="padding-top:5%" class="text-center">{{datos.nombre}}</h2>
                        <h6 style="padding-top:5%" class="text-center">N° tarjetón:{{datos.CanNTarjeton}}</h6>
                        <h2 style="padding-top:5%" class="text-center">{{editar.ProNombre}}</h2>
                        <h6 id="Mod-des">{{editar.ProDescripcion}}</h6>
                </div>
            </div>
        </div>
        <div class="car-body">
            <div class="col-md-12 mx-auto">
                <div class="col-md-10 ">
                  <form @submit.prevent="Agregarpropuestas()">
                    <!-- row 1 -->
                    <div class="form-group row offset-1" style="margin-top: 5%;" >
                        <div class="col-sm-12 row">
                            <div class="col-md-6">
                                <input type="text" class="form-control my-2" placeholder="TITULO" v-model="editar.ProNombre">
                            </div>
                            <div class="col-md-6" v-if="aux === '1'">
                                <button type="submit" class="btn btn-success my-2" >Guardar</button>
                            </div>
                            <div class="col-md-6" v-else>
                                <button type="button" @click="Actualizarpropuestas()" class="btn btn-success my-2" >Actualizar</button>
                            </div>
                        </div> 
                    </div>
                    <div class="row col-md-12 row offset-1">
                    <h6 >Propuestas:</h6>
                      <textarea class="form-control html-editor" rows="10" placeholder="Escriba aquí sus propuestas..." v-model="editar.ProDescripcion"></textarea>   
                    </div>
                  </form>
                  <div class="card"></div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style>
.card-prop{
    width: 550px;
    height: 600px;
    border: 1px solid #e7e7e7;
    background: #e4e4e4;
    border-radius: 10px;
    overflow: auto;
}
#Mod-des{
    padding: 10% 1%;
}
</style>

<script>
export default {
    data() {
        return {
            //ruta:'http://10.224.0.250:4000/api/candidato',//Ruta de la API a la cuan se envian las peticiones
            ruta:'http://localhost:4000/api/candidato',//Ruta de la API a la cuan se envian las peticiones
            ruta2:'http://localhost:4000/api/propuesta',//Ruta de la API a la cuan se envian las peticiones
            mensaje: {color: 'success', texto: 'Mensjaje'},//mensaje por defecto alerta
            dismissSecs: 5,//Parametros de la alerta
            dismissCountDown: 0,//Parametros de la alerta,
            editar: {ProNombre:'TITULO',ProDescripcion:'- Recuerda qué cómo lo guardes se verá cuando la consulten las personas',codigo: localStorage.getItem('CodigoPersona')},  
            datos: {},
            aux: ''

        }
    },
    created() {
        this.Obtenerpropuestas();
        this.Obtenerimg();
    },
methods: {
    Agregarpropuestas(){
        fetch(this.ruta + "/propuestas",{
                method: 'POST',
                mode: 'cors',
                headers:{
                    'Authorization': 'Bearer '+localStorage.getItem('token'),
                    'Accept':'application/json',
                    'Content-type':'application/json',
                    'RolSeleccionado' : localStorage.getItem('sessionrol')
                    
                },
                body:JSON.stringify(this.editar)
        })
        .then( res => res.json())
        .then(data=> {
            if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                this.estado=data.Error.message
                //alert(this.estado)
                this.tokenInvalido()
            }else{
                this.Obtenerpropuestas()
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
    Obtenerpropuestas() {
      fetch(this.ruta + `/propuestas/${this.editar.codigo}`, {
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
              if (data[0] === undefined) {
                this.editar = {ProNombre:'TITULO',ProDescripcion:'- Recuerda qué cómo lo guardes se verá cuando la consulten las personas.',codigo: localStorage.getItem('CodigoPersona')}
                this.aux = "1"
              }else{
                this.editar = data[0];
                this.aux = "2"
                console.log(data[0]);
              }
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    Obtenerimg() {
      fetch(this.ruta2 + `/img/${this.editar.codigo}`, {
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
            this.datos = data[0]
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    Actualizarpropuestas(){
        this.editar.codigo = localStorage.getItem('CodigoPersona')
        fetch(this.ruta + `/propuestas/${this.editar.codigo}`,{
                method: 'PUT',
                mode: 'cors',
                headers:{
                    'Authorization': 'Bearer '+localStorage.getItem('token'),
                    'Accept':'application/json',
                    'Content-type':'application/json',
                    'RolSeleccionado' : localStorage.getItem('sessionrol')
                },
                body:JSON.stringify(this.editar)
        })
        .then( res => res.json())
        .then(data=> {
                if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                this.estado=data.Error.message
                //alert(this.estado)
                this.tokenInvalido()
            }else{
              this.Obtenerpropuestas();
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
    }
  }
}

</script>