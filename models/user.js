// // Create new comment in your database and return its id
// export const create = (user, text, cb) => {
//   cb('12345')
// }
//
// // Get a particular comment
// export const get = (id, cb) => {
//   cb(null, {id:id, text: 'Very nice example'})
// }
//
// // Get all comments
// export const all = (cb) => {
//   cb(null, [])
// }
//
// // Get all comments by a particular user
// export const allByUser = (user, cb) => {
//   cb(null, [])
// }


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
