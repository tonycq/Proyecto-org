import { useState } from "react";
import "./formulario.css"
import CampoTexto from "../CampoTexto/campoTexto";
import ListaOpciones from "../ListaOpciones"; 
import Boton from "../Boton";  

const Formulario = (props) => {
    const [nombre,actualizarNombre] =useState("")
    const [puesto,actualizarPuesto] =useState("")
    const [foto,actualizarFoto] =useState("")
    const [equipos,actualizarEquipos] =useState("")
    
    const manejarEnvio = (e) =>{
        e.preventDefault()
     
        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipos

        }
        console.log(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <CampoTexto  
                titulo="Puesto"
                placeholder="Ingresar Puesto"
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo ="Foto" 
                placeholder=" Ingresar enlace de Foto"
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor ={equipos}
                actualizarEquipos={actualizarEquipos}
                equipos= {props.equipos}
            
            />
            <Boton>
                Crear
            </Boton>       
        </form>
    </section>


}

export default Formulario;