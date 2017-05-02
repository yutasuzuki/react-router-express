import express from 'express'
import UserModel from '../models/UserModel'

const router = express.Router()
const user = new UserModel();

router.get('/', function(req, res) {
  user.all(function (err, user) {
    res.json({user})
  })
})

router.get('/:id', function(req, res) {
  user.get(req.params.id, function (err, users) {
    res.json({users})
  })
})

export default router
