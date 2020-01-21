import React, { Component } from 'react'
import MaskedInput from 'react-text-mask'
import './userRegistrationComponent.scss'

export default class userRegistrationComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      firstNameError: '',
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

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    })
  }

  handleFirsName = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    }, () => {
      let re = new RegExp('^[a-zA-Z]+$')
      let result = re.test(this.state.firstName)
      if (!result) {
        this.setState({ firstNameError: 'first name can only contain letters' }
        )
      } else {
        this.setState({ firstNameError: '' }
        )
      }
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
    const { firstName, lastName, userName, email, tel, password, confirmPassword, address, sex, additionalInfo } = this.state
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

          <div className='firstName'>
            <span> <span className='important'> * </span> First name: </span>
            <input
              required
              pattern='^[a-zA-Z]+$'
              name="firstName"
              id='inputFirstName'
              className='form-control'
              type="text"
              value={this.state.firstName}
              onChange={this.handleFirsName}
              placeholder='Enter first name'/>
            <span className='error'>{this.state.firstNameError}</span>
          </div>

          <div className='lastName'>
            <span> <span className='important'> * </span>Last name:</span>
            <input
              required
              pattern='^[a-zA-Z]+$'
              name="lastName"
              className='form-control'
              id='inputLastName'
              value={this.state.lastName}
              type="text"
              onChange={this.handleInput}
              placeholder='Enter last name'/>
          </div>

          <div className='userName'>
            <span> <span className='important'> * </span>User name:</span>
            <input
              required
              pattern='^[A-Za-z0-9_\-.]+$'
              name="userName"
              className='form-control'
              id='inputUserName'
              value={this.state.userName}
              type="text"
              onChange={this.handleInput}
              placeholder='Enter user name'/>
          </div>

          <div className='tel'>
            <span> <span className='important'> * </span> Tel: </span>
            <MaskedInput
              required
              mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              name="tel"
              className='form-control'
              id='inputTel'
              value={this.state.tel}
              type="text"
              onChange={this.handleInput}
              placeholder='Enter tel'/>
          </div>

          <div className='password'>
            <span> <span className='important'> * </span> Password: </span>
            <input required
                   className='form-control'
                   id='inputPassword'
                   type="password"
                   value={this.state.password}
                   name="password"
                   onChange={this.handleInput}
                   placeholder='Enter password'/>
          </div>

          <div className='confirmPassword'>
            <span> <span className='important'> * </span>Confirm password: </span>
            <input
              required
              value={this.state.confirmPassword}
              name="confirmPassword"
              className='form-control'
              id='inputConfirmPassword'
              type="password"
              onChange={this.handleInput}
              placeholder='Enter password'/>
          </div>

          <div className='address'>
            <span> <span className='important'> * </span>Address: </span>
            <input
              required
              value={this.state.address}
              name="address"
              className='form-control'
              id='inputAddress'
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

          <div className='email'>
            <span>  Email: </span>
            <input
              name="email"
              pattern='^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$'
              className='form-control'
              id='inputEmail'
              value={this.state.email}
              type="text"
              onChange={this.handleInput}
              placeholder='Enter email'/>
          </div>

          <div className='info'>
            <span>Additional info:</span>
            <textarea
              value={this.state.additionalInfo}
              name='additionalInfo'
              onChange={this.handleInput}
              className='form-control'/>
          </div>

          <div className='wrapperButton'>
            <input className='btn btn-outline-primary' type="submit" value="Submit"/>
          </div>

          <span className='infoUser'>* field is required</span>
        </form>

      </div>
    )
  }
}
