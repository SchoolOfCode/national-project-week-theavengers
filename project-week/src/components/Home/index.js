import {Col, Row} from 'react-bootstrap'
import Quotes from "../Quotes"
import FeelingsCard from '../FeelingsCards';
import CreatePost from '../CreatePost'
import Nav from '../Nav'
import {useEffect, useState, useRef} from "react";


function Home() {

  const [quote, setQuote] = useState("")
  const latestQuote = useRef(quote)

  const [showForm, setShowForm] = useState(false)

  const formHide = () => setShowForm(false)
  const formShow = () => setShowForm(true)

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
  <Nav showCreatePostModal={formShow}/>
  <CreatePost show={showForm} onHide={formHide}/>
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