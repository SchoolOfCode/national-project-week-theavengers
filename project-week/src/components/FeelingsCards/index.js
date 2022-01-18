
import './index.css'

// function changeStartingPosition() {
//    let sb7 = document.querySelectorAll('sb7');
//    let sb8 = document.querySelectorAll('sb7');

//    sb7.style.top = 20
//    sb7.style.left = 30
//    sb7.style.right = 10
//    sb7.style.bottom = 20

//    sb8.style.top = Math.ceil(Math.random() * 100)
//    sb8.style.left = Math.ceil(Math.random() * 100)
//    sb8.style.right = Math.ceil(Math.random() * 100)
//    sb8.style.bottom = Math.ceil(Math.random() * 100)

// }




function FeelingsCard({classes}) {

    return <div>
        <p className={classes} > 
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu
        <br/><span className='timestamp'>10:24 17th Jan 2022</span>
        </p>

    </div>


}

export default FeelingsCard;