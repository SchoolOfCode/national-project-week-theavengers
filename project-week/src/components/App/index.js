// import {Button, Container, Col, Row} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

import './App.css';
import Home from '../Home'
import {Route, Routes} from 'react-router-dom'
import Reflections from '../Reflections';
import Login from '../Login'
import Register from '../Register'

//const api_url ="https://zenquotes.io/api/quotes/";
// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);


function App() {


  return (
    <div className="App">
      <>
        <Routes>
        <Route
          path="/Home"
          element={<Home/>}
        />
        <Route
          path='/Reflections'
          element={<Reflections/>}
        />
      <Route
          path='/'
          element={<Login/>}
        />
              <Route
          path='/Register'
          element={<Register/>}
        />
      </Routes>
      </>
      </div>
  );
}

export default App;
