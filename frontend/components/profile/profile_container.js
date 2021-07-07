import {connect} from "react-redux";
import Profile from "./profile";



const mapStateToProps = state => {
    return {
        currentUser: state.sessionUser,
        games: state.games
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);