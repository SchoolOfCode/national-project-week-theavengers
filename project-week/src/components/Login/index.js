import {Col, Row, Container, Button, Modal} from 'react-bootstrap'
import './index.css'
import Logo from '../../os-logo.png'
import {NavLink} from 'react-router-dom'

import Footer from '../Footer'
import {useState, useRef} from 'react'

function Login({ handleLogin}) {
    const [formInfo, setFormInfo] = useState({email: "", password: ""})
    const latest = useRef(formInfo);

    function handleEmailChange(event){
        setFormInfo(latest.current.email = event.target.value)
    }
  
    function handlePasswordChange(event){
        setFormInfo(latest.current.password = event.target.value)
    }

    return <>
  <img id="logo" src={Logo} width="150" height="150" alt="" /> 
     <Container>
     
        <Row>

            <Col className="my-5">
                
                <Container id="header">

                <h1>Hello and Welcome to <br/>The Open Space.</h1>
                
                <h5 className="w-75">
This space was created for you, dear bootcamper, because everyone needs an outlet.<br/><br/> The School of Code National Bootcamp is not easy. You’re learning new things every day, coaches only ever ask you questions when you don’t know the answers, and the days start with squats.<br/><br/>
With everything that you already need to take in, you don’t need any negative feelings taking up space in your mind. Everyone has good days and bad days. And on those bad days when you feel like you’re the only one struggling or that your natural reserves of logic are scarcer than others, release all of those thoughts anonymously into this space.<br/><br/>
We guarantee that you’re not the only one struggling, and sometimes it’s just a matter of seeing that you’re not alone. Since it’s all anonymous, you can be truthful about how you’re finding things. Just unload and go.</h5>

                </Container>
            <Modal.Dialog className="w-75" id="signup-form" >
            <Modal.Header >

            <Modal.Title>Log in</Modal.Title>
            </Modal.Header>

            <Modal.Body id="login-modal-body">
                            <input className="login-input" type="email" onChange={handleEmailChange} placeholder="Enter Email"></input>
                            <input className="login-input" type="password" onChange={handlePasswordChange} placeholder="Enter Password"></input>
                            <Button className="login-input" variant="primary" onClick={()=> handleLogin(latest.current)}><NavLink style={{color: 'white', textDecoration:'none'}}to={'/Home'}>Login</NavLink></Button>
            </Modal.Body>

            <Modal.Footer id="login-modal-footer" className="d-flex justify-content-center">

            <Button onClick={() => {console.log("clicked")}} variant="secondary"><NavLink style={{color: "white", textDecoration: "none"}} 
          to="/Register">Sign Up</NavLink></Button>
            </Modal.Footer>
            </Modal.Dialog>


        
            </Col>

        </Row>
        
        </Container>
        <Footer/>
    </>
    
   
}

export default Login;
