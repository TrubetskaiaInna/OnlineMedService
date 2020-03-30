import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { addDays, getDay } from "date-fns";
import "./Data.scss";
import { apiService } from "../../service/apiService";
import "react-datepicker/dist/react-datepicker.css";
import Time from "../Time/TimeContainer";
import Spinner from "../Spinner/Spinner";
import { isWeekend } from "../../utils/DataUtils";

export default class Data extends Component {
  state = {
    startDate: new Date(),
    weekend: [],
    error: ""
  };

  handleChange = async date => {
    this.props.showLoading();
    this.props.clearScheduleDoctor();
    this.setState({
      startDate: date
    });
    await apiService
      .getSchedule(this.props.selectedDoctors.id)
      .then(response => {
        this.props.hideLoading();
        let data = isWeekend(response);
        this.setState(data);
        this.props.setScheduleDoctor(response.data.schedule);
        this.setState({ error: "" });
      })
      .catch(() => {
        this.props.hideLoading();
        this.setState({ error: "download failed, please try again later" });
      });
  };

  isWeekday = date => {
    const { weekend } = this.state;
    const day = getDay(date);
    return (
      day !== weekend[0] &&
      day !== weekend[1] &&
      day !== weekend[2] &&
      day !== weekend[3] &&
      day !== weekend[4] &&
      day !== weekend[5] &&
      day !== weekend[6]
    );
  };


  render() {
    const { startDate, error, weekend } = this.state;
    const { action, history } = this.props;
    return (
      <>
        <div className="wrapperDate">
          <DatePicker
            inline
            onChange={this.handleChange}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            maxDate={addDays(new Date(), 6)}
            filterDate={this.isWeekday}
            placeholderText="Select date"
          />
        </div>
        {action ? (
          <Spinner />
        ) : (
          <Time
            date={startDate}
            history={history}
            error={error}
            weekend={weekend}
          />
        )}
      </>
    );
  }
}
