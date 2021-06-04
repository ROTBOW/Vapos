import { connect } from 'react-redux';
import { sendLogin, resetErrors } from '../../actions/session_actions';
import { createUser } from '../../actions/users_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: user => dispatch(createUser(user)),
        sendLogin: user => dispatch(sendLogin(user)),
        resetErrors: () => dispatch(resetErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);