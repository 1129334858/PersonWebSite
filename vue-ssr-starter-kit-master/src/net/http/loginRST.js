import request from 'axios'
import qs from 'qs'
import publicKey from '../rsa_pub'

const baseUrl = 'http://192.168.7.210:5000/api/v1/logins/'
const localUrl = 'http://192.168.7.111:3009/localLogin'

/**
 * 服务器登录
 * @param username
 * @param password
 * @returns {axios.Promise}
 */
export function loginRST (username, password) {
  let encrypt = new this.$jsEncrypt.JSEncrypt()
  encrypt.setPublicKey(publicKey)
  let params = {
    username: encrypt.encrypt(username),
    password: encrypt.encrypt(password),
    application: {href: 'http://192.168.6.210:5000/api/v1/applications/gwUpBQ3HpXxItT7OcChoCA'}
  }

  // let params = {
  //   key: username,
  //   value: password,
  //   application: {href: 'http://192.168.6.210:5000/api/v1/applications/gwUpBQ3HpXxItT7OcChoCA'}
// }

  return request.post(baseUrl, qs.stringify(params))
}

/**
 *  本地登录
 */
export function localLoginRST (username, password) {
  let params = {
    username: username,
    password: password
  }

  return request.post(localUrl, qs.stringify(params))
}
