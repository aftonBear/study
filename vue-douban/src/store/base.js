import axios from 'axios'

const host = '/api/'

export default (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(host + url, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch(err => reject(err))
  })
}
