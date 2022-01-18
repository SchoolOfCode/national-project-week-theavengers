import {Button, Modal} from 'react-bootstrap'
import "./index.css";
import {useState} from 'react';

const maxCharSize = 240;

function CreatePost({show, onHide}){

  const [charsRem, setCharsRem] = useState(240)
  const [charsRemHide, setCharsRemHide] = useState(true)

function handleChange(e){
  setCharsRemHide(false)
  setCharsRem(getCharsRemaining(e.target.value))
}

function getCharsRemaining(text){
  let charsRemaining = maxCharSize - text.length;
  if(charsRemaining < 0){
    charsRemaining = 0;
}

if(charsRemaining === 1){
  return charsRemaining + " Character Remaining";
}
  return charsRemaining + " Characters Remaining";
}

function handleBlur(e){
  setCharsRemHide(true)
}

function handleSelect(e){
  if(e.target.value.length >= 1)  setCharsRemHide(false)
}


    return (
<>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Hello!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>How's it going lately? What have you been struggling with? This is a place to share your struggles and tribulations; if you're finding things tough, you're probably not alone, so let us know!</p>
          <textarea placeholder="Write a message anonymously..." onBlur={handleBlur} onSelect={handleSelect} onChange={handleChange} className="textarea" maxLength="240" cols="40" rows="6">
          </textarea>
          <h6 hidden={charsRemHide} className="m-2 text-muted">{charsRem} </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
  </>

    )
}

export default CreatePost;