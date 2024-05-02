import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

// function GithubDataApi({name, location}) {
//   return (<div>
//     <h3>{name}</h3>
//     <h4>{location}</h4>
//   </div>
//   );
// }

const query =`query{
  allLifts{
    name
    elevationGain
    status
  }
}`;

const opts = {
  method: "POST",
  header: {"Content-Type" : "application/json"},
  body: JSON.stringify({query})
}

function Lift({name, elevationGain, status}) {
  return (<div>
    <h3>{name}</h3>
    <h4>{elevationGain} {status}</h4>
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
      `https://snowtooth.moonhighway.com/`, //GraphQL Endpoint
      opts 
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
    <div>
      {data.data.allLifts.map(lift => 
      <Lift elevationGain={lift.elevationGain}
      status={lift.status}/>
      )}
    </div>
    )
}

export default App;
