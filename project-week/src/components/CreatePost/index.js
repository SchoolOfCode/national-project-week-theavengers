import {Button, Modal} from 'react-bootstrap'
import "./index.css";
import $ from 'jquery';
import {useState} from 'react';

const maxCharSize = 240;

function CreatePost({show, onHide, onSubmit}){

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
  
  if($("#submit").data("mouseDown") !== true){
    setCharsRemHide(true)
}

}

function handleSelect(e){
  if(e.target.value.length >= 1)  setCharsRemHide(false)
}


$("#submit").on("mousedown", function(e){
  $("#submit").data("mouseDown", true);
});

$("#submit").on("mouseup", function(e){
  $("#submit").data("mouseDown", false);
});


    return (
<>
      <Modal id="modal" show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Hello!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-2">
          <p>How’s it going lately? Has the day been hard? If you’re finding things tough, that’s okay. You’re probably not alone. Use this space to air out your feelings. It’ll be completely anonymous, so go for it. After all, when has bottling your emotions ever helped?
          Tell someone. Us, perhaps?</p>
          <textarea placeholder="Write a message anonymously..." onBlur={handleBlur} onSelect={handleSelect} onChange={handleChange} className="textarea" maxLength="240" cols="40" rows="6">
          </textarea>
          <h6 hidden={charsRemHide} className="m-2 text-muted">{charsRem} </h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" id="close" onClick={()=>{
            onHide();
          }}>
            Close
          </Button>
          <Button variant="primary" id="submit" onClick={()=>{
            onSubmit(inputText)
            onHide()
            setCharsRemHide(true)
          }}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
  </>

    )
}

export default CreatePost;
