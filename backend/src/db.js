import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'MySQL',
    database: 'user',
})

export const db = pool.promise()
