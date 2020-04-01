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

  getSchedule = () => {
    const { selectedDoctors, hideLoading, setScheduleDoctor } = this.props;
    apiService
      .getSchedule(selectedDoctors.id)
      .then(response => {
        console.log(response)
        hideLoading();
        let data = isWeekend(response);
        this.setState(data);
        setScheduleDoctor(response.data.schedule);
        this.setState({ error: "" });
      })
      .catch(() => {
        hideLoading();
        this.setState({ error: "download failed, please try again later" });
      });
  };

  componentDidMount() {
    const { showLoading, clearScheduleDoctor } = this.props;
    showLoading();
    clearScheduleDoctor();
    this.getSchedule();
  }

  handleChange = date => {
    const { showLoading, clearScheduleDoctor } = this.props;
    showLoading();
    clearScheduleDoctor();
    this.setState({
      startDate: date
    });
    this.getSchedule();
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
