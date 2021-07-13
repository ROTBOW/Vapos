import {connect} from "react-redux";
import { fetchUser } from "../../actions/users_actions";
import Profile from "./profile";



const mapStateToProps = state => {
    return {
        currentUser: state.sessionUser,
        userInfo: state.entities.users,
        games: state.games
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);