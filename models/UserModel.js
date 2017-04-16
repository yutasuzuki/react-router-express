class User {
  create(user, text, cb) {
    cb('12345')
  }

  get(id, cb) {
    cb(null, {id, text: 'Very nice example'})
  }

  all(cb) {
    cb(null, [{
      id: 1,
      text: 'sample1',
    },
    {
      id: 2,
      text: 'sample2',
    }])
  }

  allByUser(user, cb) {
    cb(null, [])
  }
}

export default User
