import express from 'express'
import db from '../db.js'

const detailRouter = express.Router()
detailRouter.get('/:seq', async (req, res) => {
    const { seq } = req.params
    let sql = 'select * from board where board_seq = ?'
    db.query(sql, [seq], function (err, result) {
        if (err) console.log('query is not excuted: ' + err)
        else res.send(result)
    })
})

export default detailRouter
