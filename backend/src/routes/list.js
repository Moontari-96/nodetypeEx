import express from 'express'
import db from '../db.js'

const listRouter = express.Router()

listRouter.get('/', async (req, res) => {
    db.query('select * from board')
})

export default listRouter
