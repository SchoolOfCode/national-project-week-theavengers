import {Button, Modal,  Container, Col, Row} from 'react-bootstrap'

function Form({isHidden}){
    return (
        <form hidden={isHidden}>
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Create Post</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <p>Lorem ipsum</p>
  <textarea maxLength="240"></textarea>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary">Submit</Button>
  </Modal.Footer>
</Modal.Dialog>


        </form>
    )
}

export default Form;