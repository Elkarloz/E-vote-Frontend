<template>
    <div v-if="estado===''">
        <div>
            <b-alert
                :show="dismissCountDown"
                dismissible
                :variant="mensaje.color"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
                class="text-center"
            >
                {{mensaje.texto}}
            </b-alert>
        </div>
        <div class="card">
            <div class="card-header">
                <div class="col-md-12">
                    <h3 class="text-center">AGREGAR VOTANTE</h3>
                </div>
            </div>
        </div>
            <div class="card">
                <div class="card-body">
                    <div class="col-md-12 mx-auto">
                    <form  style="padding-top:1%;" @submit.prevent="AgregarUsuario()">
                        <div class="form-group row mx-auto" >
                            <div class="col-md-4">
                                <input type="text" class="form-control my-2" required placeholder="Documento" v-model="datos.PerDocumento">
                            </div> 
                            <div class="col-md-4">   
                                <input type="text" class="form-control my-2" required placeholder="Nombre" v-model="datos.PerNombre">
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control my-2" required placeholder="Apellido" v-model="datos.PerApellido">
                            </div>
                        </div>
                        <div class="form-group row mx-auto" >
                            <div class="col-md-2">
                                <input type="text" class="form-control my-2" required placeholder="Ficha" v-model="datos.EstFicha">
                            </div>
                            <div class="col-md-3">
                                <select class="form-control my-2" required v-model="datos.JorCodigo">
                                    <option hidden value="">-- Seleciona una Jornada --</option>
                                    <option v-for="(item, index) in comboBox2" :key="index">{{item.JorNombre}}</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-control my-2" required v-model="datos.ProforNombre">
                                    <option hidden value="">-- Seleciona un Programa de formación --</option>
                                    <option v-for="(item, index) in comboBox1" :key="index" >{{item.ProforNombre}}</option>
                                </select>
                            </div>
                             <div class="col-md-3">
                                <select class="form-control my-2" required v-model="datos.TipdocNombre" >
                                    <option hidden value="">-- Seleciona un Tipo de documento --</option>
                                    <option v-for="(item, index) in comboBox3" :key="index" >{{item.TipdocNombre}}</option>
                                </select>
                            </div>

                        </div>
                        <div class="form-group row mx-auto" >
                           
                            <div class="col-md-12 text-center">
                                <b-button  type="submit" class="my-2 btn-success center-block ">Agregar</b-button >
                            </div>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //ruta:'http://10.224.0.250:4000/api/usuario',//Ruta de la API a la cuan se envian las peticiones
            ruta:'http://localhost:4000/api/usuario',//Ruta de la API a la cuan se envian las peticiones
            Usuario:[],//Arreglo para obtener all users
            mensaje: {color: 'success', texto: 'Mensjaje'},//mensaje por defecto alerta
            dismissSecs: 5,//Parametros de la alerta
            dismissCountDown: 0,//Parametros de la alerta
            datos:{PerDocumento:'',PerNombre:'',PerApellido:'',EstFicha:'', JorCodigo:'', ProforNombre:'', SexNombre:'Masculino',TipdocNombre:''},//datos para agregar un usuario asociados al vmodel delos campos agregar
            editar: false,//valor para habilitar el formulario de edicion
            UsuarioID: {},//usuario solo /consula por id  y actualizar
            estado:'',//estado para motrar la alerta
            comboBox1:{},
            comboBox2:{},
            comboBox3:{}
        }
    },
    created() {
        this.ConsultarcomboBox1();
        this.ConsultarcomboBox2();
        this.ConsultarcomboBox3();
    },
methods: {
    AgregarUsuario(){
        console.log(this.datos);
        fetch(this.ruta,{
                method: 'POST',
                mode: 'cors',
                headers:{
                    'Authorization': 'Bearer '+localStorage.getItem('token'),
                    'Accept':'application/json',
                    'Content-type':'application/json',
                    'RolSeleccionado' : localStorage.getItem('sessionrol')
                },
                body:JSON.stringify(this.datos)
        })
        .then( res => res.json())
        .then(data=> {
            if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                this.estado=data.Error.message
                //alert(this.estado)
                this.tokenInvalido()
            }else{
                //console.log(data);
            this.mensaje.color='success';
            this.mensaje.texto= data.message;
            this.showAlert();
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
    ConsultarcomboBox1(){
        fetch(this.ruta + "/comboBox1",{
            method: 'GET',
            mode: 'cors',
            headers:{
                'Authorization': 'Bearer '+localStorage.getItem('token'),
                'Accept':'application/json',
                'Content-type':'application/json',
                'RolSeleccionado' : localStorage.getItem('sessionrol')
            }
        })
        .then( res => res.json())
        .then(data=> {
            if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                this.estado=data.Error.message
                //alert(this.estado)
                this.tokenInvalido()
            }else{ 
                this.comboBox1=data
              //  console.log(this.comboBox);
            }
        })
        .catch(e =>{
            console.log(e);
        })
    },
    ConsultarcomboBox2(){
        fetch(this.ruta + "/comboBox2",{
            method: 'GET',
            mode: 'cors',
            headers:{
                'Authorization': 'Bearer '+localStorage.getItem('token'),
                'Accept':'application/json',
                'Content-type':'application/json',
                'RolSeleccionado' : localStorage.getItem('sessionrol')
            }
        })
        .then( res => res.json())
        .then(data=> {
            if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                this.estado=data.Error.message
                //alert(this.estado)
                this.tokenInvalido()
            }else{ 
                this.comboBox2=data
              //  console.log(this.comboBox);
            }
        })
        .catch(e =>{
            console.log(e);
        })
    },
    ConsultarcomboBox3(){
        fetch(this.ruta + "/comboBox3",{
            method: 'GET',
            mode: 'cors',
            headers:{
                'Authorization': 'Bearer '+localStorage.getItem('token'),
                'Accept':'application/json',
                'Content-type':'application/json',
                'RolSeleccionado' : localStorage.getItem('sessionrol')
            }
        })
        .then( res => res.json())
        .then(data=> {
            if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                this.estado=data.Error.message
                //alert(this.estado)
                this.tokenInvalido()
            }else{ 
                this.comboBox3=data
              //  console.log(this.comboBox);
            }
        })
        .catch(e =>{
            console.log(e);
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