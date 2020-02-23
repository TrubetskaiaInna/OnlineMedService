import React from 'react'
import DoctorList from '../DoctorList/DoctorListContainer'
import './AboutUs.scss'
import Carousel from '../Carousel/Carousel'

const AboutUs = () => {
  return (
    <>
      <Carousel />
      <div className='wrapper'>
        <h2>Our doctors</h2>
      </div>
      <div className='wrapperCard'>
        <DoctorList />
      </div>
    </>
  )
}

export default AboutUs
