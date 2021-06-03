import LoginForm from './login_form';
import { connect } from 'react-redux';
import { sendLogin } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.sessionUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendLogin: user => dispatch(sendLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);