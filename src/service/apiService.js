import users from '../users.json'

export default class apiService {
  static login (currentUser) {
    return new Promise((resolve, reject) => {
      users.forEach((user) => {
        if (user.nickname === currentUser.nicknameLog && user.password === currentUser.passwordLog) {
          window.localStorage.setItem('success', 'true')
        }
      })
      if (window.localStorage.getItem('success') === 'true') {
        setTimeout(() => { resolve(currentUser) }, 700)
      } else {
        setTimeout(() => { reject(new Error(401)) }, 700)
      }
    })
  }
}
