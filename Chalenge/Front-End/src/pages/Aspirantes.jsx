import { useEffect, useState } from 'react'

function Aspirantes  ()  {
    let [aspirantes, setAspirante] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/aspirantes")
        .then( resultado => resultado.json())
        .then( data => setAspirante(data))
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
                                    <h2>{aspirante.nombre+" "+aspirante.apellido}</h2>
                                    <h2>{aspirante.profesiones.nombre}</h2>
                                </li>
                            )
                        })
                    }
                </ul>
            
            </>
        )
}
export default Aspirantes