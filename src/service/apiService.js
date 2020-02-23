import axios from 'axios'
import { API_HOST } from '../config/index'

export class apiService {
  static registration (currentUser) {
    return axios
      .post(`${API_HOST}sign-up`,
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
      .post(`${API_HOST}login`,
        {
          username: currentUser.userNameLog,
          password: currentUser.passwordLog
        }).then((response) =>{
        localStorage.setItem('token', response.data.apiToken)
      })
  }

  static logout () {
    return axios
      .post(`${API_HOST}logout`,
        null,
        { headers: { 'X-AUTH-TOKEN': localStorage.getItem('token') } })
      .then(response => console.log(response))
  }

  static getDoctors () {
    return axios
      .get(`${API_HOST}doctor/list`)
      .then(response => {
        return response
      })
      .catch(error => console.log(error))
  }

  static getSchedule (idDoctor) {
    return axios
      .get(`${API_HOST}doctor/${idDoctor}/schedule`)
      .then(response => {
        return response
      })
      .catch((error => console.log(error)))
  }
}
