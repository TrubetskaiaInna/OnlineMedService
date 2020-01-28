import React from 'react'
import DoctorList from '../DoctorList/DoctorListContainer'
import './AboutUs.scss'

const AboutUs = (props) => {
  return (
    <>
      <div className='wrapper'>
        <h2>Our doctors</h2>
      </div>
      <div className='wrapperCard'>
        <DoctorList/>
      </div>
    </>
  )
}

export default AboutUs

