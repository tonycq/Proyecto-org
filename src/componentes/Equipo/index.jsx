import "./equipo.css"
import Colaborador from "../Colaborador"

const Equipo =(props) =>{
//desctructuracion

const {colorPrimario,colorSecundario,titulo} = props.datos


    const obj={

        backgroundColor: colorSecundario
    }

    const estiloTitulo ={borderColor:colorPrimario }

    
return <section className="equipo" style={obj}>
<h3 style={{bordeColor: estiloTitulo }}> {titulo}</h3>
<div className="colaboradores"></div>
<Colaborador/>
    
</section>

}

export default Equipo