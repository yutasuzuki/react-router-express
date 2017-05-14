import mysql from 'mysql'
class User {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'palette_db'
    });
  }

  create(user, text, cb) {
    cb('12345')
  }

  get(id, cb) {
    cb(null, {id, text: 'Very nice example'})
  }

  all(uid, cb) {
    console.log('userModel.all -> uid', uid)
    this.connection.query('SELECT * FROM users', function(err, rows, fields) {
      if (err) throw err;
      cb(null, rows)
    });
  }

  allByUser(user, cb) {
    cb(null, [])
  }
}

export default User
