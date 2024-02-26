//COMPONENTES
import Inicio from './pages/Inicio'
import Aspirantes from './pages/Aspirantes'
import Profesiones from './pages/Profesiones'

//
import { Routes, Route } from 'react-router-dom'


//HOJAS DE ESTILOS

import "../public/css/normalize.min.css"
import "../public/css/font-awesome.min.css"
import "../public/css/bootstrap.min.css"
import "../public/css/style.css"
import "./App.css"


function App ()  {
  return (  
  <div className='App'>
  
    <Routes>
          <Route exact path="/" Component={Inicio}/>
    </Routes>
    <Routes>
          <Route path="/aspirantes" Component={Aspirantes}/>
    </Routes>
    <Routes>
          <Route path="/profesiones" Component={Profesiones}/>
    </Routes>
  </div>
  )

}
export default App
/*

  */