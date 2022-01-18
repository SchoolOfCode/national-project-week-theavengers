import {Col, Row} from 'react-bootstrap'
import Quotes from "../Quotes"
import FeelingsCard from '../FeelingsCards';
import Form from '../Form'
import Nav from '../Nav'
import {useEffect, useState, useRef} from "react";


function Home({formHide, formShow, formState}) {

  const [quote, setQuote] = useState("")
  const latestQuote = useRef(quote)


  useEffect(()=>{
    async function getQuoteOfTheDay(){
      const response = await fetch("https://inspiring-quotes.p.rapidapi.com/random?author=Albert", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "inspiring-quotes.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_KEY
        }})
      const data = await response.json();
      setQuote(latestQuote.current = data.quote)
      console.log(latestQuote.current)
      return data
    }
    getQuoteOfTheDay()
  }, [])

return <>
  <Nav formShow={formShow}/>

<Form isHidden={formState} onHide={formHide} onShow={formShow}/> 
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