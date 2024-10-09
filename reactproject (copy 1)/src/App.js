import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './componentes/Navbar';
import UncontrolledExample from './componentes/Carousel';
import Columna1 from './componentes/column1';
import Video from './componentes/ytvideo';
import Obj from './componentes/Spline';

function App() {
  return (
    <div className="App">
    <ColorSchemesExample />
    <Columna1 />
    <UncontrolledExample />
    <Video />
    <Obj />
    </div>
  );
}

export default App;
