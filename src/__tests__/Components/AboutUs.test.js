import React from 'react'
import { render } from '@testing-library/react'
import AboutUs from '../../components/AboutUs/AboutUs'
jest.mock('../../components/Carousel/Carousel.js', () => () => 'Carousel')
jest.mock('../../components/DoctorList/DoctorListContainer.js', () => () => 'DoctorList')

test('renders learn react link', () => {
  const { getByText } = render(<AboutUs />)
  const linkElement = getByText(/Our doctors/i)
  expect(linkElement).toBeInTheDocument()
})
