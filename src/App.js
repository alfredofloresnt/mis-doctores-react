import './App.css';
import HomeView from './home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <HomeView titulo="Hola mundo" nombre="alfredo"/>
        <HomeView titulo="Hola mundo 2"/>

    </div>
  );
}

export default App;
