import express from 'express'
import db from '../db.js'

const deleteRouter = express.Router()

deleteRouter.delete('/:seq', (req, res) => {
    const { seq } = req.params
    console.log(seq)
    const sql = 'delete from board where board_seq = ?'
    db.query(sql, [seq], (err, result) => {
        if (err) res.status(400).send('fail')
        else {
            res.status(200).send('ok')
        }
    })
})

export default deleteRouter
