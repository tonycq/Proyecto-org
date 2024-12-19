import { useState } from 'react'
import './App.css'
import Header from './componentes/Header/header'
import Formulario from './componentes/formulario/formulario'
import MiOrg from './componentes/MiOrg'
function App() {

const [mostrarFormulario,actualizarMostrar] = useState(true)
  
const cambiarMostrar=()=>{
actualizarMostrar(!mostrarFormulario)

}

return (
    <>
    <div>
<Header/>
{mostrarFormulario === true ? <Formulario/>: <></>}


<MiOrg cambiarMostrar={cambiarMostrar}/>
{/*(Solucion 2) mostrarFormulario && <Formulario/>  */}

</div>
       
    </>
  )
}

export default App
