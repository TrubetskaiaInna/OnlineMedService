import React from 'react'
import PersonalAccount from '../../components/PersonalAccount/PersonalAccount'
import renderWithRedux from '../../__mocks__/renderWihtRedux'
jest.mock('../../components/DoctorList/DoctorList', () => () => 'DoctorList')
jest.mock('../../components/Appointment/Appointment', () => () => 'Appointment')

test('renders learn react link', () => {
  const { getByText } = renderWithRedux(<PersonalAccount />,{})
  expect(getByText(/Your entry at doctor/i)).toBeInTheDocument()
  expect(getByText(/Appointment/i)).toBeInTheDocument()
  expect(getByText(/Select a doctor/i)).toBeInTheDocument()
  expect(getByText(/DoctorList/i)).toBeInTheDocument()
})
