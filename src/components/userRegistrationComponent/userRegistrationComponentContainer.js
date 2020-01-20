import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import userComponent from './userRegistrationComponent'
import { user } from '../../actions'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    mainUser: state.user.mainUser
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData } = user
  return bindActionCreators({ setUserData }, dispatch)
}

const userRegistrationComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(userComponent)

export default userRegistrationComponentContainer
