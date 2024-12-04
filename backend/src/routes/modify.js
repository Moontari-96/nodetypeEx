import express from 'express'
import db from '../db.js'

const modiRouter = express.Router()

modiRouter.put('/', async (req, res) => {
    const { board_seq, board_title, board_content } = req.body
    let sql =
        'update board set board_title = ?, board_content = ? where board_seq = ?'
    db.query(
        sql,
        [board_title, board_content, board_seq],
        function (err, result) {
            if (err) console.log('query is not excuted: ' + err)
            else res.send('ok')
        }
    )
})

export default modiRouter
