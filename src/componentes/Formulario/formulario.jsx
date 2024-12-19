import { useState } from "react";
import "./formulario.css"
import CampoTexto from "../CampoTexto/campoTexto";
import ListaOpcines from "../ListaOpciones"; 
import Boton from "../Boton";  

const Formulario = () => {
    const [nombre,actualizarNombre] =useState("")
    const [puesto,actualizarPuesto] =useState("")
    const [foto,actualizarFoto] =useState("")
    
    
    const manejarEnvio = (e) =>{
        evento.preventDefault()
        
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
            <ListaOpcines/>
            <Boton>
                Crear
            </Boton>       
        </form>
    </section>


}

export default Formulario;