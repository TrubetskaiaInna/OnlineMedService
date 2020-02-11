import React, { Component } from 'react'
import MaskedInput from 'react-text-mask'
import { RadioButton } from 'primereact/radiobutton'
import './UserRegistration.scss'
import { apiService } from '../../service/apiService'

export default class userRegistration extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      firstNameError: '',
      lastName: '',
      lastNameError: '',
      userName: '',
      userNameError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      password: '',
      passwordError: '',
      confirmPassword: '',
      confirmPasswordError: '',
      actionConfirmPasswordError: false,
      address: '',
      sex: '',
      additionalInfo: '',
      disabled: true,
    }
  }

  allValid = () => {
    return this.state.firstName && this.state.lastName && this.state.userName && this.state.sex
      && this.state.password && this.state.confirmPassword && this.state.phone && this.state.address && !this.state.emailError
      && !this.state.passwordError && !this.state.confirmPasswordError && !this.state.firstNameError
      && !this.state.lastNameError && !this.state.userNameError && !this.state.phoneError
  }

  isValidForm = () => {
    if (this.allValid()) {
      this.setState({ disabled: false })
    } else {
      this.setState({ disabled: true })
    }
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    }, () => {
      this.isValidForm()
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
        this.setState({ firstNameError: 'first name can only contain letters' },
          this.isValidForm)
      } else {
        this.setState({ firstNameError: '' },
          this.isValidForm
        )
      }
    })
  }

  handleLastName = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    }, () => {
      let re = new RegExp('^[a-zA-Z]+$')
      let result = re.test(this.state.lastName)
      if (!result) {
        this.setState({ lastNameError: 'last name can only contain letters' },
          this.isValidForm)
      } else {
        this.setState({ lastNameError: '' },
          this.isValidForm)
      }
    })
  }

  handleUserName = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    }, () => {
      let re = new RegExp('^[A-Za-z0-9_\\-.]+$')
      let result = re.test(this.state.userName)
      if (!result) {
        this.setState({ userNameError: 'UserName can only contain number, letter, dash, underscore, and dot' },
          this.isValidForm)
      } else {
        this.setState({ userNameError: '' },
          this.isValidForm)
      }
    })
  }

  // handlePhone = (e) => {
  //   const name = e.target.name
  //   this.setState({
  //     [name]: e.target.value
  //   }, () => {
  //     let re = new RegExp('^\\(?\\d{3}\\)?\\d{3}\\+?([-])\\d{4}$')
  //     let result = re.test(this.state.phone)
  //     if (!result) {
  //       this.setState({ phoneError: 'enter valid telephone number' },
  //         this.isValidForm)
  //     } else {
  //       this.setState({ phoneError: '' },
  //         this.isValidForm)
  //     }
  //   })
  // }

  isValidPassword = () => {
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
          confirmPasswordError: 'password does not match',
          actionConfirmPasswordError: true
        },
        this.isValidForm)
    } else {
      this.setState({
          confirmPasswordError: '',
          actionConfirmPasswordError: false
        },
        this.isValidForm)
    }
  }

  handlePassword = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    }, () => {
      let re = new RegExp('^([a-zA-Z0-9]{10,})+$')
      let result = re.test(this.state.password)
      if (!result) {
        this.setState({ passwordError: 'password must contain at least 10 characters (letters or number)' },
          this.isValidPassword)
      } else {
        this.setState({ passwordError: '' },
          this.isValidPassword)
      }
    })
  }

  handleConfPassword = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    }, () => {
      if (this.state.password !== this.state.confirmPassword) {
        this.setState({
            confirmPasswordError: 'password does not match',
            actionConfirmPasswordError: true
          },
          this.isValidForm)
      } else {
        this.setState({
            confirmPasswordError: '',
            actionConfirmPasswordError: false
          },
          this.isValidForm)
      }
    })
  }

  handleRadio = (e) => {

    this.setState({
      sex: e.target.value
    }, this.isValidForm)
  }

  handleEmail = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    }, () => {
      let re = new RegExp('^([A-Za-z0-9_\\-.])+@([A-Za-z0-9_\\-.])+\\.([A-Za-z]{2,4})$')
      let result = re.test(this.state.email)
      if (!result) {
        this.setState({ emailError: 'enter valid email' },
          this.isValidForm)
      } else {
        this.setState({ emailError: '' },
          this.isValidForm)
      }
    })
  }

  onSubmit = async (e) => {
    e.preventDefault()
    const { firstName, lastName, email, userName, password, address, phone, sex } = this.state
    const newUserForm = { firstName, lastName, email, userName, password, address, phone, sex }
    await apiService.registration(newUserForm)
    this.props.history.push('/login')
  }

  render () {
    return (
      <div className='wrapperRegComponent'>
        <div className='wrapperForm'>
          <form onSubmit={this.onSubmit}>

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
                onChange={this.handleLastName}
                placeholder='Enter last name'/>
              <span className='error'>{this.state.lastNameError}</span>
            </div>

            <div className='userName'>
              <span> <span className='important'> * </span>UserName:</span>
              <input
                required
                pattern='^[A-Za-z0-9_\-.]+$'
                name="userName"
                className='form-control'
                id='inputUserName'
                value={this.state.userName}
                type="text"
                onChange={this.handleUserName}
                placeholder='Enter user name'/>
              <span className='error'>{this.state.userNameError}</span>
            </div>

            <div className='phone'>
              <span> <span className='important'> * </span> Telephone: </span>
              <MaskedInput
                required
                // mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                mask={['+', /[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                name="phone"
                className='form-control'
                id='inputPhone'
                value={this.state.phone}
                type="text"
                onChange={this.handleInput}
                placeholder='Enter telephone'/>
            </div>

            <div className='password'>
              <span> <span className='important'> * </span> Password: </span>
              <input
                required
                pattern='^([a-zA-Z0-9]{10,})+$'
                className='form-control'
                id='inputPassword'
                type="password"
                value={this.state.password}
                name="password"
                onChange={this.handlePassword}
                placeholder='Enter password'/>
              <span className='error'>{this.state.passwordError}</span>
            </div>

            <div className='confirmPassword'>
              <span> <span className='important'> * </span>Confirm password: </span>
              <input
                id={this.state.actionConfirmPasswordError ? 'inputConfirmPasswordError' : 'inputConfirmPassword'}
                required
                value={this.state.confirmPassword}
                name="confirmPassword"
                className='form-control'
                type="password"
                onChange={this.handleConfPassword}
                placeholder='Enter password'/>
              <span className='error'>{this.state.confirmPasswordError}</span>
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
                <RadioButton
                  type="radio"
                  value="Women"
                  checked={this.state.sex === 'Women'}
                  onChange={this.handleRadio}
                />
                <label>women</label>

                <RadioButton
                  type="radio"
                  value="Men"
                  checked={this.state.sex === 'Men'}
                  onChange={this.handleRadio}
                />
                <label>men</label>

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
                onChange={this.handleEmail}
                placeholder='Enter email'/>
              <span className='error'>{this.state.emailError}</span>
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
              <input disabled={this.state.disabled} className='btn btn-outline-primary' type="submit"
                     value="Registration"/>
            </div>

            <span className='infoUser'>* field is required</span>
          </form>

        </div>
      </div>
    )
  }
}
