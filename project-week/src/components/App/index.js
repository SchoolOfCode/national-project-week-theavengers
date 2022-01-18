// import {Button, Container, Col, Row} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

import Form from '../Form'
import Nav from '../Nav'
import {Button, Container, Col, Row} from 'react-bootstrap'
import './App.css';
import {useEffect, useState, useRef} from "react";
import Quotes from "../Quotes"
import FeelingsCard from '../FeelingsCards';

//const api_url ="https://zenquotes.io/api/quotes/";
// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);



function App() {

  const [quote, setQuote] = useState("")
  const [isFormHidden, setFormHidden] = useState(true)
  const latestQuote = useRef(quote)

  function formHide(){
    setFormHidden(true)
  }

  function formShow(){
    setFormHidden(false)
  }

  useEffect(()=>{
    async function getQuoteOfTheDay(){
      const response = await fetch("https://inspiring-quotes.p.rapidapi.com/random?author=Albert", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "inspiring-quotes.p.rapidapi.com",
          "x-rapidapi-key": "66e15a0c63msh64f1ed7a108ca24p11da89jsn1c2cd45ce893"
        }})
      const data = await response.json();
      setQuote(latestQuote.current = data.quote)
      console.log(latestQuote.current)
      return data
    }
    getQuoteOfTheDay()
  }, [])

  return (
  
    <div className="App">
    <Nav formShow={formShow}/>
      <>
        {/* <Link to="/">home</Link>
        <br/>
        <Link to="/Reflections">reflections</Link>
        <br/>  
        <Button>Create</Button> */}
      </>

      <Form isHidden={isFormHidden} onHide={formHide}/>

      
      
      <Row>
        <Col> 
        <Quotes quote={latestQuote.current} />
        </Col>
      </Row>
      <Row>
        <FeelingsCard />
      </Row>
    </div>
  );
}

export default App;
