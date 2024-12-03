import express from 'express'

const logoutRouter = express.Router()

logoutRouter.delete('/', async (req, res) => {
    req.session.destroy
    res.json({
        result: 'true',
    })
})

export default logoutRouter
