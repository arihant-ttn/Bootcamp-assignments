import logo from './logo.svg';
import './App.css';
import { FunctionalComponent } from './FunctionalComponent';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div className="App">
     
     {/* <FunctionalComponent></FunctionalComponent>
     <ClassComponent></ClassComponent> */}
     <Myapp></Myapp>
    </div>
  );
}
function Myapp() {
  
    const element =<h1>Hello, World!;</h1>;
    return element;
  
}
export default App;
