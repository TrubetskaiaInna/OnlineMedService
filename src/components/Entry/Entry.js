import React, { Component } from "react";
import Data from "../Data/DataContainer";
import "./Entry.scss";
import { apiService } from "../../service/apiService";

class Entry extends Component {
  constructor() {
    super();
    this.state = {
      weekend: [],
      error: ""
    };
  }

  isWeekend = res => {
    let weekday = [];
    let weekend = [];
    let week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let arr = res.data.schedule;
    for (let day of arr) {
      if (!weekday.includes(day.day)) {
        weekday.push(day.day);
      }
    }
    week
      .filter(x => !weekday.includes(x))
      .forEach(el => {
        weekend.push(week.indexOf(el));
      });
    this.setState({ weekend: weekend });
  };

  componentDidMount = async () => {
    await apiService
      .getSchedule(this.props.selectedDoctors.id)
      .then(res => {
        this.isWeekend(res);
        this.props.setScheduleDoctor(res.data.schedule);
      })
      .catch(() => {
        this.setState({ error: "download failed, please try again later" });
      });
  };

  render() {
    return (
      <div className="wrapperEntry">
        <div className="wrapperInfoDoctor">
          <div className="photoDoctor">
            <img
              className="photo"
              src={this.props.selectedDoctors.photo}
              alt="img"
            />
          </div>
          <div className="nameDoctor">
            <h3> {this.props.selectedDoctors.name}</h3>
          </div>
          <div className="typeDoctor">
            <h5> {this.props.selectedDoctors.type}</h5>
          </div>
          <div className="infoDoctor">
            <p>{this.props.selectedDoctors.info}</p>
          </div>
        </div>

        <Data
          weekend={this.state.weekend}
          history={this.props.history}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default Entry;
