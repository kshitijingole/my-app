import logo from './logo.svg';
import './App.css';

function Home() {
  return(
  <h3>This is Home Page</h3>
  );
}

export function Aboutus() {
  return(
    <h3>This is About Us Page</h3>
    );
}

export function Contactus() {
  return(
    <h3>This is Contact Us Page</h3>
    );
}

function App() {
  return(
    <Home />
  );
}

export default App;
