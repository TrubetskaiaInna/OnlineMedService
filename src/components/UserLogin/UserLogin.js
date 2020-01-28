import React, { Component } from 'react'
import './UserLogin.scss'
import {apiService} from '../../service/apiService'
import Message from '../Message/Message'
import Spinner from '../Spinner/Spinner'

class userLogin extends Component {
  constructor () {
    super()
    this.state = {
      nicknameLog: '',
      nicknameErrorLog: '',
      passwordLog: '',
      passwordErrorLog: '',
      disabled: true,
      showMessage: false,
      showSpinner: false,
      validInput: false
    }
  }

  allValid = () => {
    return this.state.nicknameLog && this.state.passwordLog && !this.state.passwordErrorLog
      && !this.state.nicknameErrorLog
  }

  isValidForm = () => {
    if (this.allValid()) {
      this.setState({ disabled: false })
    } else {
      this.setState({ disabled: true })
    }
  }

  handleNickname = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    }, () => {
      let re = new RegExp('^[A-Za-z0-9_\\-.]+$')
      let result = re.test(this.state.nicknameLog)
      if (!result) {
        this.setState({ nicknameErrorLog: 'nickname can only contain number, letter, dash, underscore, and dot' },
          this.isValidForm)
      } else {
        this.setState({ nicknameErrorLog: '' },
          this.isValidForm)
      }
    })
  }

  handlePassword = (e) => {
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    }, () => {
      let re = new RegExp('^([a-zA-Z0-9]{10,})+$')
      let result = re.test(this.state.passwordLog)
      if (!result) {
        this.setState({ passwordErrorLog: 'password must contain at least 10 characters (letters or number)' },
          this.isValidForm)
      } else {
        this.setState({ passwordErrorLog: '' },
          this.isValidForm)
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ showSpinner: true })
    const { nicknameLog, passwordLog } = this.state
    apiService.login({ nicknameLog, passwordLog })
      .then(() => {
        this.props.setUserData({ nicknameLog, passwordLog })
        this.props.history.push('/personalAccount')
      }).catch(() => {
      this.setState({
        showMessage: true,
        showSpinner: false,
        nicknameLog: '',
        passwordLog: '',
        validInput: true
      })
    })
  }

  render () {
    return (
      <>
        {this.state.showSpinner ? <Spinner/> :
          <div className='wrapperLogComponent'>

            <div className='wrapperLogin'>
              <form onSubmit={this.onSubmit}>

                <div className='text'><h4>Access to your personal account</h4></div>
                <div className='nickname'>
                  <span>Nickname:</span>
                  <input
                    required
                    pattern='^[A-Za-z0-9_\-.]+$'
                    name="nicknameLog"
                    id='inputNickname'
                    className={this.state.validInput ? 'form-control inputNickNameValid' : 'form-control'}
                    value={this.state.nicknameLog}
                    type="text"
                    onChange={this.handleNickname}
                    placeholder='Enter nickname'/>
                  <span className='error'>{this.state.nicknameErrorLog}</span>
                </div>

                <div className='password'>
                  <span> Password: </span>
                  <input
                    required
                    pattern='^([a-zA-Z0-9]{10,})+$'
                    className={this.state.validInput ? 'form-control inputNickNameValid' : 'form-control'}
                    id='inputPassword'
                    type="password"
                    value={this.state.passwordLog}
                    name="passwordLog"
                    onChange={this.handlePassword}
                    placeholder='Enter password'/>
                  <span className='error'>{this.state.passwordErrorLog}</span>
                </div>
                <div className='wrapperButton'>
                  <input disabled={this.state.disabled} className='btn btn-secondary' type="submit" value="Login"/>
                </div>
              </form>
              {this.state.showMessage ? <Message/> : null}
            </div>
          </div>
        }
      </>
    )
  }
}

export default userLogin
