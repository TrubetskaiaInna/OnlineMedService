import React from 'react'
import './DoctorListItem.scss'
import TransitionsModal from '../../components/Info/InfoContainer'
import { NavLink } from 'react-router-dom'

const DoctorListItem = (props) => {
  const { fullName, type, photo } = props.doctor
  const { login } = props.user
  const handleClick = () => {
    props.setSelectedDoctorData(props.doctor)
  }
  return (
    <>
      {login ? <NavLink to='/entry' className='card' onClick={handleClick}>
        <div className='wrapperPhoto'><img className='photo' src={photo} alt='img'/></div>
        <div className='wrapperText'>
          <h4 className='card-title'>{fullName}</h4>
          <p className='card-text'>{type}</p>
        </div>
      </NavLink> : <div className='card'>
        <div className='wrapperPhoto'><img className='photo' src={photo} alt='img'/></div>
        <div className='wrapperText'>
          <h4 className='card-title'>{fullName}</h4>
          <p className='card-text'>{type}</p>
        </div>
      </div>}
      <TransitionsModal doctor={props.doctor}/>
    </>
  )
}

export default DoctorListItem
