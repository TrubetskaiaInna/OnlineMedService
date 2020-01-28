import React from 'react'

const DoctorListItem = ({ doctor }) => {
  const { name, type } = doctor
  return (
      <>
        <span>{name}</span>
        <span>{type}</span>
      </>
  )
}

export default DoctorListItem
