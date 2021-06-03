
import { connect } from 'react-redux';
import { sendLogout } from '../../actions/session_actions';
import NavBar from './navbar'

const mapStateToProps = state => {
  return {
    currentUser: state.sessionUser
  }
}


const mapDispatchToProps = dispatch => {
    return {
      sendLogout: () => dispatch(sendLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)