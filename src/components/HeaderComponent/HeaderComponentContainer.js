import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HeaderComponent from './HeaderComponent'
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

const HeaderComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default HeaderComponentContainer
