import {Button, Modal} from 'react-bootstrap'
import "./index.css";
import {useState} from 'react';

const maxCharSize = 240;

function CreatePost({show, onHide, onSubmit, description, title}){

  const [charsRem, setCharsRem] = useState(240)
  const [charsRemHide, setCharsRemHide] = useState(true)
  const [inputText, setInputText] = useState("")

function handleChange(e){
  setCharsRemHide(false)
  setCharsRem(getCharsRemaining(e.target.value))
  setInputText(e.target.value)
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
      <Modal id="modal" show={show} onHide={onHide}>
        <Modal.Header id="create-modal-header" closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="create-modal-body" className="my-2">
          <p>{description}</p>
          <textarea placeholder="Write a message anonymously..." onBlur={handleBlur} onSelect={handleSelect} onChange={handleChange} className="textarea" maxLength="240" cols="40" rows="6">
          </textarea>
          <h6 hidden={charsRemHide} className="m-2 text-muted">{charsRem} </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            if(inputText.length === 0) return
            onSubmit(inputText)
            onHide()
          }}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
  </>

    )
}

export default CreatePost;
