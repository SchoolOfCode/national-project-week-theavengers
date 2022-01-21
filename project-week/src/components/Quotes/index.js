import React from "react";
import {Row, Col} from "react-bootstrap"
import './index.css'

function Quotes({quote, author}){
    return <div className="quote-page">
      <Row>
      </Row>
      <Row>
      <Col id="quotebox">
            <h3>"{quote}"</h3> 
            <p className="author">- {author}</p>
          </Col>
      </Row>
  
    </div>
};

export default Quotes 
