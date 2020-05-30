<template>
    <div>
        <div class="auth-wrapper">
            <div class="container-fluid h-100">
                <div class="row flex-row h-100 bg-white">
                    <div class="col-xl-8 col-lg-6 col-md-5 p-0 d-md-block d-lg-block d-sm-none d-none">
                        <div class="lavalite-bg" :style="{ backgroundImage: 'url('  + require('../../content/img/auth/register-bg.jpg') + ')' }">
                            <div class="lavalite-overlay"></div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6 col-md-7 my-auto p-0">
                        <div class="authentication-form mx-auto">
                            <div class="text-center"  style="margin-bottom: 10%">
                                <a href="../index.html"><img src="../Home/Index/Logo.svg" alt=""></a>
                            </div>
                            <h3>Registrese</h3>
                             <form @submit.prevent="Crear()">
                                <div class="form-group">
                                    <input type="text" class="form-control" required placeholder="Documento" v-model="Documento">
                                    <i class="ik ik-user"></i>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" required placeholder="Usuario"  v-model="Usuario">
                                    <i class="ik ik-user"></i>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Contraseña" required v-model="Contraseña1">
                                    <i class="ik ik-lock"></i>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Confirmar Contraseña" required v-model="Contraseña2">
                                    <i class="ik ik-eye-off"></i>
                                </div>
                                <div class="row">
                                </div>
                                <div class="sign-btn text-center">
                                    <button style="background-color:#1D7157;" type="submit" class="btn">Crear Cuenta</button>
                                </div>
                                </form>
                            <div class="register">
                                <p>¿Ya tiene Cuenta? <a href="login">Inicie Sesion</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="ModalError" role="dialog" aria-labelledby="ModalErrorLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-sm mt-0 mb-0" role="document">
                <div class="modal-content">
                    <div class="center-block">
                        <h5 class="modal-title text-center" id="ModalErrorLabel" style="margin-top:6%;"> ERROR</h5>
                    </div>
                    <div class="modal-body text-center">
                        <div style="font-size:14px;">
                            <img class="img-responsive center-block" src="../../content/img/error.png" width="160 " height="160" alt="User" />
                            <p>{{this.mensaje}} <br><br></p>
                        </div>
                        <div class="">
                            <button type="button" class="btn waves-effect bg-red" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
</template>
<script>
export default {
   data(){
       return{
        //ruta:'http://10.224.0.250:4000/api/registro',
        ruta:'http://localhost:4000/api/registro',
        mensaje:'Las contraseñas no coinciden',
        Documento:'',
        Usuario:'',
        Contraseña1:'',
        Contraseña2:''
       }

   },
   methods: {
       Crear(){
           if(this.Contraseña1===this.Contraseña2){
                fetch(this.ruta,{
                    method: 'POST',
                    mode: 'cors',
                    headers:{
                        'Accept':'application/json',
                        'Content-type':'application/json'
                    },
                    body:`{"Documento":"${this.Documento}","Usuario":"${this.Usuario}","Contraseña":"${this.Contraseña1}"}`
            })
            .then( res => res.json())
            .then(data=> {
                //console.log(data.token);
                if(data[0].Mensaje==='Usuario creado satisfacotriamente'){

                   window.location.href = '/login'
                }else{
                    this.mensaje=data[0].Mensaje;
                    this.error();
                    this.Contraseña1='';
                    this.Contraseña2='';

                }
            })
           }else{
               this.Contraseña1='';
               this.Contraseña2='';
               this.error();
           }
          
       },
       error(){
                $(function () {
                    $("#ModalError").modal('show');
                });
                this.Contraseña1='';
                this.Contraseña2='';
       }
   }
}
</script>