import { useState } from 'react'
import './App.css'
import Header from './componentes/Header/header'
import Formulario from './componentes/Formulario/formulario'
import MiOrg from './componentes/MiOrg'
import Equipo from './componentes/Equipo'
function App() {

const [mostrarFormulario,actualizarMostrar] = useState(true)
  
const cambiarMostrar=()=>{
actualizarMostrar(!mostrarFormulario)

}

const equipos=[
  {
titulo :"Programacion",
colorPrimario:"#57C278 ",
colorSecundario: "#D9F7E9"

  },
  {
titulo:"Front End",
colorPrimario:"#82CFFA",
colorSecundario:"#E8F8FF"

  },
  {
titulo:"Data Science",
colorPrimario:"#A6D157",
colorSecundario:"#F0F8E2"

  },
  {
titulo:"Devops",
colorPrimario:"#E06B69",
colorSecundario:"#FDE7E8"

  },
  {
titulo:"Ux y Diseño",
colorPrimario:"#DB6EBF",
colorSecundario:"#FAE9F5"

  },
  {
titulo:"Movil",
colorPrimario:"",
colorSecundario:""

  },
  {
titulo:"Innovacion y Gestion",
colorPrimario:"#FF8A29",
colorSecundario:"#FFEEDF"

  },
   
  ]
return (
    <>
    <div>
<Header/>
{mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)}/>: <></>}
{/*(Solucion 2) mostrarFormulario && <Formulario/>  */}


<MiOrg cambiarMostrar={cambiarMostrar}/>

{
  equipos.map((equipo)=> <Equipo datos ={equipo} key={equipo.titulo}/>
  )
}

</div>
       
    </>
  )
}

export default App
