// import {Button, Container, Col, Row} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

import Form from '../Form'
import Nav from '../Nav'



import './App.css';

function App() {

  return (
    <div className="App">
    <Nav/>
      <>
        {/* <Link to="/">home</Link>
        <br/>
        <Link to="/Reflections">reflections</Link>
        <br/>  
        <Button>Create</Button> */}
      </>

      <Form isHidden={false}/>

      
      
    </div>
  );
}

export default App;
