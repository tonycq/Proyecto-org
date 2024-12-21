import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
//Metodo map-> arreglo.map( (equipo, index)=>{
//   return <option></option> 
//  })


const manejarCambio=(e)=>{

    props.actualizarEquipos(e.target.value)

}
return <div className="lista-opciones">
    <label> Equipos</label>
    <select value ={props.valor} onChange={manejarCambio}>
        <option valor="" disabled defaultValue="" hidden>Seleccionar Equipos</option>
    {props.equipos.map((equipos, index)=><option key={index}value={equipos}>{equipos}</option>
    )}
    </select>
</div>

}

export default ListaOpciones;