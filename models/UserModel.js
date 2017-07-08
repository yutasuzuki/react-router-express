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

  all(cid, cb) {
    const sql = `SELECT user_point.user_id AS id, users.name AS name, sum(user_point.point) AS point FROM user_point INNER JOIN users ON user_point.user_id=users.id WHERE user_point.company_id=${cid} GROUP BY user_point.user_id;`;
    console.log(sql);
    this.connection.query(sql, function(err, rows, fields) {
      if (err) throw err;
      cb(null, rows)
    });
  }

  allByUser(user, cb) {
    cb(null, [])
  }
}

export default User
