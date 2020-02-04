import React, { Component } from 'react'
import './PersonalAccount.scss'
import DoctorList from '../DoctorList/DoctorListContainer'

class PersonalAccount extends Component {
  constructor (){
    super()
    this.state = {
      actionSetDoctor: false
    }
  }

  setDoctor = () =>{
    this.setState({actionSetDoctor: true})
  }

  render () {
    return (
      <>
        <div className='infoPerson'>
          <h4> Inform:</h4>

        </div>
        <div className='wrapperButton'>
          <button onClick={this.setDoctor} className='btn btn-outline-info'>Make an appointment</button>
        </div>
        <div className='title'> {this.state.actionSetDoctor ? <h4>Select a doctor</h4>: null}</div>
        <div className='wrapperCard'> {this.state.actionSetDoctor ? <DoctorList/>: null}</div>
      </>
    )
  }
}

export default PersonalAccount
