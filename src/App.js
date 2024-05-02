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
  header: {"Content-Type" : "application/json",
mode: "no-cors"}
}

function Repairer({title, vendorType, address}) {
  return (<div>
    <h3>{title}</h3>
    <h4>{vendorType}</h4>
    <h4>{address}</h4>
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
      `https://www.suncorp.com.au/graphql/execute.json/suncorp/choice_repairer_nofilter`, //GraphQL Endpoint
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
      {data.choiceRepairerList.items.map(repairerList => 
      <Repairer 
      name={repairerList.name}
      vendorType={repairerList.vendorType}
      address={repairerList.address}/>
      )}
    </div>
    )
}

export default App;
