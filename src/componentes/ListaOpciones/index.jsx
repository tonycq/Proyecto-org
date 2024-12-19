import "./ListaOpciones.css"

const ListaOpcines = () =>{
//Metodo map-> arreglo.map( (equipo, index)=>{
//   return <option></option> 
//  })
const equipos=[
"Programacion",
"Front End",
"Data Science",
"Devops",
"Ux y Diseño",
"Movil",
"Innovacion y Gestion"



]

return <div className="lista-opciones">
    <label> Equipos</label>
    <select >
    {equipos.map((equipos, index)=><option key={index}>{equipos}</option>
    )}
    </select>
</div>

}

export default ListaOpcines;