import express from 'express'
import User from '../models/user'

const router = express.Router()

const UserModel = new User();

router.get('/:id', function(req, res) {
  UserModel.get(req.params.id, function (err, user) {
    res.json({user})
  })
})

export default router
