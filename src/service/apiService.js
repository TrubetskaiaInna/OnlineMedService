export default class apiService {
  static login (currentUser) {
    return new Promise((resolve, reject) => {
        if (currentUser.nickname === currentUser.nicknameLog && currentUser.password === currentUser.passwordLog) {
          window.localStorage.setItem('success', 'true')
        }
      if (window.localStorage.getItem('success') === 'true') {
        resolve(currentUser)
      } else {
        reject(new Error(401))
      }
    })
  }
}
