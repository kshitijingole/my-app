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
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/moonhighway`
    )
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, []);

  if (loading) return(<h3>Loading ...</h3>);
  if (error) return(<pre>{JSON.stringify(error)}</pre>);
  if(!data) return null;
    return (
    <GithubDataApi 
    name={data.name} 
    location={data.location} />
    )
}

export default App;
