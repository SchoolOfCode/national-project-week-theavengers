import NavBar from "../Nav";
import {Col, Row, Container, Card, Button, Modal} from 'react-bootstrap'
import './index.css'
import { useEffect, useState } from "react";
import Logo from '../../os-logo.png'
import refs from '../../mock-ref.js'

function Login() {



    return <>
  <img id="logo" src={Logo} width="150" height="150" alt="" /> 
     <Container>
     
        <Row>

            <Col className="my-5">
                
                <Container id="header">

                <h1>The Open Space</h1>
                
                <h5 className="w-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>

                </Container>
            <Modal.Dialog className="w-75" id="signup-form" >
            <Modal.Header >

            <Modal.Title>Log in</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                            <input type="email" placeholder="Enter Email"></input>
                            <input type="password" placeholder="Enter Password"></input>
                            <input type="password" placeholder="Login"></input>
                            <Button variant="primary">Log in</Button>
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center">
            <Button variant="primary">Sign up?</Button>
            </Modal.Footer>
            </Modal.Dialog>


        
            </Col>

        </Row>
        
        </Container>
    </>
    
   
}

export default Login;