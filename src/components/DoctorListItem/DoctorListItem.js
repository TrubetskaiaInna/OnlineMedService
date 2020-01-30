import React from 'react'
import './DoctorListItem.scss'
import TransitionsModal from '../../components/Info/InfoContainer'

const DoctorListItem = ({ doctor }) => {
  const { name, type, photo } = doctor
  return (
    <>
      <div className='card'>
        <div className='wrapperPhoto'><img className='photo' src={photo} alt='img'/></div>
        <div className='wrapperText'>
          <h4 className='card-title'>{name}</h4>
          <p className='card-text'>{type}</p>
        </div>
      </div>
      <TransitionsModal doctor={doctor}/>
    </>
  )
}

export default DoctorListItem
