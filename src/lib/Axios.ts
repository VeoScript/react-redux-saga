import axios from 'axios'

const api = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Content-Type': 'application/json'
  },
})

export default api