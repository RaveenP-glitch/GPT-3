import logo from './logo.svg';
import Header from './components/Header'

import './App.css';

function App() {
  const name = "Raveen";
  const x = false

  return (
    <div className="App">
     <h1>Hello from React!..</h1>
     <h2>Hello {x? 'Yes':'No'}</h2>
    </div>
  )
}

export default App;
