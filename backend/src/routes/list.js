import express from 'express'
import db from '../db.js'

const listRouter = express.Router()

listRouter.get('/', async (req, res) => {
    let sql = 'select * from board'
    db.query(sql, function (err, result) {
        if (err) console.log('query is not excuted: ' + err)
        else res.send(result)
    })
})

export default listRouter
