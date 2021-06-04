import { connect } from 'react-redux';
import { removeError } from '../../actions/errors_actions';
import Alert from './alert';

const mapStateToProps = state => {
    return {
        currentUser: state.sessionUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeError: errorId => dispatch(removeError(errorId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Alert);