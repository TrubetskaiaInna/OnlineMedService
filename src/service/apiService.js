import users from '../users.json'
import doctors from '../doctors.json'

export class apiService {
  static login (currentUser) {
    return new Promise((resolve, reject) => {
      users.forEach((user) => {
        if (user.userName === currentUser.userNameLog && user.password === currentUser.passwordLog) {
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

export class apiService2 {
  static getDoctor () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(doctors)
      }, 700)
      setTimeout(() => {
        reject(new Error(401))
      }, 700)
    })
  }
}
