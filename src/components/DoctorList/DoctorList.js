import React, { Component } from 'react'
import DoctorListItem from '../DoctorListItem/DoctorListItemContainer'
import { apiService2 } from '../../service/apiService'

class DoctorList extends Component {

  componentDidMount () {
    apiService2.getDoctor()
      .then((data) => {
        this.props.setDoctorData(data)
      })
    this.props.clearDoctorData()
  }

  render () {
    const { mainUser } = this.props
    const { doctors } = this.props
    return (
      <>
        {
          doctors.map((doctor) => {
            return (
              <div className='wrapperItemCard' key={doctor.id}><DoctorListItem doctor={doctor} user={mainUser}/>
              </div>
            )
          })
        }
      </>
    )
  }
}

export default DoctorList
