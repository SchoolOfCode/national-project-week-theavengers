import query from "../db/db.js"
//
// Put database queries here........... 
// Get all posts
export async function getPosts(){
    const data = await query(`SELECT * FROM PostTable` );
    return data.rows;
}
// Get post by ID
export async function getPostById(requestId){
    const data = await query(`SELECT * FROM WHERE id=$1 ,[requestId]`)
    return data.rows;
}
//Create post..
export async function createPost(post){
    const data = await query(`INSERT INTO PostTable(text,timestamp) VALUES ($1, $2)`, [post.text, post.timestamp])
    return data.rows;
}
export async function deletePostById(requestId){
    const data = await query(`DELETE FROM PostTable WHERE requestId=$1`, [requestId]);
    return data.rows;
}
//Update post..
    export async function updatePostById(requestId, newcard){
        const data = await query(`UPDATE PostTable SET text= $1, timestamp=$2 WHERE id=requestId, [newcard.text,newcard.timestamp]`)
        return data.rows
    }

 // Reflections Models

export async function getReflectionsByUserId(userId) {
    const data = await query(`SELECT * FROM ReflectionsTable WHERE user_id=$1 ,[userId]`)
    return data.rows;
}













