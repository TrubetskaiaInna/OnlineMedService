import React, { Component } from 'react'
import DoctorListItem from '../DoctorListItem/DoctorListItem'

class DoctorList extends Component {

  render () {
    return (
      <ul>
        {
          this.props.doctor.map((doctor) => {
            return (
              <li key={doctor.id}><DoctorListItem doctor={doctor}/></li>
            )
          })
        }
      </ul>
    )
  }
}

export default DoctorList
