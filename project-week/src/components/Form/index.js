import {Button, Modal} from 'react-bootstrap'
import "./form.css";
import {useState} from 'react';

const maxCharSize = 240;

function Form({isHidden, onHide}){

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
  <form hidden={isHidden}>

  <Modal.Dialog>
  <Modal.Header closeButton onClick={onHide} >
    <Modal.Title>Create Post</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <p>How are you feeling today?</p>
  <textarea onBlur={handleBlur} onSelect={handleSelect} onChange={handleChange} className="textarea" maxLength="240" cols="40" rows="6">
  </textarea>
  <h6 hidden={charsRemHide} className="m-2 text-muted">{charsRem} </h6>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="primary">Submit</Button>
  </Modal.Footer>
</Modal.Dialog>


  </form>



    )
}

export default Form;
