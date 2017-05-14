import jwt from 'jsonwebtoken'
import moment from 'moment'
import AuthModel from '../models/AuthModel'
const auth = new AuthModel();

const SECRET_KEY = 'CJwYXNzd29yZCI6IjEiLCJpYXQiOjE0OTIzMTU0NzUsIm';

const signInHandler = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  const updateAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const token = jwt.sign({email, password, updateAt}, SECRET_KEY, {
    expiresIn: 360
  });
  const data = {
    email,
    password,
    token,
    updateAt
  }
  auth.siginIn(data, function(err, response) {
    if (err) {
      res.redirect('/')
    } else {
      req.session.token = token;
      req.session.uid = response.data.id
      next()
    }
  })
}

export default signInHandler
