import React, { Component } from "react";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
import "./Contact.scss";
import img from "../../assets/image/telephone.png";
import img2 from "../../assets/image/envelope.png";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="wrapperMap">
          <GoogleMap />
        </div>
        <div className="contactData">
          <span>st. Maksyma Zalizniaka, 17</span>
          <div className="wrapperPhone">
            <img src={img} alt={"img"} className="phoneImg" />
            Phone 33-22-11
          </div>
          <div className="wrapperEmail">
            <img src={img2} alt={"img"} className="emailImg" />
            OnlaneMedService@ukr.net
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
