import axios from 'axios'

export default axios.create({
  baseURL: 'https://todo-list-a40af-default-rtdb.firebaseio.com/'
})
