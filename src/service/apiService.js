import axios from 'axios'

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
        })
  }

  static login (currentUser) {
    return axios
      .post('http://127.0.0.1:8000/api/login',
        {
          username: currentUser.userNameLog,
          password: currentUser.passwordLog
        }).then(response => localStorage.setItem('token', response.data.apiToken))
      .catch(error => console.log(error))
  }

  static logout () {
    return axios
      .post('http://127.0.0.1:8000/api/logout',
        null,
        { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token') } })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  static getDoctors () {
    return axios
      .get('http://127.0.0.1:8000/api/doctor/list')
      .then(response => {
        return response
      })
      .catch(error => console.log(error))
  }
}

