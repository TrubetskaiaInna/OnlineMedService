import React from 'react'
import DatePicker from 'react-datepicker'
import { addDays, getDay } from 'date-fns'
import './Data.scss'

import 'react-datepicker/dist/react-datepicker.css'

// CSS Modules, react-datepicker-cssmodules.css

export default class Data extends React.Component {
  state = {
    startDate: null
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }

  isWeekday = date => {
    const { workDays } = this.props.doctor
    const day = getDay(date)
    return day !== workDays[0]
      && day !== workDays[1]
      && day !== workDays[2]
      && day !== workDays[3]
      && day !== workDays[4]
      && day !== workDays[5]
      && day !== workDays[6]
  }

  render () {
    return (
      <div className='wrapperDate'>
        {/*<span>{this.props.doctor.name}</span>*/}
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          maxDate={addDays(new Date(), 7)}
          filterDate={this.isWeekday}
          placeholderText="Select date"
        />
      </div>
    )
  }
}
