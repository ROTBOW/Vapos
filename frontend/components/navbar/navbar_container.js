
import { connect } from 'react-redux';
import { sendLogout } from '../../actions/session_actions';
import NavBar from './navbar'


const mapDispatchToProps = dispatch => {
    return {
      sendLogout: () => dispatch(sendLogout())
    }
}

export default connect(null, mapDispatchToProps)(NavBar)