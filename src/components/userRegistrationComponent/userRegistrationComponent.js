import React, { Component } from 'react'
import './userRegistrationComponent.scss'

export default class userRegistrationComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      tel: '',
      password: '',
      confirmPassword: '',
      address: '',
      sex: {
        man: false,
        woman: false
      },
      additionalInfo: ''
    }
  }

  handleInput = ({ target: { name, value }}) => {
    this.setState({
      [name]: value
    })
  }

  handleRadio = (e) => {
    let man
    let woman
    if (e.target.name === 'man') {
      man = e.target.checked
      woman = !e.target.checked
    } else {
      man = !e.target.checked
      woman = e.target.checked
    }
    this.setState({
      sex: { man, woman }
    }, () => {
    //  this.isValidForm()
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { setUserData } = this.props
    const { firstName, lastName, userName, email,  tel, password, confirmPassword, address, sex, additionalInfo } = this.state
    setUserData({
      firstName,
      lastName,
      userName,
      email,
      tel,
      password,
      confirmPassword,
      address,
      sex,
      additionalInfo
    })
  }

  render () {
    return (
      <div className='wrapperForm'>
        <form
          onSubmit={this.onSubmit}>
          <label>

            <div className='firstName'>
              <span> <span className='important'> * </span> First name: </span>
              <input
                name="firstName"
                className='inputFirstName'
                type="text"
                value={this.state.firstName}
                onChange={this.handleInput}
                placeholder='Enter first name'/>
            </div>

            <div className='lastName'>
              <span> <span className='important'> * </span>Last name:</span>
              <input
                name="lastName"
                className='inputLastName'
                value={this.state.lastName}
                type="text"
                onChange={this.handleInput}
                placeholder='Enter last name'/>
            </div>

            <div className='userName'>
              <span> <span className='important'> * </span>User name:</span>
              <input
                name="userName"
                className='inputUserName'
                value={this.state.userName}
                type="text"
                onChange={this.handleInput}
                placeholder='Enter user name'/>
            </div>

            <div className='email'>
              <span> <span className='important'> * </span> Email: </span>
              <input
                name="email"
                className='inputEmail'
                value={this.state.email}
                type="text"
                onChange={this.handleInput}
                placeholder='Enter email'/>
            </div>

            <div className='tel'>
              <span> <span className='important'> * </span> Tel: </span>
              <input
                name="tel"
                className='inputTel'
                value={this.state.tel}
                type="text"
                onChange={this.handleInput}
                placeholder='Enter tel'/>
            </div>

            <div className='password'>
              <span> <span className='important'> * </span> Password: </span>
              <input className='inputPassword'
                     type="password"
                     value={this.state.password}
                     name="password"
                     onChange={this.handleInput}
                     placeholder='Enter password'/>
            </div>

            <div className='confirmPassword'>
              <span> <span className='important'> * </span>Confirm password: </span>
              <input
                value={this.state.confirmPassword}
                name="confirmPassword"
                className='inputConfirmPassword'
                type="password"
                onChange={this.handleInput}
                placeholder='Enter password'/>
            </div>

            <div className='address'>
              <span> <span className='important'> * </span>Address: </span>
              <input
                value={this.state.address}
                name="address"
                className='inputAddress'
                type="address"
                onChange={this.handleInput}
                placeholder='Enter address'/>
            </div>


            <div className='sex'>
              <span> <span className='important'> * </span> Sex: </span>
              <div className='wrapperRadio'>
                <span> woman </span>
                <input type="radio"
                       name="woman"
                       checked={this.state.sex.woman}
                       onChange={this.handleRadio}/>
                <span>man</span>
                <input type="radio"
                       name="man"
                       checked={this.state.sex.man}
                       onChange={this.handleRadio}/>
              </div>
            </div>


            <div className='info'>
              <span>Additional info:</span>
              <textarea
                value={this.state.additionalInfo}
                name='additionalInfo'
                onChange={this.handleInput}
                className='inputInfo'/>
            </div>

          </label>

          <div className='wrapperButton'>
            <input className='btn btn-secondary' type="submit" value="Submit"/>
          </div>

          <span className='infoUser'>* field is required</span>
        </form>

      </div>
    )
  }
}
