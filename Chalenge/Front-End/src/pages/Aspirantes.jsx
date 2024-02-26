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
                                </li>
                            )
                        })
                    }
                </ul>
            
            </>
        )
}
export default Aspirantes
/*
data.data[0].nombre
constructor(props){
        super(props)
        this.state = {
            aspirante: ""
        }
    }
    apiCall(url, consecuencia){
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch ( error => console.log(error))
    }

    componentDidMount (){
        this.apiCall("http://localhost:3000/aspirantes", this.mostrarAspirante)
    }

    mostrarAspirante = (data) => {
        this.setState(
            {
                aspirante: data.data.nombre
            }
        )
    }
    
    render(){
        let contenido
        if(this.state.aspirante == ""){
            contenido= <p>Cargando...</p>
        }else{
            contenido= <h1>{this.state.aspirante}</h1>
        }
    return(
        <>
            {contenido}
        </>
    )
    }


*/