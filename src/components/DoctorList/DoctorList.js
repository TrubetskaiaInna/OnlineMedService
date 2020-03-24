import React, { Component } from "react";
import DoctorListItem from "../DoctorListItem/DoctorListItemContainer";
import { apiService } from "../../service/apiService";
import Spinner from "../Spinner/Spinner";
import "./DoctorList.scss";

class DoctorList extends Component {
  constructor() {
    super();
    this.state = { error: "" };
  }

  componentDidMount = () => {
    const {
      showLoading,
      hideLoading,
      setDoctorData,
      clearDoctorData
    } = this.props;
    showLoading();
    apiService
      .getDoctors()
      .then(response => {
        hideLoading();
        setDoctorData(response.data.doctors);
      })
      .catch(error => {
        this.setState({ error: "download failed, please try again later" });
      });
    clearDoctorData();
  };

  render() {
    const { mainUser, doctors, action } = this.props;
    const { error } = this.state;
    return (
      <>
        {error && <div className="errorGetDoctor">{error}</div>}
        {action ? (
          <Spinner />
        ) : (
          doctors.map(doctor => {
            return (
              <div className="wrapperItemCard" key={doctor.id}>
                <DoctorListItem doctor={doctor} user={mainUser} />
              </div>
            );
          })
        )}
      </>
    );
  }
}

export default DoctorList;
