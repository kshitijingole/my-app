import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000")


  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle(""); // initialize to default
    setColor("#000000"); // initialize to default
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input 
        type="text" 
        value={title} 
        placeholder="Colour Text .."
        onChange={(event => setTitle(event.target.value))}></input>
        <input 
        type="color" 
        value={color}
        onChange={(event) => setColor(event.target.value)}></input>
        <button>Add color</button>
      </form>
    </div>
  );
}

export default App;
