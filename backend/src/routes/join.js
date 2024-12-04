import express from 'express'
import mysql from 'mysql2'
import db from '../db.js'

const joinRouter = express.Router()

joinRouter.post('/', async (req, res) => {
    const member_id = req.body.member_id
    const member_pw = req.body.member_pw
    const member_name = req.body.member_name
    let sql = {
        member_id: member_id,
        member_pw: member_pw,
        member_name: member_name,
    }
    db.query(
        'select * from member where member_id = ?',
        [member_id],
        function (err, rows) {
            console.log(err)
            if (rows.length) {
                res.json({ result: 'fail' })
            } else {
                console.log('진입확인')
                db.query('insert into member set?', sql, function (err, rows) {
                    if (err) throw err
                    console.log('ok')
                    res.json({ result: 'ok' })
                })
            }
        }
    )
})

export default joinRouter
