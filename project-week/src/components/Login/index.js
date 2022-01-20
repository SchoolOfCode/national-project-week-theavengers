import NavBar from "../Nav";
import {Col, Row, Container, Card, Button} from 'react-bootstrap'
import './index.css'
import { useEffect, useState } from "react";
import refs from '../../mock-ref.js'

function Login() {



    return <>
     <NavBar/>
        <Row>
            <Col className="my-5">


            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title><h1 className="heading">Login</h1></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            </Col>
        </Row>

    </>
    
   
}

export default Login;