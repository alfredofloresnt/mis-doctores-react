import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeView from './home'
import FooterView from './footer'
import HeaderView from './header'
import Contacto from './contacto'
import Login from './login'
import Detalledr from './detalledr'
import Doctores from './doctores'
import Agrega from './agregadr'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [token, setToken] = useState(null)
  const login = (token) => {
    setIsLogged(true)
    setToken(token)
  }
  return (
    <div className="App">
      <Router>
        <HeaderView/>
        <Switch>
          <Route exact path="/"><HomeView token = {token} titulo="Título" nombre="alfredo" isLogged={isLogged} /></Route>
          <Route exact path="/contacto"><Contacto/></Route>
          <Route exact path="/login"><Login login={login}/></Route>
          <Route exact path="/agregar-doctor"><Agrega/></Route>
          <Route exact path="/busqueda" ><Doctores isLogged={isLogged}/></Route>
          <Route exact path="/doctor/:idDoctor"><Detalledr/></Route>
        </Switch>
        
      </Router>
        
    </div>
  );
}

export default App;
