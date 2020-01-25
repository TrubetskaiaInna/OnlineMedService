import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class PersonalAccountComponent extends Component {

  exitFunction = () => {
    window.localStorage.setItem('success', 'false')
    this.props.history.push('/')
  }

  render () {
    return (
      <>
        <div className='nav'>
          <div className='wrapperLinc'><NavLink className='linc' to='/'>Home</NavLink></div>
          <div className='buttonLinc' onClick={this.exitFunction}>Exit</div>
        </div>
      </>
    )
  }
}

export default PersonalAccountComponent
