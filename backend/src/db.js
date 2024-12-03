import mysql from 'mysql2'

const db = mysql.createConnection({
    host: '192.168.0.5',
    user: 'admin',
    password: 'admin',
    database: 'ifcomm',
})

db.connect()

export default db
