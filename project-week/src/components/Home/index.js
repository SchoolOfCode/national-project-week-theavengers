import {Button, Container, Col, Row} from 'react-bootstrap'
import Quotes from "../Quotes"
import FeelingsCard from '../FeelingsCards';
import Form from '../Form'
import Nav from '../Nav'
import {useEffect, useState, useRef} from "react";


function Home() {

  const [quote, setQuote] = useState("")
  const latestQuote = useRef(quote)

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

return <>
  <Nav/>

<Form isHidden={false}/> 
      <Row>
        <Col> 
          <Quotes quote={latestQuote.current} />
        </Col>
      </Row>
      <Row>
        <FeelingsCard classes="sb7 box3"/>
      </Row>
      </>
}

export default Home