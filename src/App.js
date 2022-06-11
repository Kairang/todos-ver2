import logo from './logo.svg';
import './App.css';
import TodoListApp from './components/TodoListApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <TodoListApp title='TO DO LIST APPLICATION'/>
        
      </main>
    </div>
  );
}

export default App;
