import mysql from 'mysql'
class AuthModel {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'palette_db'
    });
  }

  siginIn(data, cb) {
    if (data.email === 'hoge@example.com' && data.password === '1234') {
      console.log(`INSERT INTO db_name.tbl_name(token, updateAt) VALUES (${data.token}, ${data.updateAt});`)
      cb(null, {
        success: true
      })
    }
  }

  siginUp(data, cb) {
    const sql = `INSERT INTO companies(name, mail, password, zipcode, address, tel, created_at, updated_at) VALUES ("${data.name}", "${data.email}", "${data.password}", "${data.zipcode}", "${data.address}", "${data.tel}", "${data.createdAt}", "${data.updateAt}");`
    console.log(sql)
    this.connection.query(sql, function(err, rows, fields) {
      if (err) throw err;
      cb(null, rows)
    });
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
