import React from "react";

/**
 * 
 * @param {*} param0 
 */
const ListadoPan=({nombrePAN,precio,des})=> {
    const mensaje = precio>""


    return (
        <div className="Detalle de Pan">
            <h3> PAN: {nombrePAN}</h3>
            <span> PRECIO: {precio}</span>
            <h4> DESCRIPCION: {des}</h4>
            <br/>
            
            
        </div>
    )
}
    
    
export default  ListadoPan;