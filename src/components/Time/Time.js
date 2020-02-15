import React from 'react'
import './Time.scss'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']

const Time = (props) => {
  console.log(888888888, props)
  let day = days[props.date.getDay()]
  let numberDay = props.date.getDate()
  let month = months[props.date.getMonth()]
  let year = props.date.getFullYear()

  return (
    <>
      <div className='wrapperTitle'>
        <h5> {day}, {numberDay} {month} {year}</h5>
      </div>
      <div className='wrapperTime'>
        {props.selectedDoctors.time.map((element) => {
          console.log(element)
          return (
            <div className='btn btn-secondary' id='time'> {element} </div>
          )
        })
        }
      </div>
      <div className='wrapperButton'>
        <button className='btn btn-outline-primary'>Confirm</button>
      </div>
    </>
  )

}

export default Time
