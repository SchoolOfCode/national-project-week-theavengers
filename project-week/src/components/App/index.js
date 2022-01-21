// import {Button, Container, Col, Row} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

import './App.css';
import Home from '../Home'
import {Route, Routes} from 'react-router-dom'
import Reflections from '../Reflections';
import Login from '../Login'
import Register from '../Register'
import {useState, useRef} from 'react'

//const api_url ="https://zenquotes.io/api/quotes/";
// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);


function App() {

  const [id, setId] = useState(0)
  let latest = useRef(id)

  async function handleLogin(formInfo){
     
      let {email, password} = formInfo
      if(password != undefined) {
          const response = await fetch(`http://localhost:3000/signup/?email=${email} `)
          const data = await response.json()
         setId(latest.current = data.payload[0].id)
          console.log(data.payload[0].id)
          //console.log(latest.current)
          return data
      } 
  }


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
          element={<Reflections userid={latest.current}/>}
        />
      <Route
          path='/'
          element={<Login handleLogin={handleLogin} />}
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
