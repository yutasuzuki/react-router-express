import express from 'express'
import userCtrl from './user'

const router = express.Router()

router.use('/users', userCtrl)

export default router
