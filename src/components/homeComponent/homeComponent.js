import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './homeComponent.scss'
class HomeComponent extends Component {

  exitFunction = () => {
    window.localStorage.setItem('success', 'false')
    this.props.history.push('/')
  }
  render () {
    return (
      <>
        <header>
          <div className='wrapperLinc'><NavLink className='linc' to='/'><h1>OnlineMedService</h1></NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/about'>About as</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/registration'>Registration</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/login'>Personal account</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/contact'>Contact</NavLink></div>
          <div className='buttonLinc' onClick={this.exitFunction}>Exit</div>
        </header>
        <div className='image'/>
      </>
    )
  }
}

export default HomeComponent
