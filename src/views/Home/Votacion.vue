<template>
    <div>
        <header class="header-top" header-theme="light">
            <div id="barras"></div>
        </header>
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="col-md-12 text-center">
                        <h3 >BIENVENIDO A LA JORNADA DE VOTACIÓN</h3>
                        <img src="./Index/Logo.svg" style="margin-top: 2%;" alt="Logo-E-vote" width="300" height="100">
                    </div>
                    <div class="col-md-12" style="margin-top: 2%;">
                        <div class="col-md-4 mx-auto">
                            <div id="cards" class="col-md-12 text-center">
                                <div style="padding-top: 20%;">
                                    <h1><i id="mascara" class="ik ik-user"></i></h1>
                                <form @submit.prevent="sivoto()">
                                    <label style="color: white">Digite su documento de identidad</label>
                                    <input type="text" class="form-control my-2 text-center" placeholder="Documento" v-model="dato.doc">
                                        <div style="padding-top: 10%;">
                                            <b-button  type="submit" class="my-2 btn-success center-block">A votar</b-button >
                                        </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            <footer >
                <div id="barras"></div>
            </footer>
    </div>
   
</template>
<style>
    #barras{
        background: rgb(43, 62, 80);
        height: 70px;
    }
    #cards{
        border-radius: 10%;
        background: rgb(29, 113, 87);
        height: 400px;

    }
    i{
        width: 30px;
        height: 30px;
    }
    #mascara{
        background: white;
        border-radius: 50%;
        
    }
</style>

<script>
export default {
    data() {
        return {
            //ruta:'http://10.224.0.250:4000/api/votante',//Ruta de la API a la cual se envi
            ruta:'http://localhost:4000/api/votante',//Ruta de la API a la cual se envian las peticiones     
            dato: {doc: ''},
            mensaje: ''
        }
    },
    methods: {
        sivoto(doc){
            fetch(this.ruta + "/verificar",{
                method: 'POST',
                mode: 'cors',
                headers:{
                    'Authorization': 'Bearer '+localStorage.getItem('token'),
                    'Accept':'application/json',
                    'Content-type':'application/json',
                    'RolSeleccionado' : localStorage.getItem('sessionrol')
                },
                body:JSON.stringify(this.dato)
            })
            .then( res => res.json())
            .then(data=> {
                
                if(data.Error){//condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
                    this.estado=data.Error.message
                    this.tokenInvalido()
                }else{ 
                    this.mensaje = data[0].mensaje
                    
                    if (this.mensaje === 'Este aprendiz ya realizó su respectivo su voto') {
                        console.log(this.mensaje);  
                    }else{
                        
                        window.location.href = '/Tarjeton'
                    }
                }
            })
            .catch(e =>{
                console.log(e);
            })
        }   
    }
}
</script>