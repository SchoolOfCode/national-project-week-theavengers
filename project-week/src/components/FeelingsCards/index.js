
import './index.css'

function FeelingsCard({classes, posts}) {


    const cards = posts.map((post)=>{
        return <div key={post.id}>
        <p className={classes} > 
        {post.text}
        <br/><span className='timestamp'>{post.timestamp}</span>
        </p>

    </div>

    })

    return cards;



}

export default FeelingsCard;