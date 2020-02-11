import users from '../users.json'
import doctors from '../doctors.json'
import axios from 'axios'

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

export class apiServiceRegistrationUser {
  static registration (currentUser) {
    axios.post('http://127.0.0.1:8000/api/sign-up',
      {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.userName,
        planePassword: currentUser.password,
        address: currentUser.address,
        phone: currentUser.phone,
        gender: currentUser.sex
      }
    ).then(res => console.log(res)).catch(error => console.log(error))

  }
}
