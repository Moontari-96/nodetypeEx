import express from 'express'

import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/userController'

export const router = express.Router()

router.get('./users', getUsers)
router.post('./users', createUser)
router.put('./users', updateUser)
router.delete('./users', deleteUser)
