import axios from "axios";
import { API_HOST } from "../config/index";

export class apiService {
  static registration(currentUser) {
    return axios.post(`${API_HOST}sign-up`, {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      username: currentUser.userName,
      planePassword: currentUser.password,
      address: currentUser.address,
      phone: currentUser.phone,
      gender: currentUser.sex,
      additionalInfo: currentUser.additionalInfo
    });
  }

  static login(currentUser) {
    return axios.post(`${API_HOST}login`, {
      username: currentUser.userNameLog,
      password: currentUser.passwordLog
    });
  }

  static logout(token) {
    return axios
      .post(`${API_HOST}logout`, null, { headers: { "X-AUTH-TOKEN": token } })
      .then(response => console.log(response))
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }

  static getDoctors() {
    return axios
      .get(`${API_HOST}doctor/list`)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }

  static getSchedule(idDoctor) {
    return axios
      .get(`${API_HOST}doctor/${idDoctor}/schedule`)
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }

  static createAppointment(currentId, token) {
    return axios
      .post(
        `${API_HOST}appointment/create`,
        {
          scheduleId: currentId
        },
        { headers: { "X-AUTH-TOKEN": token } }
      )
      .then(response => {
        return response;
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }

  static getAppointment(token) {
    return axios
      .get(`${API_HOST}appointment/list`, {
        headers: { "X-AUTH-TOKEN": token }
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }

  static cancelAppointment(id, token) {
    return axios
      .put(`${API_HOST}appointment/${id}/cancel`, null, {
        headers: { "X-AUTH-TOKEN": token }
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }

  static getAuthorizationTokenPayment(token) {
    return axios
      .post(`${API_HOST}payment/generate-token`, null, {
        headers: { "X-AUTH-TOKEN": token }
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }

  static payment(nonce, appointmentId, token) {
    return axios
      .post(
        `${API_HOST}payment/${appointmentId}/pay`,
        { nonce },
        { headers: { "X-AUTH-TOKEN": token } }
      )
      .then(response => console.log(response))
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log("Strange Error", error.message);
        }
        console.log(error.config);
      });
  }
}
