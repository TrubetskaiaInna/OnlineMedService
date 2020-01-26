import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserRegistrationComponent from './UserRegistrationComponent'
import { user } from '../../actions'

const mapStateToProps = (state) => {
  console.log(state)
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
)(UserRegistrationComponent)

export default UserRegistrationComponentContainer
