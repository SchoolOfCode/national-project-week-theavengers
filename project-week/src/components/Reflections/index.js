import NavBar from "../Nav";
import CreatePost from "../CreatePost"
import {Col, Row, Container} from 'react-bootstrap'
import './index.css'
import { useEffect, useState } from "react";
import refs from '../../mock-ref.js'

function Reflections({user_id}) {


  const [showForm, setShowForm] = useState(false)

  const formHide = () => setShowForm(false)
  const formShow = () => setShowForm(true)

    const [reflections, setReflections] = useState([])

    async function submitPost(text, user_id){
        console.log(text)
        const response = await fetch(`http://localhost:3000/Reflections:${user_id}`,
        {
            "method": "POST",
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            "body": JSON.stringify({text: text})
        })
        console.log(response)
        getReflectionsByUserId(user_id)
      }

    useEffect(() => {
       // getReflectionsByUserId(user_id)
       setReflections(refs)
    },[])
    
    async function getReflectionsByUserId(id){
        const response = await fetch(`http://localhost:3000/Reflections:${user_id}`);
        const data = await response.json();
        setReflections(data.payload)
      }

    return <>
     <NavBar showCreatePostModal={formShow}/>
    <CreatePost show={showForm} onHide={formHide} onSubmit={submitPost}
        title="Hi Again!" description="Add a reflection of how your day has gone. Note down a few of your successes bla bla etc"/>
        <Row>
            <Col className="my-5">
                <h1 className="heading">My Reflections</h1>
            <Container className="my-5 py-4 px-4 reflections">
                <ul>
                {reflections.map((ref)=> {
                    return <div key={ref.id}  className="ref-list">
                   <li className="ref">{ref.text}</li>
                    <p className="ref-time">{ref.timestamp}</p>
                    </div> 
                })}
                </ul>
            </Container>
            </Col>
        </Row>

    </>
    
   
}

export default Reflections;