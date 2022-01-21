import {Container} from 'react-bootstrap'
import Quotes from "../Quotes"
import FeelingsCard from '../FeelingsCards';
import CreatePost from '../CreatePost'
import Nav from '../Nav'
import {useEffect, useState, useRef} from "react";
import './index.css'
import Footer from '../Footer'

const postsToDisplay = 6;
const coloursArray = ['#E1E356', '#56E3D9',  '#63E356', '#E356D8', '#E35656', '#392f5aff', '#f7a9a8ff', '#e3b505ff', '#77a6b6ff', '#cee0dcff'];

//Generate random number for spawn position
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function getRandomLocation(){
  const posX = randRange(-50,window.innerWidth-100);
  const posY = randRange(100,window.innerHeight-100);
   return {
     x: posX,
     y: posY
    };
  }

  function getColour(){
    return coloursArray[randRange(0, coloursArray.length-1)];
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
    const response = await fetch("/posts");
    const data = await response.json();
    setPosts(data.payload.sort(function(a, b){return 0.5 - Math.random()}))
  }

async function submitPost(text){
  const response = await fetch("/posts",
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
  <CreatePost show={showForm} onHide={formHide} onSubmit={submitPost}
    title="Hello!" description='How’s it going lately? Has the day been hard? If you’re finding things tough, that’s okay. You’re probably not alone. Use this space to air out your feelings. It’ll be completely anonymous, so go for it. After all, when has bottling your emotions ever helped?
    Tell someone. Us, perhaps?'/>
    <Container className="main">
    <Quotes quote={latestQuote.current.quote} author={latestQuote.current.author}/>

  

  {posts.map((post, index)=>{
  if(index >= postsToDisplay) { return}
  let n = index % 2 === 0 ? 1 : 0;
  return  <FeelingsCard key={post.id} text={post.text} timestamp={post.timestamp} colour={getColour()} position={getRandomLocation()} num={index} classes={`box sb${n}`}/>
  })}


       
    
   </Container>
   <Footer/>
   
      </>
}

export default Home
