import {Button, Container, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'



import './App.css';

function App() {

  return (
    <div className="App">
    
      <nav>
        <Link to="/">home</Link>
        <br/>
        <Link to="/Reflections">reflections</Link>
        <br/>  
        <Button>Create</Button>
      </nav>

      
      
    </div>
  );
}

export default App;
