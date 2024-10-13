import pg from 'pg'
import dotenv from "dotenv"


dotenv.config()


const user=process.env.PG_USER
const password = process.env.PG_PASSWORD
const host = process.env.PG_HOST
const database = process.env.PG_DATABASE
const port = process.env.PG_PORT

const db = new pg.Client({
    user:user,
    password:password,
    host:host,
    database:database,
    port:port,
})

db.connect()
console.log(`connection to ${database} successfull`);

export default db