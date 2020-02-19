import React, { Component } from 'react'
import DoctorListItem from '../DoctorListItem/DoctorListItemContainer'
import { apiService } from '../../service/apiService'
import Spinner from '../Spinner/Spinner'

class DoctorList extends Component {

  componentDidMount = () => {
    this.props.showLoading()
    apiService.getDoctors()
      .then((res) => {
        this.props.hideLoading()
        this.props.setDoctorData(res.data.doctors)
      })
      .catch(error => console.log (error))
    this.props.clearDoctorData()
  }

  render () {
    const { mainUser } = this.props
    const { doctors } = this.props
    return (
      <>
        {this.props.action ? <Spinner/> :
          (doctors).map((doctor) => {
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
