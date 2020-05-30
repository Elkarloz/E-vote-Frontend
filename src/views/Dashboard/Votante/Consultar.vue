<template>
    <div>   
       
    <div class="card">
        <div class="card-header">
            <div class="col-md-12">
            <h3 class="text-center">CONSULTAR VOTANTE</h3>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-body">
            <div class="col-md-12"> 
                 <form id="formulario" @submit.prevent="ConsultarxParametro(PorParametros.PerDocumento,PorParametros.PerNombre,PorParametros.PerApellido,PorParametros.EstFicha,PorParametros.JorNombre,PorParametros.ProforNombre)">
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
                <div class="form-group row mx-auto">
                  <div class="col-sm-4">
                    <input type="text" class="form-control my-2" placeholder="Ficha" v-model="PorParametros.EstFicha"/>
                  </div>
                  <div class="col-md-4">
                    <select class="form-control my-2" v-model="PorParametros.ProforNombre">
                      <option hidden value="">-- Selecione un Programa de formación --</option>
                      <option v-for="(item, index) in comboBox1" :key="index">{{item.ProforNombre}}</option>
                    </select>   
                  </div>
                  <div class="col-md-4">
                    <select class="form-control my-2" v-model="PorParametros.JorNombre">
                      <option hidden value="">-- Selecione una jornada --</option>
                      <option v-for="(item, index) in comboBox2" :key="index">{{item.JorNombre}}</option>
                    </select>   
                  </div>
                </div>
                <!-- Botton -->
               
                <div class="col-md-12 text-center " id="btnBuscar">
                  <b-button type="submit" class="my-4 btn-success center-block">Buscar</b-button>
                </div>
              </form>
            </div>
        </div>
    </div>
    
    <div class="card" >
        <div class="card-body">
            <div class="col-md-12" id="table-mod">
                <table class="table">
                    <thead>
                        <tr>
                        <th class="text-center">Codigo</th>
                        <th class="text-center">Documento</th>
                        <th class="text-center">Nombre</th>
                        <th class="text-center">Apellido</th>
                        <th class="text-center">Estado</th>
                        <th class="text-center">Accion</th>
                        </tr>
                    </thead>
                    <tbody v-if="consulta===true" >
                        <tr v-for="(item, index) in Usuario" :key="index">
                        <th class="text-center">{{item.PerCodigo}}</th>
                        <td class="text-center">{{item.PerDocumento}}</td>
                        <td class="text-center">{{item.PerNombre}}</td>
                        <td class="text-center">{{item.PerApellido}}</td>
                        <td class="text-center">{{item.PerEstado}}</td>
                        <td>
                          <div class="text-center col-md-12">  
                              <b-button @click="ConsultarUsuarioID(item.PerCodigo)" class="btn-success btn-sm mx-2" data-toggle="modal" data-target="#vermas">Ver mas</b-button>
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
              <h5 class="modal-title" id="exampleModalCenterLabel">Persona</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="ActualizarUsuario()">
              <div class="modal-body">
                    <!-- contenido del modal -->
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>DOCUMENTO:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2" placeholder="Documento" v-model="UsuarioID.PerDocumento"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>NOMBRE:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2" placeholder="Nombre" v-model="UsuarioID.PerNombre" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>APELLIDO:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2" placeholder="Apellido" v-model="UsuarioID.PerApellido" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>ESTADO:</label>
                  </div>
                  <div class="col-md-8">
                    <select class="form-control my-2" v-model="UsuarioID.EstEstado">
                      <option disabled selected>-- Selecione un estado --</option>
                      <option >Activo</option>
                      <option >Inactivo</option>
                    </select>                  
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>FICHA:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2" placeholder="Ficha" v-model="UsuarioID.EstFicha"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>JORNADA:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2" placeholder="Jornada" v-model="UsuarioID.JorNombre"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>PROGRAMA DE FORMACIÓN:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2" placeholder="Programa de formación" v-model="UsuarioID.ProforNombre"/>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4 my-auto">
                    <label>TIPO DE DOCUMENTO:</label>
                  </div>
                  <div class="col-md-8">
                    <input type="text" class="form-control my-2" placeholder="Tipo de documento" v-model="UsuarioID.TipdocNombre"/>
                  </div>
                </div>
                <div class="row">
                  <div style="margin-top: 6%;"></div>
                </div>
              </div>
              <div class="modal-footer"> 
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button v-if="this.rol==='Administrador'" type="submit" class="btn btn-danger" data-toggle="modal" data-target="#modalEliminar" data-dismiss="modal" >Eliminar</button>
                <button v-if="this.rol==='Administrador'" type="submit" class="btn btn-success" data-toggle="modal" @click="cerrarModal()">Actualizar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--Modal Confirmación eliminar -->
  <div
      class="modal fade"
      id="modalEliminar"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterLabel">Eliminar</h5>
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
                    <h3>¿Estás seguro que quieres eliminar el registro de forma permanente?</h3>
                  </div>
                </div>
              </div>
              <div class="row">
                <div style="margin-top: 6%;"></div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              <button type="submit" class="btn btn-danger" data-toggle="modal" data-dismiss="modal" @click="EliminarUsuario()">Sí</button>
            </div>
          </form>
        </div>
      </div>
  </div>
  </div> 

</template>

<style>
#table-mod{
  height: 500px;
  overflow-y: scroll;
}
</style>

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
            datos:{PerDocumento:'',PerNombre:'',PerApellido:'',EstEstado: '', ProforNombre:'', JorNombre:'', SexNombre:'Masculino',TipdocNombre:''},//datos para agregar un usuario asociados al vmodel delos campos agregar
            editar: false,//valor para habilitar el formulario de edicion
            UsuarioID: {},//usuario solo /consula por id  y actualizar
            estado:'',//estado para motrar la alerta
            PorParametros:{ProforNombre:'',JorNombre:''},
            consulta:true,
            comboBox1:{},
            comboBox2:{},
            comboBox3:{},
            rol: localStorage.getItem('sessionrol')
        }
    },
    created() {
        // this.axios.defaults.headers.common['Authorization'] = `Bearer 1111`;
        //this.ObtenerUsuarios();
        //this.cerrarModal();
        this.ConsultarcomboBox1()
        this.ConsultarcomboBox2()
    },
    methods: {
        ObtenerUsuarios(){
            fetch(this.ruta,{
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
                  this.Usuario=data;
                  this.consulta=true;
               }
            })
            .catch(e =>{
                console.log(e);
            })
        },
        ConsultarUsuarioID(codigo){
            this.editar=true
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

                    this.UsuarioID=data[0]
                    this.consulta=true;
               }
                })
            .catch(e =>{
                console.log(e);
            })  
        },
        ActualizarUsuario(){
           // console.log(JSON.stringify(this.UsuarioID));
            fetch(this.ruta+'/'+this.UsuarioID.PerCodigo,{
                    method: 'PUT',
                    mode: 'cors',
                    headers:{
                        'Authorization': 'Bearer '+localStorage.getItem('token'),
                        'Accept':'application/json',
                        'Content-type':'application/json',
                        'RolSeleccionado' : localStorage.getItem('sessionrol')
                    },
                    body:JSON.stringify(this.UsuarioID)
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
                //this.ObtenerUsuarios();
                this.editar=false;
                this.consulta=false;
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
        AgregarUsuario(){
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
                //this.ObtenerUsuarios();
                this.consulta=false;
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
        EliminarUsuario(codigo){
             fetch(this.ruta+'/'+this.UsuarioID.PerCodigo,{
                    method: 'DELETE',
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
                //console.log(data);
                this.mensaje.color='success';
                this.mensaje.texto= data.message;
               // this.showAlert();
                //this.ObtenerUsuarios();
                this.editar=false;
                this.consulta=false;
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
     ConsultarxParametro(DocPer,NomPer,ApePer,Ficha,Jornada,Programa) {
       console.log('hola',Programa)
      if(DocPer==undefined &&  NomPer==undefined && ApePer==undefined && Ficha==undefined && Jornada=='' && Programa==''){
        this.ObtenerUsuarios();
        
      }else if(Programa !=''){
        console.log('puto')
fetch(this.ruta + `/${DocPer}` + `/${NomPer}` + `/${ApePer}` + `/${Ficha}` + `/${undefined}` + `/${Programa}`, {
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
            this.Usuario = data;
           // console.log(this.votante);
            this.PorParametros = {};
          }
        })
        .catch(e => {
          console.log(e);
        });


      }else if(Jornada !=''){
        console.log('puto2')
        fetch(this.ruta + `/${DocPer}` + `/${NomPer}` + `/${ApePer}` + `/${Ficha}` + `/${Jornada}` + `/${undefined}`, {
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
            this.Usuario = data;
           // console.log(this.votante);
            this.PorParametros = {};
          }
        })
        .catch(e => {
          console.log(e);
        });

      }else{
        console.log('puto3')
        fetch(this.ruta + `/${DocPer}` + `/${NomPer}` + `/${ApePer}` + `/${Ficha}` + `/${undefined}` + `/${undefined}`, {
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
            this.Usuario = data;
            //this.votante = {};
            console.log(data);
          }
        })
        .catch(e => {
          console.log(e);
        });
      }


      
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
              //console.log(this.comboBox1);
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
              //console.log(this.comboBox);
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
                this.comboBox2=data
              //console.log(this.comboBox);
            }
        })
        .catch(e =>{
            console.log(e);
        })
    },
    cerrarModal() {
            $("#vermas").modal("hide");
            $("#modalEliminar").modal("hide");
            this.consulta=false;
        }
  }
};
</script>
