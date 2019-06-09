import React from "react";
import DetallePan from "./DetallePan";
import ContenidoPan from "./ContenidoPan";

/**
 * 
 */
const Contenedor = () => (
 <div className="contenedor">
    <div> PANADERIA LUIS</div>
    <div className="contenido">   
    <ContenidoPan></ContenidoPan>
        <DetallePan></DetallePan>
        
        </div>
     <div> 
         CREADO POR LUIS CACERES MEDRANO
        
         </div>   
    </div>


);
  
export default Contenedor;