export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL'
  }
}

export const actionGetAllUsers = (users) => {
  console.log('users', users)
  return {
    type: 'GET_ALL_USERS',
    users
  }
}
