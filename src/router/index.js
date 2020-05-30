import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Home/Index/Index.vue'
import Votacion from '../views/Home/Votacion.vue'
import tarjeton from '../views/Home/Tarjeton.vue'
import Registro from '../views/Home/Registro.vue'
import Reporte from '../views/Home/Reporte.vue'
import Home from '../views/Home/Home.vue'
import About from '../views/Home/About.vue'
import Usuario from '../views/Dashboard/Persona/Usuario.vue'
import Login from '../views/Home/Login.vue'
import Dashboard from '../views//Dashboard/Index/Index.vue'
import Dashboard_index from '../views/Dashboard/index.vue'
import Proc_votacion_Consultar from '../views/Dashboard/Proceso_votacion/Consultar.vue'
import Proc_votacion_Agregar from '../views/Dashboard/Proceso_votacion/Agregar.vue'
import Persona_consultar from '../views/Dashboard/Persona/Consultar.vue'
import Persona_agregar from '../views/Dashboard/Persona/Agregar.vue'
import Votante_consultar from '../views/Dashboard/Votante/Consultar.vue'
import Votante_agregar from '../views/Dashboard/Votante/Agregar.vue'
import Votante_Impor_archivo from '../views/Dashboard/Votante/Importar_Archivo'
import Votante_Dat_personales from '../views/Dashboard/Votante/Datos_personales'
import Aspirante_consultar_inscrip from '../views/Dashboard/Aspirante/Consultar_inscripciones.vue'

import Aspirante_consultar_estado from '../views/Dashboard/Aspirante/Consultar_estado.vue'
import Aspirante_actualizar_inf from '../views/Dashboard/Aspirante/Actualizar_informacion.vue'
import Aspirante_agregar_doc from '../views/Dashboard/Aspirante/Agregar_doc.vue'
import Aspirante_eliminar_inscrip from '../views/Dashboard/Aspirante/Eliminar_incripcion.vue'
import Aspirante_reg_Est from '../views/Dashboard/Aspirante/Reg_Est.vue'
import Candidatos_consultar from '../views/Dashboard/Cadidato/Consultar.vue'
import Candidatos_actualizar from '../views/Dashboard/Cadidato/Actualizar.vue'
import Candidatos_eliminar from '../views/Dashboard/Cadidato/Eliminar.vue'
import Reporte_votacion from '../views/Dashboard/Reportes/Reporte_votacion.vue'
import Parametro_program_form from '../views/Dashboard/Parametrizacion/Programa_formacion.vue'
import Parametro_jornada from '../views/Dashboard/Parametrizacion/Jornada.vue'
import Parametro_sexo from '../views/Dashboard/Parametrizacion/Sexo.vue'
import Parametro_tipo_doc from '../views/Dashboard/Parametrizacion/Tipo_documento.vue'
import Parametro_funciones from '../views/Dashboard/Parametrizacion/Funciones.vue'
import Propuesta_consultar from '../views/Dashboard/Propuesta/Consultar.vue'
import Propuesta_agregar from '../views/Dashboard/Propuesta/Agregar.vue'
import plantilla from '../views/Dashboard/Index/plantilla.vue'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: '',
    component: Index,
    children:[
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/Votacion',
        name: 'votacion',
        component: Votacion
      },
      {
        path: '/Tarjeton',
        name: 'tarjeton',
        component: tarjeton
      },
      {
        path: '/Registro',
        name: 'Registro',
        component: Registro
      },
      {
        path: '/Reporte',
        name: 'Reporte',
        component: Reporte
      }
    ]
  },
  {
    path: '/dashboard',
    name: '',
    component: Dashboard,
    children:[
      {
        path: '/',
        name: 'dashboard_index',
        component: Dashboard_index
      },
      {
        path: '/dashboard/procvotacion/Consultar',
        name: 'Proc_votacion_Consultar',
        component: Proc_votacion_Consultar
      },
      {
        path: '/dashboard/procvotacion/agregar',
        name: 'Proc_votacion_Agregar',
        component: Proc_votacion_Agregar
      },
      {
        path: '/dashboard/persona/consultar',
        name: 'Persona_consultar',
        component: Persona_consultar
      },
      {
        path: '/dashboard/persona/agregar',
        name: 'Persona_agregar',
        component: Persona_agregar
      }, 
      {
        path: '/dashboard/votante/consultar',
        name: 'Votante_consultar',
        component: Votante_consultar
      },
      {
        path: '/dashboard/votante/agregar',
        name: 'Votante_agregar',
        component: Votante_agregar
      },
      {
        path: '/dashboard/votante/impor_archivo',
        name: 'Votante_Impor_archivo',
        component: Votante_Impor_archivo
      },
      {
        path: '/dashboard/votante/dat_personales',
        name: 'Votante_Dat_personales',
        component: Votante_Dat_personales
      },
      {
        path: '/dashboard/aspirante/consultar_inscrip',
        name: 'Aspirante_consultar_inscrip',
        component: Aspirante_consultar_inscrip
      },
      {
        path: '/dashboard/aspirante/consultar_estado',
        name: 'Aspirante_consultar_estado',
        component: Aspirante_consultar_estado
      },
      {
        path: '/dashboard/aspirante/actualizar_inf',
        name: 'Aspirante_actualizar_inf',
        component: Aspirante_actualizar_inf
      },
      {
        path: '/dashboard/aspirante/agregar_doc',
        name: 'Aspirante_agregar_doc',
        component: Aspirante_agregar_doc
      },
      {
        path: '/dashboard/aspirante/eliminar_inscrip',
        name: 'Aspirante_eliminar_inscrip',
        component: Aspirante_eliminar_inscrip
      },
      {
        path: '/dashboard/aspirante/Reg_Estudiante',
        name: 'Aspirante_reg_Est',
        component: Aspirante_reg_Est
      },
      {
        path: '/dashboard/candidatos/consultar',
        name: 'Candidatos_consultar',
        component: Candidatos_consultar
      },
      {
        path: '/dashboard/candidatos/actualizar',
        name: 'Candidatos_actualizar',
        component: Candidatos_actualizar
      },
      {
        path: '/dashboard/candidatos/eliminar',
        name: 'Candidatos_eliminar',
        component: Candidatos_eliminar
      },
      {
        path: '/dashboard/reporte/votacion',
        name: 'Reporte_votacion',
        component: Reporte_votacion
      },
      {
        path: '/dashboard/parametro/program_form',
        name: 'Parametro_program_form',
        component: Parametro_program_form
      },
      {
        path: '/dashboard/parametro/jornada',
        name: 'Parametro_jornada',
        component: Parametro_jornada
      },
      {
        path: '/dashboard/parametro/sexo',
        name: 'Parametro_sexo',
        component: Parametro_sexo
      },
      {
        path: '/dashboard/parametro/tipo_doc',
        name: 'Parametro_tipo_doc',
        component: Parametro_tipo_doc
      },
      {
        path: '/dashboard/parametro/funciones',
        name: 'Parametro_funciones',
        component: Parametro_funciones
      },
      {
        path: '/dashboard/propuesta/consultar',
        name: 'Propuesta_consultar',
        component: Propuesta_consultar
      },
      {
        path: '/dashboard/propuesta/agregar',
        name: 'Propuesta_agregar',
        component: Propuesta_agregar
      },
      {
        path: '/dashboard/plantilla',
        name: 'plantilla',
        component: plantilla
      },
      {
        path: '/dashboard/Usuario',
        name: 'Usuario',
        component: Usuario
      }
      
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
