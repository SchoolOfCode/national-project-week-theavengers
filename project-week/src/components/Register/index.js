import {Col, Row, Container, Button, Modal} from 'react-bootstrap'
import './index.css'
import Logo from '../../os-logo.png'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import Footer from '../Footer'


function Register() {

    const [formInfo, setFormInfo] = useState({})

    

    function handleRegister(){
        
    }

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

            <Modal.Title>Register</Modal.Title>
            </Modal.Header>

            <Modal.Body id="login-modal-body">
                            <input className="login-input" type="email" placeholder="Enter Email"></input>
                            <input className="login-input" type="password" placeholder="Enter Password"></input>
                            <input className="login-input" type="password" placeholder="Confirm Password"></input>
                            <Button className="login-input" variant="primary" onClick={handleRegister}>Register</Button>
            </Modal.Body>

            <Modal.Footer id="login-modal-footer" className="d-flex justify-content-center">
            <Button variant="secondary"><NavLink style={{color: "white", textDecoration: "none"}} 
          to="/Login">Login</NavLink></Button>
            </Modal.Footer>
            </Modal.Dialog>


        
            </Col>

        </Row>
        
        </Container>
        <Footer/>
        
    </>
    
   
}

export default Register;
