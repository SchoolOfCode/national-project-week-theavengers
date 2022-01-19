import query from "../db/db.js";

// Todo
const data = [
    {
        text: "Hello",
        timestamp: "19/01/2022"
    }
]


async function populateTable() {

    for (let i = 0; i< data.length; i++){
        const response = await query(`INSERT INTO PostTable (text, timestamp) VALUES ($1, $2);`,[data[i].text, data[i].timestamp])
        console.log(response)
    }

}



populateTable(); 