import { useState } from "react"
import "./MiOrg.css"

const MiOrg =(Props)=>{




    return <section className="orgSection">
<h3 className="title">Mi Organizacion</h3>
<img src="/organizacion.png" alt="miOrg" onClick={Props.cambiarMostrar}/>
</section>

}
export default MiOrg