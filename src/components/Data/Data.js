import React from 'react'
import DatePicker from 'react-datepicker'
import { addDays, getDay } from 'date-fns'
import './Data.scss'

import 'react-datepicker/dist/react-datepicker.css'
import Time from '../Time/TimeContainer'

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
    const { weekend } = this.props
    const day = getDay(date)
    return day !== weekend[0]
      && day !== weekend[1]
      && day !== weekend[2]
      && day !== weekend[3]
      && day !== weekend[4]
      && day !== weekend[5]
      && day !== weekend[6]
  }

  render () {
    return (
      <>
        <div className='wrapperDate'>
          <DatePicker
            inline
            selected={this.state.startDate}
            onChange={this.handleChange}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            maxDate={addDays(new Date(), 6)}
            filterDate={this.isWeekday}
            placeholderText="Select date"
          />
        </div>
        <Time date={this.state.startDate} history={this.props.history} error={this.props.error}/>
      </>
    )
  }
}
