import {query} from "../db/db.js"

export async function getUsers(){
    const data = await query(`SELECT * FROM UserTable` );
    return data.rows;
}

export async function getUserById(userId){
    const data = await query(`SELECT * FROM UserTable WHERE id=$1` ,[userId])
    return data.rows;
}

export async function getUserByEmail(email) {
    const data = await query(`SELECT * FROM UserTable WHERE email=$1`, [email])
    console.log(data)
    return data.rows
}

export async function createUser(user){
    const data = await query(`INSERT INTO UserTable(email,password) VALUES ($1, $2) RETURNING email`, [user.email, user.password])
    console.log(data.rows)
    return data.rows;
}

export async function deleteUserByID(user_id){
    const data = await query(`DELETE FROM UserTable WHERE requestId=$1`, [requestId]);
    return data.rows;
}

export async function UpdateUserById(user_id, user){
    const data = await query(`UPDATE UserTable SET email= $1, password=$2 WHERE id=user_id` , [user.email,newcard.password])
    return data.rows
}