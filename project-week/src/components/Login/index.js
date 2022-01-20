import {Col, Row, Container, Button, Modal} from 'react-bootstrap'
import './index.css'
import Logo from '../../os-logo.png'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'

function Login() {

    const [formInfo, setFormInfo] = useState({})

    function handleLogin(){
        
    }

    function handleEmailChange(event){
        alert(event.target.value)
        setFormInfo({action: event.target.value})
    }

    function handlePasswordChange(event){
        alert(event.target.value)

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

            <Modal.Title>Log in</Modal.Title>
            </Modal.Header>

            <Modal.Body id="login-modal-body">
                            <input className="login-input" type="email" onChange={handleEmailChange} placeholder="Enter Email"></input>
                            <input className="login-input" type="password" onChange={handlePasswordChange} placeholder="Enter Password"></input>
                            <Button className="login-input" variant="primary" onClick={handleLogin}>Log in</Button>
            </Modal.Body>

            <Modal.Footer id="login-modal-footer" className="d-flex justify-content-center">

            <Button variant="secondary"><NavLink style={{color: "white", textDecoration: "none"}} 
          to="/Register">Sign Up</NavLink></Button>
            </Modal.Footer>
            </Modal.Dialog>


        
            </Col>

        </Row>
        
        </Container>
    </>
    
   
}

export default Login;
