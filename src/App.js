import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function Home() {
  return(
    <div>
      <nav>
      <Link to="/about-us">About Us</Link>
      <Link to="/contact-us">Contact Us</Link>
      
    </nav>
    <h3>This is Home Page</h3>    
    </div>
    
  );
}

export function Aboutus() {
  return(
    <div>
        <h3>This is About Us Page</h3>
    <footer>
        <Link to="/contact-us">Contact Us</Link>
    </footer>
    <Outlet></Outlet>
    </div>
    
    );
}

export function History() {
  return(
    <div>
        <h3>This is History Page</h3>
    </div>
    
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
