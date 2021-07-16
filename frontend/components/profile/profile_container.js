import {connect} from "react-redux";
import { fetchUser } from "../../actions/users_actions";
import { fetchRelations } from '../../actions/users_games_actions';
import Profile from "./profile";



const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.sessionUser,
        userInfo: state.entities.users,
        ownedGames: state.entities.library
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId)),
        fetchRelations: userId => dispatch(fetchRelations(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);