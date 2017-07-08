import express from 'express'
import UserModel from '../models/UserModel'

const router = express.Router()
const user = new UserModel();

router.get('/', function(req, res) {
  console.log(req.session.cid);
  user.all(req.session.cid, function (err, user) {
    res.json({user})
  })
})

router.get('/:id', function(req, res) {
  user.get(req.params.id, function (err, users) {
    res.json({users})
  })
})

export default router
