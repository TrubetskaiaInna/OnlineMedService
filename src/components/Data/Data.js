import React from 'react'
import DatePicker from 'react-datepicker'
import { addDays, getDay } from 'date-fns'
import './Data.scss'

import 'react-datepicker/dist/react-datepicker.css'

// CSS Modules, react-datepicker-cssmodules.css

export default class Data extends React.Component {
  state = {
    startDate: new Date()
  }

  handleChange = date => {
    this.setState({
      startDate: date
    })
  }

  isWeekday = date => {
    const day = getDay(date)
    return day !== 0 && day !== 6
  }

  render () {
    return (
      <div className='wrapperDate'>
        <h4>Select date</h4>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          maxDate={addDays(new Date(), 7)}
          filterDate={this.isWeekday}
        />
      </div>
    )
  }
}
