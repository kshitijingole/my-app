import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';

function App() {
  const textTitle = useRef();
  const hexColor = useRef();

  console.log(textTitle);
  console.log(hexColor);

  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input type="text" ref={textTitle} placeholder="Colour Text .."></input>
        <input type="color" ref={hexColor}></input>
        <button>Add color</button>
      </form>
    </div>
  );
}

export default App;
