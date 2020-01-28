import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from './Header'
import { user } from '../../actions'
import { doctor } from '../../actions'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    mainUser: state.user.mainUser,
    doctors: state.doctor.doctors
  }
}

const mapDispatchToProps = (dispatch) => {
  const { setUserData, clearUserData } = user
  const { setDoctorData } = doctor
  return bindActionCreators({ setUserData, clearUserData, setDoctorData }, dispatch)
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
