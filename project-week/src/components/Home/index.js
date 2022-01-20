import {Container} from 'react-bootstrap'
import Quotes from "../Quotes"
import FeelingsCard from '../FeelingsCards';
import CreatePost from '../CreatePost'
import Nav from '../Nav'
import {useEffect, useState, useRef} from "react";
import './index.css'

//Generate random number for spawn position
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function getRandomLocation(){
  const posX = randRange(0,window.innerWidth-500);
  const posY = randRange(0,window.innerHeight-500)
}

function Home() {

  const [quote, setQuote] = useState("")
  const [posts, setPosts] = useState([])
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

    getPosts()
    getQuoteOfTheDay()
  }, [])

async function getPosts(){
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    setPosts(data.payload)
  }

async function submitPost(text){
  console.log(text)
  const response = await fetch("http://localhost:3000/posts",
  {
      "method": "POST",
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      "body": JSON.stringify({text: text})
  })
  console.log(response)
  getPosts()
}


return <>

  <Nav showCreatePostModal={formShow}/>
  <CreatePost show={showForm} onHide={formHide} onSubmit={submitPost}/>
    <Container className="main">
                    <Quotes quote={latestQuote.current.quote} author={latestQuote.current.author}/>

  
        <FeelingsCard classes="sb7 box3" posts={posts} position={getRandomLocation()} num={index}/>
   
   </Container>
      </>
}

export default Home
