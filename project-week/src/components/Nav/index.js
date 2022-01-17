import {Navbar, Container, Nav, Button} from  'react-bootstrap'
// import {useState} from 'react'
// import {Link} from 'react-router-dom'

function NavBar() {
return (
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/">Caught in my Feelings</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Reflections">Reflections</Nav.Link>
      <Button>Create</Button>
    </Nav>
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