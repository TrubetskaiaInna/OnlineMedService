import React, { Component } from 'react'
import DoctorListItem from '../DoctorListItem/DoctorListItem'
import { apiService2 } from '../../service/apiService'
import { NavLink } from 'react-router-dom'

class DoctorList extends Component {

  componentDidMount () {
    apiService2.getDoctor()
      .then((data) => {
        this.props.setDoctorData(data)
      })
    this.props.clearDoctorData()
  }

  render () {
    const { doctors } = this.props
    return (
      <>
        {
          doctors.map((doctor) => {
            return (
              <div className='wrapperItemCard' key={doctor.id}><DoctorListItem doctor={doctor}/>
                {this.props.mainUser.login ?
                  <NavLink to='/data'  className='btn btn-primary'>Make an
                    appointment</NavLink> : null}
              </div>)
          })
        }
      </>
    )
  }
}

export default DoctorList
