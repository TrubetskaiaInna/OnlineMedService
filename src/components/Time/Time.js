import React from 'react'
import './Time.scss'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

const Time = ({ date }) => {
  let day = days[date.getDay()]
  let numberDay = date.getDate()
  let month = months[date.getMonth()]
  let year = date.getFullYear()

  return (
    <>
      <div className='wrapperTitle'>
        <h5> {day}, {numberDay} {month} {year}</h5>
      </div>
      <div className='wrapperTime'>
      </div>
      <div className='wrapperButton'>
        <button className='btn btn-outline-primary'>Confirm</button>
      </div>
    </>
  )

}

export default Time
