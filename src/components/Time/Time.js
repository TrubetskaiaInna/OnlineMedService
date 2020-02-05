import React from 'react'
import { getDay, getDate } from 'date-fns'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const Time = ({ date, doctor }) => {
  let day = days[date.getDay()]
  let numberDay = date.getDate()

  return (
    <>
      <div>
        {day}{numberDay}{doctor.name}
      </div>
      <button>Sign</button>
    </>
  )

}

export default Time
