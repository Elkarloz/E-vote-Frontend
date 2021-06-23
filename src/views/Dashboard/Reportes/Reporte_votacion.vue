<template>
    <div id="reporte">
    <div class="card">
      <div class="col-md-12">
        <h1 class="text-center">REPORTE DE VOTACIÓN</h1>
      </div>   
      <div class="card-body ml-auto mr-auto" style="margin: 5% 0">
          <label>Seleccionar un año: </label>
        <div class="row">
          <input class="date-own form-control text-center" id="calendar" style="width: 300px;" :value="`${this.valor}`" >
          <i class="ik ik-calendar ik-2x"></i>
          <div id="block-years">
              <ul class="text-center" v-for="(item, index) in rango" :key="index">
                <button @click="getyear(item)" class="col-md-12">
                    <li>{{item}}</li>
                </button>
              </ul>
          </div>
        </div>
      </div>
      <div class="row" style="margin-bottom: 5% ">
          <button type="button" class="btn btn-success my-2 mx-auto" @click="Consultar(valor)">Buscar</button>
      </div> 
    </div><!-- Reporte -->
    <div id="principal" class="card col-md-12 mx-auto" style="margin-top:3%;" v-show="this.xd === true">
                <div class="">
                    <div class="row">
              <div class="col-md-5" style=" margin-top:1%; border:solid 1px; border-radius: 5px; margin-left:8%">
                <div class="">
                  
                  <div class="">
                    <div id="placeholder2" class="demo-placeholder" style="height: 310px;"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-5" style="margin-top:1%; border:solid 1px; border-radius: 5px; margin-left:2%">
                <div class="col-md-12">
                    <h4 style="margin-top: 2%; margin-bottom:4%;" class="text-center"> <b> Votos por candidato:</b></h4>
                    <div class="col-md-12" >
                      <div >
                        <div class="col-md-12"  >
                          <div class="row" v-for="(item, index) in votcand2" :key="index" style="margin-bottom: 2%">
                          <div class="col-md-8" style="font-size:13px">
                          <b> {{item.Nombre}}:</b>
                          </div>
                          <div class="col-md-2 offset-1 text-right"  style="font-size:14px" >
                          {{item.Votacion}}
                          </div>
                          </div>
                          <div class="row" style="margin-top: 5%">
                          <div class="col-md-6" style="font-size:13px">
                          <b>TOTAL DE VOTOS:</b>
                          </div>
                          <div class="col-md-4 offset-1 text-right"  style="font-size:18px" >
                          <b>{{this.yavot}}</b>
                          </div>
                          </div>
                          <div class="row" style="margin-top: 2%">
                          <div class="col-md-6" style="font-size:13px">
                          <b>HABILITADOS:</b>
                          </div>
                          <div class="col-md-4 offset-1 text-right"  style="font-size:18px" >
                          <b>{{this.aptos}}</b>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-md-8 mx-auto" style="border:solid 1px; border-radius: 5px; margin-top:2%; margin-bottom:2%">
                <div class="" style="margin-top:2%;">
                  
                  <div class="">
                    <div id="placeholder" class="demo-placeholder" style="height:270px;"></div>
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
                      <img class="img-responsive center-block" src="../../../content/img/error.png" width="160 " height="160" alt="User" />
                      <p><br>No existen procesos de votacion en este año<br></p>
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

<style>
  #calendar{
    padding: 0;
    margin: 0;
  }

  #calendar:hover{
    cursor: pointer;
  }

  #block-years ul{
    padding: 0px;
    margin: 0;  
  }

  #block-years ul button{
    background: none;
    border: 0;
    color: inherit;
    padding: 10px;
    margin: 0;
  }

  #block-years ul:hover{
    background: #dcdcdc;
  }

  #block-years li{
      list-style: none;
  }

  #block-years:hover{
    display: block;
  }

  #block-years{
    width: 300px;
    height: 100px;
    display: none;
    border: 1px solid #e7e7e7;
    background: #ffffff;
    border-radius: 10px;
    overflow-y: scroll;
    z-index:1;
    position: absolute;
  }  
</style>

<script>
  $(document).on("click",function(e) {             
    let container = $("#calendar");  
    if (container[0] !== undefined) {
      if (!container.is(e.target) && container.has(e.target).length === 0) { 
          document.getElementById('block-years').style.display = "none";              
      }else{
          document.getElementById('block-years').style.display = "block";
      }
    }
              
      
  });
export default {
  data() {
    return {
      //ruta: "http://10.224.0.250:4000/api/procesoVotacion", //Ruta de la API a la cuan se envian las peticiones
      ruta: "http://localhost:4000/api/procesoVotacion", //Ruta de la API a la cuan se envian las peticiones
      ruta1: "http://localhost:4000/api/reporte/candidatos2/", //Ruta de la API a la cuan se envian las peticiones
      ruta2: "http://localhost:4000/api/reporte/aptos/", //Ruta de la API a la cuan se envian las peticiones
      ruta3: "http://localhost:4000/api/reporte/si/", //Ruta de la API a la cuan se envian las peticiones
      ruta4: "http://localhost:4000/api/reporte/no/", //Ruta de la API a la cuan se envian las peticiones
      ruta5: "http://localhost:4000/api/reporte/candidatos/",
      ruta6: "http://localhost:4000/api/reporte",
      votcand: [],
      votcand2: {},
      aptos: "",
      yavot: "",
      novot: "", 
      DataY: {},
      valor: "",
      rango: [],
      xd: false

    };
  },
  created() {
    this.year();
  },
  methods: {
    Consultar(codigo) {
      fetch(this.ruta6 + `/${codigo}`, {
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
            if (data[0] != undefined) {
              this.votosporcandidato();
              this.aptosparavotar();
              this.yavotaron();
              this.nohanvotado();
              this.votosporcandidato2();
              this.xd = true
              }else{
                this.xd = false
                this.Modalerror();
            }

          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    year(){
      this.DataY = new Date().getFullYear();
      for (let i = this.DataY-10; i <= this.DataY+10; i++) {
        this.rango.push(i)
      }
    },
    getyear(item){
      this.valor = item;
    },
    votosporcandidato() {
      fetch(this.ruta1, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            this.estado = data.Error.message;
            //alert(this.estado)
          } else {
            this.votcand = data;
            //console.log(this.votcand[0].Nombre)
            var arr = [];
            for (var i = 0; i < this.votcand.length; i++) {
              arr[i] = [this.votcand[i].Nombre, this.votcand[i].Votacion];
            }
            this.charts1(arr);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    votosporcandidato2() {
      fetch(this.ruta5, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            this.estado = data.Error.message;
            //alert(this.estado)
          } else {
            this.votcand2 = data;
            
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    aptosparavotar() {
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
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            this.estado = data.Error.message;
            //alert(this.estado)
          } else {
            this.aptos = data.aptos;
            console.log(this.aptos);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    yavotaron() {
      fetch(this.ruta3, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            this.estado = data.Error.message;
            //alert(this.estado)
          } else {
            this.yavot = data.valor;
            console.log(this.yavot);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    nohanvotado() {
      fetch(this.ruta4, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(data => {
          if (data.Error) {
            //condicion q valida si la petcion retorna un JSON con valor 'Error' si es asi es una validacion de token
            this.estado = data.Error.message;
            //alert(this.estado)
          } else {
            this.novot = data.valor;
            console.log(this.novot);
            this.charts2(this.yavot, this.novot);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    charts1(arreglo) {
      $(document).ready(function() {
        $(window).on("resize", function() {
          categoryChart();
        });
        categoryChart();

        /*categories chart*/
        function categoryChart() {
          var data = arreglo;
          $.plot("#placeholder", [data], {
            series: {
              bars: {
                show: true,
                barWidth: 0.4,
                align: "center"
              }
            },
            xaxis: {
              mode: "categories",
              tickLength: 0,
              tickColor: "#f5f5f5"
            },
            colors: ["#01C0C8", "#83D6DE"],
            labelBoxBorderColor: "red"
          });
        }
      });
    },
    charts2(valor1, valor2) {
      $(document).ready(function() {
        $(window).on("resize", function() {
          pieChart();
        });

        pieChart(valor1, valor2);
        /*pie chart-Withour legend*/
        function pieChart(valor1, valor2) {
          var data1 = [
            {
              label: "Total",
              data: valor1,
              color: "#25A6F7"
            },
            {
              label: "Por Votar",
              data: valor2,

              color: "#01C0C8"
            }
          ];

          $.plot("#placeholder2", data1, {
            series: {
              pie: {
                show: true
              }
            },
            legend: {
              show: false
            }
          });
        }
      });
    },
    imprimir(principal){
        var printContents = document.getElementById(p).innerHTML;
        w = window.open();
        w.document.write(printContents);
        w.document.close(); // necessary for IE >= 10
        w.focus(); // necessary for IE >= 10
		w.print();
		w.close();
      return true;
    },
    Modalerror(){
      $("#ModalError").modal("show")
    }
  }
};
</script>

