import axios from 'axios'

export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL'
  }
}

// TODO: アクションで非同期通信をするなとエラーになる
// export const toggleModal = () => {
//   let items = [];
//   axios.get('/api/users').then((res) => {
//     console.log(res);
//     items = res.data
//   })
// }
