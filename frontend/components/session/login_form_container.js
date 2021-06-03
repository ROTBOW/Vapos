import LoginForm from './login_form';
import { connect } from 'react-redux';
import { sendLogin, resetErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.sessionUser,
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendLogin: user => dispatch(sendLogin(user)),
        resetErrors: () => dispatch(resetErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);