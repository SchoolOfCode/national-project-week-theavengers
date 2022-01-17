import {Button, Container, Col, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Form from '../Form'



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

      <Form isHidden={true}/>

      
      
    </div>
  );
}

export default App;
