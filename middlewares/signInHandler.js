import jwt from 'jsonwebtoken'
import moment from 'moment'

const SECRET_KEY = 'CJwYXNzd29yZCI6IjEiLCJpYXQiOjE0OTIzMTU0NzUsIm';

const signInHandler = (req, res, next) => {
  const email = req.body.email
  const password = req.body.password
  const updateAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const token = jwt.sign({email, password, updateAt}, SECRET_KEY, {
    expiresIn: 360
  });
  console.log({email, password, token, updateAt});
  if (email && password) {
    req.session.token = token;
    next()
  } else {
    res.redirect('/')
  }
  // auth.siginIn({email, password, token, updateAt} ,function(err, auth) {
  //   res.json({auth})
  // });
}

export default signInHandler
