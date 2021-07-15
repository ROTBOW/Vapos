import { connect } from 'react-redux';
import { fetchSearch } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = state => {
    return {
        results: state.entities.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchSearch: search => dispatch(fetchSearch(search))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);