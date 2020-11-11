import './App.css';
import HomeView from './home'
import FooterView from './footer'
import HeaderView from './header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <HeaderView/>
        <HomeView titulo="Título" nombre="alfredo"/>
        <HomeView titulo="Hola mundo 2"/>
        <FooterView/>
    </div>
  );
}

export default App;
