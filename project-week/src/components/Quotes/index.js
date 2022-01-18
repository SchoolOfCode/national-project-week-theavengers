import React from "react";
import {Container, Row, Col} from "react-bootstrap"


function Quotes({quote}){
    return <div>
        <Container >
  <Row>
    <Col>1 of 3</Col>
    <Col xs={6}>2 of 3 (wider)<h2 id = "quotebox">{quote}</h2> </Col>
    <Col>3 of 3
    </Col>
  </Row>
</Container>
        
  
    </div>
};

export default Quotes 
