import mysql from 'mysql'
class User {
  constructor() {
  }

  create(user, text, cb) {
    cb('12345')
  }

  get(id, cb) {
    cb(null, {id, text: 'Very nice example'})
  }

  all(cb) {

    this.connection = mysql.createConnection({
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'heaup_db',
      port: '3306'
    });

    this.connection.query('SELECT * FROM stores', function(err, rows, fields) {
      console.log(err)
      if (err) throw err;
      console.log('rows: ', rows[0].solution)
      console.log('fields: ', rows[0].solution)
    });
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
