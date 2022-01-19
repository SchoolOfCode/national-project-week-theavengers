import {Col, Row} from 'react-bootstrap'
import Quotes from "../Quotes"
import FeelingsCard from '../FeelingsCards';
import CreatePost from '../CreatePost'
import Nav from '../Nav'
import {useEffect, useState, useRef} from "react";
import './index.css'

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
      setQuote(latestQuote.current = data)
      console.log(latestQuote.current)
      return data
    }
    getQuoteOfTheDay()
  }, [])

return <>

  <Nav showCreatePostModal={formShow}/>
  <CreatePost show={showForm} onHide={formHide}/>
    <Container className="main">
                    <Quotes quote={latestQuote.current.quote} author={latestQuote.current.author}/>

  
        <FeelingsCard classes="sb7 box3"/>
   
   </Container>
      </>
}

export default Home