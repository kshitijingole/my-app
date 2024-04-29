import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const[data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/moonhighway`
    ).then((response) => response.json())
    .then(setData);
  }, []);
  if(data) return(<pre>{JSON.stringify(data, null, 2)}</pre>);

  return (
    <div className="App">
      <h1>Displaying Data</h1>
    </div>
  );
}

export default App;
