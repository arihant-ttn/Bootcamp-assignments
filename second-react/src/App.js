import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Parent from './Parent';
import TodoList from './TodoList';
import Login from './Login';
function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Parent></Parent>
      <TodoList/>
      <Login></Login>
    </div>
  );
}

export default App;
