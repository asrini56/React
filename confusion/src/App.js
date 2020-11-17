import logo from './logo.svg';
import {Navbar} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar dark color = "primary">
        <div className = "container">
        <Navbar href = "/"> Restaurant Confusion</Navbar>
        </div>
        </Navbar>
    </div>
  );
}

export default App;
