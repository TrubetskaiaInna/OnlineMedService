import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './homeComponent.scss'

class HomeComponent extends Component {
  render () {
    return (
      <>
        <header>
          <div className='wrapperLinc'><NavLink className='linc' to='/'> <h1>OnlineMedService</h1></NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/about'>About as</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/registration'>Registration</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/login'>Personal account</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/contact'>Contact</NavLink></div>
        </header>
        <div className='image'/>
      </>
    )
  }
}

export default HomeComponent
