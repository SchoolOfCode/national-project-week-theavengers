import {Button, Container, Col, Row} from 'react-bootstrap'

import './App.css';
import {useEffect} from "react";

//const api_url ="https://zenquotes.io/api/quotes/";
// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);




function App() {

  useEffect(()=>{
    async function getQuoteOfTheDay(){
      const response = await fetch("https://zenquotes.io/api/quotes/")
      console.log(response)
      const data = await response.json();
      console.log(data)
    }
    getQuoteOfTheDay()
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
