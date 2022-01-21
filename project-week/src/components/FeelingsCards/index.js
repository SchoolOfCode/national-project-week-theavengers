import './index.css'
import {useEffect, useState} from 'react'
import $ from 'jquery'


  function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h) + 50;
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];    

}

function animateDiv(num){

    var newq = makeNewPosition();
    var oldq = $(`#${num}`).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $(`#${num}`).animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv(num);        
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.05;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

function FeelingsCard({text, timestamp, colour, position, num, classes}) {


    const [pos] = useState(position)
    const [initialColour] = useState(colour)

    useEffect(()=>{
        animateDiv(num);
    },[num])



        return <div>
        <p 
        className={classes} 
        id={num} 
        style={
            {
                left:pos.x, 
                top:pos.y,
                backgroundColor: initialColour
            }}> 
        {text}
        <br/><span className='timestamp'>{timestamp}</span>
        </p>

    </div>

}

export default FeelingsCard;