import {Col, Row, Container, Button, Modal} from 'react-bootstrap'
import './index.css'
import Logo from '../../os-logo.png'
import {NavLink} from 'react-router-dom'

import Footer from '../Footer'
import {useEffect, useState, useRef} from 'react'

function Register() {

    const [formInfo, setFormInfo] = useState({})
    const [passwords, setPasswords] = useState('')
    const [confPass, setConfPass] = useState('')
    const [responseMsg, setResponseMsg] = useState('')
    const [loginConfirmed, setLoginConfirmed] = useState(false)
    const login = useRef(loginConfirmed)

    function handleEmailChange(event){
        setFormInfo({email: event.target.value})

    }

    function handlePasswordChange(event){
        setPasswords(event.target.value)
    }

    function handleConfPasswordChange(event){
        setConfPass(event.target.value)
    }

    async function registerUser(email, pass){
        console.log(passwords, confPass)
  
        if(passwords===confPass) { 
                 setLoginConfirmed(login.current = true)
                 setFormInfo({password: pass})
                 setResponseMsg('Success!')  
                 console.log(login.current)   
             } else {
                 setResponseMsg('Passwords do not match. Try Again!')
             }
            
       
        const response = await fetch("http://localhost:3000/signup",
        {
            "method": "POST",
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            "body": JSON.stringify({email: email, password: passwords})
        })
      }

    return <>
  <img id="logo" src={Logo} width="150" height="150" alt="" /> 
     <Container>
     
        <Row>

            <Col className="my-5">
                
                <Container id="header">

                <h1>The Open Space</h1>
                
                <h5 className="w-50">Want to keep your posts so you can look back? Complete the sign-up process and you’ll gain access to everything you post moving forward. Sometimes, you need a little time to see your growth.</h5>

                </Container>
            <Modal.Dialog className="w-75" id="signup-form" >
            <Modal.Header >

            <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body id="login-modal-body">
            <h6 className='text-center'>{responseMsg}</h6>

                            <input className="login-input" type="email" placeholder="Enter Email" onChange={handleEmailChange} ></input>
                            <input className="login-input" type="password" placeholder="Enter Password" onChange={handlePasswordChange}></input>
                            <input className="login-input" type="password" placeholder="Confirm Password" onChange={handleConfPasswordChange}></input>
                            { loginConfirmed === true ?   <Button className="login-input" variant="primary" onClick={()=> registerUser(formInfo.email, formInfo.password)}><NavLink style={{color: 'white', textDecoration:'none'}}to={'/Home'}>Login</NavLink></Button> :   
                            <Button className="login-input" variant="primary" onClick={()=> registerUser()}>Register</Button> }
            </Modal.Body>

            <Modal.Footer id="login-modal-footer" className="d-flex justify-content-center">
            <Button variant="secondary"><NavLink style={{color: "white", textDecoration: "none"}} 
          to="/">Login</NavLink></Button>
            </Modal.Footer>
            </Modal.Dialog>


        
            </Col>

        </Row>
        
        </Container>
        <Footer/>
        
    </>
    
   
}

export default Register;
