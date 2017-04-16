import express from 'express'
import userCtrl from './user'
import signinCtrl from './signin'
import validCtrl from './valid'

const router = express.Router()

router.use('/users', userCtrl)
router.use('/signIn', signinCtrl)
router.use('/valid', validCtrl)

export default router
