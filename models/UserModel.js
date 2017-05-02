import mysql from 'mysql'
class User {
  constructor() {
    this.connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'heaup_db'
    });
  }

  create(user, text, cb) {
    cb('12345')
  }

  get(id, cb) {
    cb(null, {id, text: 'Very nice example'})
  }

  all(cb) {
    this.connection.query('SELECT * FROM stores', function(err, rows, fields) {
      if (err) throw err;
      cb(null, rows)
    });
  }

  allByUser(user, cb) {
    cb(null, [])
  }
}

export default User
