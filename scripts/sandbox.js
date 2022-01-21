// Todo
import {query, close} from "../db/db.js";




async function selectAll() {
  const res = await query(`SELECT * FROM posttable`);
  await close();
  console.log("Results", res.rows);
}



selectAll(); 

async function deleteId(id){
    const res = await query(`DELETE FROM posttable where ID = $1 RETURNING *`,[id])
    await close();
    console.log(res.rows)
}

//deleteId(12)