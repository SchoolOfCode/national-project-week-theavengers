import query from "../db"
//
// Put database queries here........... 
// Get all posts
export async function getPosts(){
    const data = query(`SELECT * FROM PostTable` );
    return data.row;
}
// Get post by ID
export async function getPostById(requestId){
    const data = await query(`SELECT * FROM WHERE id=$1 ,[requestId]`)
    return data.row;
}
//Create post..
export async function createPost(post){
    const data = await query(`INSERT INTO PostTable(text,timestamp) VALUES ($1, $2), [post.text, post.timestamp]`)
    return data.row;
}
export async function deletePostById(requestId){
    const data = await query(`DELETE FROM PostTable WHERE requestId=$1`, [requestId]);
    return data.row;
}
//Update post..
    export async function updatePostById(requestId, newcard){
        const data = await query(`UPDATE PostTable SET text= $1, timestamp=$2 WHERE id=requestId, [newcard.text,newcard.timestamp]`)
        return data.row
    }













