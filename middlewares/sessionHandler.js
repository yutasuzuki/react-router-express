import jwt from 'jsonwebtoken'
import moment from 'moment'

const SECRET_KEY = 'CJwYXNzd29yZCI6IjEiLCJpYXQiOjE0OTIzMTU0NzUsIm';

const sessionHandler = (req, res, next) => {
  if (req.session.token) {
    next()
  } else {
    res.redirect('/')
  }
}

export default sessionHandler
