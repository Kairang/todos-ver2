// import logo from './logo.svg';
import './App.css';
import TodoListApp from './components/TodoListApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://play-lh.googleusercontent.com/Vnf3XWcteE1nzc6mFG4vgi2AZTnSjsvDb6IdEi-DTB8gQrjQh_sZhbiueFSIPY8R0Fo' className="App-logo" alt="logo" />
        <img src='https://play-lh.googleusercontent.com/Vnf3XWcteE1nzc6mFG4vgi2AZTnSjsvDb6IdEi-DTB8gQrjQh_sZhbiueFSIPY8R0Fo' className="App-logo" alt="logo" />
        <img src='https://play-lh.googleusercontent.com/Vnf3XWcteE1nzc6mFG4vgi2AZTnSjsvDb6IdEi-DTB8gQrjQh_sZhbiueFSIPY8R0Fo' className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <TodoListApp />
        
      </main>
    </div>
  );
}

export default App;
