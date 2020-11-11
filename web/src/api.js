import axios from 'axios'

const { REACT_APP_API_BASE_URL } = process.env

const Api = axios.create({
  baseURL: 'http://localhost:3001/api/v1'
})

export default Api
