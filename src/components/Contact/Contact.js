import React, { Component } from 'react'
import GoogleMap from '../../components/GoogleMap/GoogleMap'
import './Contact.scss'

class Contact extends Component {
  render () {
    return (
      <>
        <div className='map'>
          <GoogleMap/>
        </div>
        <div className='contactData'>
          <span>st. Maksyma Zalizniaka, 17</span>
          <span>Phone 33-22-11</span>
          <span>OnlaneMedService@ukr.net</span>
        </div>
      </>
    )
  }
}

export default Contact
