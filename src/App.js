import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const himalayan_peaks = [
  {name : 'Everest', height: 101256},
  {name : 'Kanchenjunga', height: 23456},
  {name : 'K2', height: 2344456}
]

function List( {data, renderItem, renderEmpty}) {
  return !data.length ? renderEmpty : (
    <ul>
      {data.map((item) => 
      <li key={item.name}>{renderItem(item)}</li>
    )}
    </ul>
  )
}





function App() {
  return(
    <List 
    data={himalayan_peaks}
    renderItem={item => <>{item.name} - {item.height}</>}
    renderEmpty={<p>Empty</p>}/>
  );
}

export default App;
