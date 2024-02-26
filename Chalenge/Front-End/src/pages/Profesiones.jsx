import { useEffect, useState } from 'react'

function Profesiones(){
    let [aspirantes, setAspirante] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/profesiones")
        .then( resultado => resultado.json())
        .then( data => setAspirante(data.profesiones))
        .catch ( error => console.log(error))
    },[])
    
    
        return(
            <>
                <ul>
                    {aspirantes.length === 0 && <p>Cargando..</p>}
                    {
                        aspirantes.map((aspirante, i)=>{
                            return(
                                <li key={i}>
                                    <h2>{aspirante.nombre}</h2>
                                </li>
                            )
                        })
                    }
                </ul>
            
            </>
        )
}
export default Profesiones