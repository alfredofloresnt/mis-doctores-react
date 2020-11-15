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


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderView/>
        <Switch>
          <Route exact path="/"><HomeView titulo="Título" nombre="alfredo"/></Route>
          <Route exact path="/contacto"><Contacto/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/agregar-doctor"><Agrega/></Route>
          <Route exact path="/busqueda"><Doctores/></Route>
          <Route exact path="/doctor/:idDoctor"><Detalledr/></Route>
          <Route exact path="/login"></Route>
        </Switch>
        
      </Router>
        
    </div>
  );
}

export default App;
