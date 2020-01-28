import React from 'react'
import './DoctorListItem.scss'
import TransitionsModal from '../../components/Info/InfoContainer'

const DoctorListItem = ({ doctor }) => {

  const { name, type, photo } = doctor
  return (
    <>
      <div className='card border-secondary mb-3'>
        <div className='card-body'>
          <div> <img className='photo' src={photo} alt='img'/> </div>
          <h4 className='card-title'>{name}</h4>
          <p className='card-text'>{type}</p>
          <TransitionsModal doctor={doctor}/>
        </div>
      </div>
    </>
  )
}

export default DoctorListItem
