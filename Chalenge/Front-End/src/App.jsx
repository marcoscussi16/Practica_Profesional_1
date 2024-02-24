import './App.css'
import Acceso from "./components/Acceso"
import Menu from "./components/Menu"
import Preventa from "./components/Preventa"
import Aspirantes from "./components/Aspirantes"
import Profesiones from './components/Profesiones'


import "../public/css/normalize.min.css"
import "../public/css/font-awesome.min.css"
import "../public/css/bootstrap.min.css"
import "../public/css/style.css"
import "./App.css"


function App() {
  return (
  <div className='App'>
    <Acceso/>
    <Menu/>
    <Preventa/>
    <Aspirantes/>
    <Profesiones/>
  </div>
  )
}

export default App
