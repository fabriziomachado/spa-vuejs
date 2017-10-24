
import axios from 'axios'
import localforage from 'localforage'

const http = axios.create({
  baseURL: 'https://restify-fcm.c9users.io'
})

// REQUESTS HANDLES
const intercepRequest = async (config) => {
  const token = await localforage.getItem('token')
  config.headers.common['x-access-token'] = token
  return config
}
const intercepRequestError = (error) => {
  Promise.reject(error)
}

// RESPONSES HANDLERS
const intercepResponse = (response) => response
const intercepResponseError = (error) => {
  alert(error.message)
}

http.interceptors.request.use(intercepRequest, intercepRequestError)
http.interceptors.response.use(intercepResponse, intercepResponseError)

export default http
