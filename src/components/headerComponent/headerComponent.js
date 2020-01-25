import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './headerComponent.scss'

class HeaderComponent extends Component {

  exitFunction = () => {
    window.localStorage.setItem('success', 'false')
  }

  render () {
    return (
      <div>
        <header>
          <div className='wrapperLinc'><NavLink className='linc' to='/'><h1>OnlineMedService</h1></NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/about'>About as</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/registration'>Registration</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/login'>Personal account</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/contact'>Contact</NavLink></div>
          <div className='buttonLinc' onClick={this.exitFunction}><NavLink className='linc' to='/'>Exit</NavLink></div>
        </header>
      </div>
    )
  }
}

export default HeaderComponent
