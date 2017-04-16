class AuthModel {
  siginIn(data, cb) {
    if (data.email === 'hoge@example.com' && data.password === '1234') {
      console.log(`INSERT INTO db_name.tbl_name(token, updateAt) VALUES (${data.token}, ${data.updateAt});`)
      cb(null, {
        success: true
      })
    }
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

export default AuthModel
