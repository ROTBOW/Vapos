import { connect } from 'react-redux';
import { sendLogin } from '../../actions/session_actions';
import { createUser } from '../../actions/users_actions';
import SignUpForm from './signup_form';

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        createUser: user => dispatch(createUser(user)),
        sendLogin: user => dispatch(sendLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);