// import {Button, Container, Col, Row} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

import './App.css';
import Home from '../Home'
import {Route, Routes} from 'react-router-dom'
import {useState} from 'react'

//const api_url ="https://zenquotes.io/api/quotes/";
// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);


function App() {

  const [isFormHidden, setFormHidden] = useState(true)

  function formHide(){
    setFormHidden(true)
  }

  function formShow(){
    setFormHidden(false)
  }
  return (
    <div className="App">
      <>
        <Routes>
        <Route
          path="/"
          element={<Home formHide={formHide} formShow={formShow} formState={isFormHidden}/>}
        />
        {console.log(isFormHidden)}

      </Routes>
      </>
      </div>
  );
}

export default App;
