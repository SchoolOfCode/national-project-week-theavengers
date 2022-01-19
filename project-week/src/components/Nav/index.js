import {Navbar, Container, Nav, Button} from  'react-bootstrap'
// import {useState} from 'react'
import {NavLink, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function NavBar({formShow}) {
return (
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">
  {/* <img src={Logo} width="180" height="180" style={{position: 'absolute'}} alt="" /> */}
    </Navbar.Brand>
    <Nav className="me-auto">
    <NavLink id="RouterNavLink" className={isActive => "nav-link" + (!isActive ? " unselected" : "")} 
          to="/">Home</NavLink>
    <NavLink id="RouterNavLink" className={isActive => "nav-link" + (!isActive ? " unselected" : "")} 
          to="/Reflections">Reflections</NavLink>

    </Nav>
    <Button variant="success" onClick={formShow}>Create</Button>

    </Container>

</Navbar>

)}

export default NavBar;


//     function ControlledTabs() {
//         const [key, setKey] = useState('home');
    
//         return (
//         <Tabs
//             id="controlled-tab-example"
//             activeKey={key}
//             onSelect={(k) => setKey(k)}
//         className="mb-3"
//       >
//         <Tab eventKey="home" title="Home" link to="/">
//         <Link to="/">home</Link>
        
          
//         </Tab>
//         <Tab eventKey="reflections" title="Reflections" link to="/Reflections">
//         <Link to="/Reflections">reflections</Link>
          
//         </Tab>
       
//       </Tabs>
//     );
//   }
  
//   export default ControlledTabs;