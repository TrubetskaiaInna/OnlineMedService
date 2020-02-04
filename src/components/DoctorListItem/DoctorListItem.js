import React, { useState } from 'react'
import './DoctorListItem.scss'
import TransitionsModal from '../../components/Info/InfoContainer'
import Data from '../Data/Data'

const DoctorListItem = ({ doctor, user }) => {
  const { name, type, photo } = doctor
  const { login } = user
  const [aaaa, setaaaa] = useState(false)
  const handleClick = () => {
    setaaaa(!aaaa)
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
      {login && aaaa ? <Data doctor={doctor}/> : null}

      {/*{login ?*/}
      {/*  <button onClick={setData} className='btn btn-primary'>Make an*/}
      {/*    appointment</button> : null}*/}
    </>
  )
}

export default DoctorListItem
