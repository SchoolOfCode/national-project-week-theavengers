import pg from 'pg'
import 'dotenv/config'

const pool = new pg.Pool({
    host            : process.env.PG_HOST,
    user            : process.env.PG_USER,
    password        : process.env.PG_PASSWORD,
    database        : process.env.PG_DB,
    port            : process.env.PG_PORT,
    ssl:{rejectUnauthorized: false}

})


export default function query(text, params) {
    console.log(pool)
    return pool.query(text, params)
}

// Import db package..

//Export query function..