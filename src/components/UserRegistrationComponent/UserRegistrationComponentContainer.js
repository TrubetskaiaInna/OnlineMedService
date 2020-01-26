import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import userComponent from './UserRegistrationComponent'
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

const userRegistrationComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(userComponent)

export default userRegistrationComponentContainer
