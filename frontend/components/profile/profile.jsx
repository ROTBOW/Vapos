import React from "react";
import { Link } from "react-router-dom";
import { BsPersonFill, BsTrophy } from "react-icons/bs";

export const isEmpty = (pojo, returnCount=false) => {
    let count = 0;
    for (let id in pojo) count++;
    return (returnCount) ? count : !(count > 0);
    // return !(count > 0);
}

class Profile extends React.Component {

    constructor(props){
        super(props);

        let thisUser;
        if (this.props.user === undefined) {
            thisUser = this.props.currentUser
        } else {
            thisUser = this.props.givenUser;
        }

        this.state = {
            currentUser: thisUser
        }
    }

    componentDidMount(){
        // grabs info about owned games
        this.props.fetchUser(this.state.currentUser.id)
        this.props.fetchRelations(this.state.currentUser.id)
    }

    render(){
        if (!isEmpty(this.props.userInfo) && !isEmpty(this.props.ownedGames) ) {
            let userInfo = this.props.userInfo[this.props.currentUser.id];
            let ownedGames = this.props.ownedGames;
            
            console.log(isEmpty(ownedGames, true));

            return (
                <div className="background-shape" >

                    <div id="profile-page">

                        <div className="profile-header">
                            {/* <img src="https://plchldr.co/i/165x165"></img> */}
                            <div>
                                <BsPersonFill className="profile-icon"/>
                                <div>
                                    <h2>{this.state.currentUser.username}</h2>
                                    <article> {userInfo.desc} </article>
                                </div>
                            </div>

                            <aside>
                                <h2>LEVEL <div className="circle"><p>0</p></div></h2>
                                <div> <BsTrophy/> Use Vapos<br/>150 XP</div>
                                <div>Has {isEmpty(ownedGames, true)} Game(s) in Library</div>
                                {/* <Link to="#">Edit Profile</Link> */}
                            </aside>

                        </div>

                        {/* <div>this is also an item that goes below the profile header</div> */}

                    </div>

                </div>
            )

        } else {
            return (
                <div>well isn't this something?</div>
            )
        }
    }

}


export default Profile;