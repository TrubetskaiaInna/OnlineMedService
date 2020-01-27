import React from 'react'
import { apiService2 } from '../../service/apiService'
import DoctorList from '../DoctorList/DoctorListContainer'

const AboutUsComponent = (props) => {
  props.setDoctorData (apiService2.getDoctor())
  return (
    <DoctorList doctor={apiService2.getDoctor()}/>
  )
}

export default AboutUsComponent
