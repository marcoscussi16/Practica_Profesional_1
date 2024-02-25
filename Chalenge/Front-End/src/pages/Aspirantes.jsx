import React, { Component } from 'react'


class Aspirantes extends Component{
    render(){
        return(
            <>
            SOY LA PAGINA ASPIRANTEEEEEE
            </>
        )
    }
}
export default Aspirantes
/*

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