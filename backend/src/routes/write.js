import express from 'express'
import db from '../db.js'

const writeRouter = express.Router()

writeRouter.post('/', async (req, res) => {
    const board_title = req.body.board_title
    const board_content = req.body.board_content
    const member_id = req.body.member_id
    let sql = {
        board_title: board_title,
        board_content: board_content,
        member_id: member_id,
    }
    db.query('insert into board set?', sql, function (err, result) {
        if (err) throw err
        console.log('ok')
        res.json({ result: 'ok' })
    })
})

export default writeRouter
