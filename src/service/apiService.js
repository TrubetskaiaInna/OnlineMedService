import axios from 'axios'

let token

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
          gender: currentUser.sex,
          additionalInfo: currentUser.additionalInfo
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
        }).then(res => token = res.data.apiToken)
      .catch(error => console.log(error))
  }

  static logout () {
    return axios
      .post('http://127.0.0.1:8000/api/logout', null,
        { headers: { 'X-AUTH-TOKEN': token } })
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  static getDoctors () {
    return axios
      .get('http://127.0.0.1:8000/api/doctor/list')
      .then(res=>{
        return res
      })
      .catch(error=> console.log(error))
  }
}

