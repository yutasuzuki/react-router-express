import moment from 'moment'
import AuthModel from '../models/AuthModel'
const auth = new AuthModel();

const signUpHandler = (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  const zipcode = req.body.zipcode
  const address = req.body.address
  const tel = req.body.tel
  const createdAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const updateAt = moment().format('YYYY-MM-DD HH:mm:ss')
  const data = {
    name,
    email,
    password,
    zipcode,
    address,
    tel,
    createdAt,
    updateAt
  }
  console.log(data)
  auth.siginUp(data, (err, rows) => {
    console.log('登録OK')
    console.log(rows)
    next()
  })
}
export default signUpHandler
