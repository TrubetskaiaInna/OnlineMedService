import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserLoginComponent from './UserLoginComponent'
import { user } from '../../actions'

const mapStateToProps = (state) => {
  console.log(111, state)
  return {
    mainUser: state.user.mainUser
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData, clearUserData } = user
  return bindActionCreators({ setUserData, clearUserData }, dispatch)
}

const UserRegistrationComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserLoginComponent)

export default UserRegistrationComponentContainer
