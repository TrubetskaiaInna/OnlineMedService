import React, { Component } from 'react'
import './userLoginComponent.scss'
import { NavLink } from 'react-router-dom'

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
    console.log(nicknameLog, passwordLog)
    this.setState({
      nicknameLog: '',
      passwordLog: '',
    })
  }

  render () {
    return (
      <div className='wrapperLogin'>
        <form onSubmit={this.onSubmit}>

          <h3>Access to your personal account</h3>
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
            <input className='btn btn-secondary' type="submit" value="Submit"/>
          </div>
          <div className='wrapperLinc'><NavLink className='linc' to='/registration'>Registration</NavLink></div>
          <div className='wrapperLinc'><NavLink className='linc' to='/'>Home</NavLink></div>
        </form>
      </div>
    )
  }
}

export default userLoginComponent
