import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import moment from 'moment'
import AuthModel from '../models/AuthModel'

const SECRET_KEY = 'CJwYXNzd29yZCI6IjEiLCJpYXQiOjE0OTIzMTU0NzUsIm';

const router = express.Router()
const auth = new AuthModel()

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.post('/', function(req, res) {
  const email = req.body.email
  const password = req.body.password
  const updateAt = moment().format('YYYY-MM-DD HH:mm:ss');
  const token = jwt.sign({email, password, updateAt}, SECRET_KEY, {
    expiresIn: '2 days'
  })
  req.session.token = token
  auth.siginIn({email, password, token, updateAt} ,function(err, auth) {
    res.json({auth})
  })
})

router.get('/', function(req, res) {
  console.log(req)
  console.log(req.session.uid);
  res.json({uid: req.session.uid})
})

export default router
