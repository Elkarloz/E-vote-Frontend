<template>
    <div>
        
        <div class="card">
      <div class="card-header">
        <div class="col-md-12">
          <h3 class="text-center">ACTUALIZAR DATOS</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body">
            <div class="col-md-12 mx-auto"> 
                <form :action="`${this.rutaimg}`" method="POST" enctype="multipart/form-data" >  
                        <h4 for="imagen" class="text-center">Fotografía del tarjetón</h4>
                    <figure class="col-md-12 mx-auto text-center">
                        <img width="200" height="200" :src="imagen" v-if="user">
                        <img width="200" height="200" :src="`${this.candidatoID.CanFotoRuta}`" v-else-if="this.candidatoID.CanFotoRuta!=null">
                        <img width="200" height="200" src="../../../content/img/users/user2.jpg" v-else>
                    </figure>
                        <div class="col-md-6 offset-5">
                            <input type="file" name="imagen" @change="Obtenerimagen" class="form-control-file " @click="enviarImg()" accept="image/*">
                        </div> 
                        <div class="col-md-12 mx-auto text-center">
                            <b-button  type="submit" class="my-2 btn-success center-block ">Agregar</b-button >
                        </div>   
                </form>
            </div>
          </div>
          </div>
        </div>       
      </div>     
    </div> 

</template>
<style>
  #asas{
    background: #dee2e6;
  }
</style>
<script>

export default {
  data() {
    return {
      rutaimg: 'http://localhost:4000/api/candidato/subir/',
      //ruta: "http://10.224.0.250:4000/api/candidato",
      ruta: "http://localhost:4000/api/candidato", //Ruta de la API a la cuan se envian las peticiones
      candidato: [], //Arreglo para obtener all users
      mensaje: { color: "success", texto: "Mensjaje" }, //mensaje por defecto alerta
      dismissSecs: 5, //Parametros de la alerta
      dismissCountDown: 0, //Parametros de la alerta
      img: '',
      user: false,
      candidatoID:{}
    };
  },
  created() {
    this.obtenercodcand();
    
    
  },
  methods: {
    enviarImg(){
      this.user=true;  
    },

    obtenercodcand(){
       fetch(this.ruta+ "/id/"+localStorage.getItem('CodigoPersona'), {
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

            this.tokenInvalido();
          } else {

            this.candidatoID = data;
            //console.log(this.candidatoID.CanCodigo)
            //console.log(this.candidatoID.CanCodigo);
            this.rutaimg=this.rutaimg+this.candidatoID.CanCodigo;
            console.log("entrar")
            console.log(this.candidatoID.CanFotoRuta);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
    ,
    Obtenerimagen(e){
      //change
      let file = e.target.files[0];
      this.cargarImagen(file);
      console.log(this.rutaimg)
    },
    /* subirimagen(){
      let formData = new FormData();
      let file = document.querySelector("input[type='file']");
      formData.append('username', 'abc123');
      formData.append('imagen', file.files[0]);
      
      fetch(this.ruta + "/subir",{
        method: "POST",
        mode: "cors",
        body: JSON.stringify(formData),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          Accept: "application/json",
          "Content-type": "application/json",
          RolSeleccionado: localStorage.getItem("sessionrol"),
        },
      })
      .then(res => res.json())
      .then(data => {
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            this.estado = data.Error.message;
            //alert(this.estado)
            this.tokenInvalido();
          } else {
            console.log('subio xd');
          }
        })
        .catch(e => {
          console.log(e);
        });
    }, */
    cargarImagen(file){
      let read = new FileReader();
      
      read.onload = (e) =>{
        this.img =  e.target.result;
      }

      read.readAsDataURL(file);

    },

},
  computed: {
    imagen(){
      return this.img;
    }
  }
}

</script>