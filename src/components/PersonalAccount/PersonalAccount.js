import React, { Component } from 'react'
import './PersonalAccount.scss'
import DoctorList from '../DoctorList/DoctorListContainer'

class PersonalAccount extends Component {
  constructor (){
    super()
    this.state = {
      action: false
    }
  }

  setDoctor = () =>{
    this.setState({action: true})
  }

  render () {
    return (
      <>
        <div className='infoPerson'>
          <h4> Inform: </h4>

        </div>
        <div className='wrapperButton'>
          <button onClick={this.setDoctor} className='btn btn-outline-info'>Make an appointment</button>
        </div>
        <div className='title'> {this.state.action ? <h4>Select a doctor</h4>: null}</div>
        <div className='wrapperCard'> {this.state.action ? <DoctorList/>: null}</div>
      </>
    )
  }
}

export default PersonalAccount
