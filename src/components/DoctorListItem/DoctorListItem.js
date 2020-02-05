import React, { useState } from 'react'
import './DoctorListItem.scss'
import TransitionsModal from '../../components/Info/InfoContainer'
import Data from '../Data/Data'

const DoctorListItem = ({ doctor, user }) => {
  const { name, type, photo } = doctor
  const { login } = user
  const [action, setaction] = useState(false)
  const handleClick = () => {
    setaction(!action)
  }
  return (
    <>
      <div className='card' onClick={handleClick}>
        <div className='wrapperPhoto'><img className='photo' src={photo} alt='img'/></div>
        <div className='wrapperText'>
          <h4 className='card-title'>{name}</h4>
          <p className='card-text'>{type}</p>
        </div>
      </div>
      <TransitionsModal doctor={doctor}/>
      {login && action ? <Data doctor={doctor}/> : null}
    </>
  )
}

export default DoctorListItem
