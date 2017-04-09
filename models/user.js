class User {
  create(user, text, cb) {
    cb('12345')
  }

  get(id, cb) {
    cb(null, {id:id, text: 'Very nice example'})
  }

  all(cb) {
    cb(null, [])
  }

  allByUser(user, cb) {
    cb(null, [])
  }
}

export default User
