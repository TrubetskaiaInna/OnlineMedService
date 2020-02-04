import React, { Component } from 'react'
import DoctorListItem from '../DoctorListItem/DoctorListItem'
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
                {/*{this.props.mainUser.login ?*/}
                {/*  <button onClick={this.setData} className='btn btn-primary'>Make an*/}
                {/*    appointment</button> : null}*/}
              </div>
            )
          })
        }
      </>
    )
  }
}

export default DoctorList
