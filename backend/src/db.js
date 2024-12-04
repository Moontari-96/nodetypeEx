import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySQL',
    database: 'sample',
})

db.connect()

export default db

// const db = mysql.createConnection({
//     host: '192.168.0.5',
//     user: 'admin',
//     password: 'admin',
//     database: 'ifcomm',
// })
// db.connect()
