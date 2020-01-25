import React, { Component } from 'react'
import './userLoginComponent.scss'
import apiService from '../../service/apiService'

class userLoginComponent extends Component {
  constructor () {
    super()
    this.state = {
      nicknameLog: '',
      nicknameErrorLog: '',
      passwordLog: '',
      passwordErrorLog: ''
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
        this.setState({ nicknameErrorLog: 'nickname can only contain number, letter, dash, underscore, and dot' })
      } else {
        this.setState({ nicknameErrorLog: '' })
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
        this.setState({ passwordErrorLog: 'password must contain at least 10 characters (letters or number)' })
      } else {
        this.setState({ passwordErrorLog: '' })
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { nicknameLog, passwordLog } = this.state
    apiService.login({ nicknameLog, passwordLog })
      .then(() => {
        this.props.setUserData({ nicknameLog, passwordLog })
        this.props.history.push('/personalAccount')
      }).catch(() => {
      this.setState({
        nicknameLog: '',
        passwordLog: ''
      })
    })
  }

  render () {
    return (
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
                className='form-control'
                id='inputNickname'
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
                className='form-control'
                id='inputPassword'
                type="password"
                value={this.state.passwordLog}
                name="passwordLog"
                onChange={this.handlePassword}
                placeholder='Enter password'/>
              <span className='error'>{this.state.passwordErrorLog}</span>
            </div>
            <div className='wrapperButton'>
              <input className='btn btn-secondary' type="submit" value="Login"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default userLoginComponent
