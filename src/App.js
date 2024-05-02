import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function GithubDataApi({name, location}) {
  return (<div>
    <h3>{name}</h3>
    <h4>{location}</h4>
  </div>
  );
}

function App() {
  const[data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/moonhighway`
    )
    .then((response) => response.json())
    .then(setData);
  }, []);
  if(data) 
    return (
    <GithubDataApi 
    name={data.name} 
    location={data.location} />
  );

  return (
    <div className="App">
      <h1>Displaying Data</h1>
    </div>
  );
}

export default App;
