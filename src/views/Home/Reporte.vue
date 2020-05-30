<template>
  <div>
    <div id="principal" class="card col-md-10 mx-auto" style="margin-top:3%;">
      <div class="card-header" style="" >
        <h5 class="text-center mx-auto" ><b>REPORTE DE VOTACION</b></h5>
      </div>
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
                  <div class="col-md-8" style="font-size:14px">
                   <b> {{item.Nombre}}:</b>

                  </div>
                  <div class="col-md-2 offset-1 text-right"  style="font-size:14px" >
                   {{item.Votacion}}

                  </div>
                  </div>
                  <div class="row" style="margin-top: 5%">
                  <div class="col-md-8" style="font-size:18px">
                   <b>TOTAL DE VOTOS:</b>

                  </div>
                  <div class="col-md-2 offset-1 text-right"  style="font-size:18px" >
                   <b>{{this.yavot}}</b>

                  </div>
                  </div>

                  <div class="row" style="margin-top: 2%">
                  <div class="col-md-8" style="font-size:18px">
                   <b>APRENDICES HABILITADOS:</b>

                  </div>
                  <div class="col-md-2 offset-1 text-right"  style="font-size:18px" >
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
  </div>
</template>
<style type="text/css" media="print">
div.page {
writing-mode: tb-rl;
height: 80%;
margin: 10% 0%;
}
</style>


<script>
export default {
  data() {
    return {
      //ruta1: "http://10.224.0.250:4000/api/reporte/candidatos2/", //Ruta de la API a la cuan se envian las peticiones
      //ruta2: "http://10.224.0.250:4000/api/reporte/aptos/", //Ruta de la API a la cuan se envian las peticiones
      //ruta3: "http://10.224.0.250:4000/api/reporte/si/", //Ruta de la API a la cuan se envian las peticiones
      //ruta4: "http://10.224.0.250:4000/api/reporte/no/", //Ruta de la API a la cuan se envian las peticiones
      //ruta5: "http://10.224.0.250:4000/api/reporte/candidatos/", //Ruta de la API a la cuan se envian las peticiones
      ruta1: "http://localhost:4000/api/reporte/candidatos2/", //Ruta de la API a la cuan se envian las peticiones
      ruta2: "http://localhost:4000/api/reporte/aptos/", //Ruta de la API a la cuan se envian las peticiones
      ruta3: "http://localhost:4000/api/reporte/si/", //Ruta de la API a la cuan se envian las peticiones
      ruta4: "http://localhost:4000/api/reporte/no/", //Ruta de la API a la cuan se envian las peticiones
      ruta5: "http://localhost:4000/api/reporte/candidatos/",
      votcand: [],
      votcand2: {},
      aptos: "",
      yavot: "",
      novot: ""
    };
  },
  created() {
    this.votosporcandidato();
    this.aptosparavotar();
    this.yavotaron();
    this.nohanvotado();
    this.votosporcandidato2();
  },
  methods: {
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

    }
  }
};
</script>