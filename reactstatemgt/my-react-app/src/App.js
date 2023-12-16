import logo from './logo.svg';
import './App.css';
// import { type } from '@testing-library/user-event/dist/type';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((currentCount) => currentCount + 1);
  const decrement = () => setCount((currentCount) => currentCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <div>Counter: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
