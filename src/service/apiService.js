import doctors from '../doctors.json'
import axios from 'axios'

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

export class apiService {
  static registration (currentUser) {
    return axios
      .post('http://127.0.0.1:8000/api/sign-up',
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
      ).then(response => {
        console.log(response)
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          console.log('Strange Error', error.message)
        }
        console.log(error.config)
      })
  }

  static login (currentUser) {
    return axios
      .post('http://127.0.0.1:8000/api/login',
        {
          username: currentUser.userNameLog,
          password: currentUser.passwordLog
        })
  }
}

