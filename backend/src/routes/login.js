import express from 'express'
import db from '../db.js'

const loginRouter = express.Router()
loginRouter.post('/', async (req, res) => {
    const { member_id, member_pw } = req.body // destructuring으로 간단히 작성
    db.query(
        'select * from member where member_id = ? and member_pw = ?',
        [member_id, member_pw],
        (err, results) => {
            if (err) {
                return res
                    .status(500)
                    .json({ result: 'error', message: 'Database error' })
            }
            if (results.length > 0) {
                // 로그인 성공: 세션에 사용자 정보 저장
                req.session.user = {
                    member_id: results[0].member_id,
                }

                res.json({
                    result: 'ok',
                    member_id: req.session.user.member_id,
                })
            } else {
                // 로그인 실패
                res.status(401).json({
                    result: 'fail',
                    message: 'Invalid credentials',
                })
            }
        }
    )
})

export default loginRouter
