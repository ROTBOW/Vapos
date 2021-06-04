import {connect} from 'react-redux';
import AlertList from './alert_lists';
import { resetErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetErrors: () => dispatch(resetErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertList);